import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'meanstack';
  user=null;
  authentication: boolean =false;
  constructor(public router:Router,private authService:AuthService)
  {
    
  }

  ngOnInit()
  {
    if(this.authService.auth)
    {
      this.user=this.authService.user;
      this.authentication=this.authService.auth;
    }
    console.log('auth',this.authentication);
  }

  auth()
  {
  	this.router.navigate(['/auth']);
  }

  logout()
  {
    this.authService.logout();
  }
}
