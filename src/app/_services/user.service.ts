import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../_models/user';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http, private auth: AuthenticationService) { }

  getUsers(): Observable<User[]> {
    // add auth header with jwt token
    let headers = new Headers({'Authorization': 'Bearer ' + this.auth.token});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('/api/users', options)
      .map((response: Response) => response.json());
  }
}
