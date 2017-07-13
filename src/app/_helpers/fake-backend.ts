
import {MockBackend, MockConnection} from '@angular/http/testing';
import {BaseRequestOptions, RequestMethod, ResponseOptions, Response, Http} from '@angular/http';

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions) {
  // configure fake backend
  backend.connections.subscribe((connection: MockConnection) => {
    let testUser = { username: 'john', password: 'john', firstName: 'John', lastName: 'Smith'};

    // wrap in a timeout to simulate server api call
    setTimeout(() => {
      // fake authenticate api end point
      if(connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
        // get parameters from post request
        let params = JSON.parse(connection.request.getBody());

        if(params.username === testUser.username && params.password === testUser.password) {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200, body: {token: 'fake-jwt-token'}})
          ));
        } else {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200})
          ));
        }
      }

      // fake users api end point
      if(connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Get) {
        // check for fake auth token in header and return test users if valid.  This security is implemented server side
        // in real application
        if(connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          connection.mockRespond(new Response(
            new ResponseOptions({status: 200, body: [testUser]})
          ));
        } else {
          // return 401 not authorised if token is null or invalid
          connection.mockRespond(new Response(
            new ResponseOptions({status: 401})
          ));
        }
      }
    }, 500);

  });

  return new Http(backend, options);
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: Http,
  useFactory: fakeBackendFactory,
  deps: [MockBackend, BaseRequestOptions]
};
