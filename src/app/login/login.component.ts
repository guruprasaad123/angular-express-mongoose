import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../services/auth.service';


@Component({
selector:'app-login',
templateUrl:'./login.component.html',
styleUrls:['./login.component.scss']
}
)
export class LoginComponent{
	loginform :FormGroup;

	email = new FormControl('',[
   Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);

   password = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);

	constructor(public route:Router,public auth:AuthService)
	{

		this.loginform=new FormGroup({
			email:this.email,
			password:this.password
		});

	}

	submit()
	{
		console.log('login',this.loginform.value);
		this.auth.login(this.loginform.value).subscribe((x)=>{
			console.log('login',x);
			this.route.navigate(['']);
		});
	}
}