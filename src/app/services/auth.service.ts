import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../user.model';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  user = null;
  auth = false;

  constructor(private http: HttpClient, private route: Router , private jwt: JwtHelperService) {
    const token = localStorage.getItem('TOKEN');
    console.log('TOKEN' , token);
    if ( token && token !== 'undefined') {
   const decoded = this.decodeFromToken(token);
   if(decoded.user){
     this.user=decoded.user;
     this.auth=true;
   }

    }
   }


isAuthenticated()
{
  return this.auth;
}

  register(user: User): Observable<User> {
    return this.http.post<User>('/api/register', user);
  }

  decodeFromToken(token) {
  const decoded = this.jwt.decodeToken(token);
  console.log(decoded);
  return decoded;
  }

  logout():void{
    localStorage.remove('TOKEN');
    this.user=null;
    this.auth=false;
  }
  login(credentials): void {
   this.http.post('/api/login', credentials).subscribe( (response: any) => {
    console.log('login token', response);
    if (response.token) {
    localStorage.setItem('TOKEN', response.token);
    this.route.navigate(['interns']);
    }
   }
   );


  }
}
