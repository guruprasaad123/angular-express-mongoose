import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../user.model';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>('/api/register', user);
  }

  login(credentials): Observable<any> {
    return this.http.post('/api/login', credentials);
  }

  
}