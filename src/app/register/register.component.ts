import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from '../services/auth.service';

@Component({
selector:'app-register',
templateUrl:'./register.component.html',
styleUrls:['./register.component.scss']
}
)
export class RegisterComponent{
	registerform : FormGroup;
	username = new FormControl('',[
		Validators.required,
		Validators.min(5),
		Validators.max(100)
		])
	email=new FormControl('',[
		Validators.required,
		Validators.min(8),
		Validators.max(100)
		]);
	password = new FormControl('',[
		Validators.required,
		Validators.min(8),
		Validators.max(100)
		]);
	age= new FormControl('',[
		Validators.required
		]);
	dob= new FormControl('',[
		Validators.required
		]);


	constructor(public route:Router,public auth:AuthService)
	{
		this.registerform = new FormGroup({
			age:this.age,
			password:this.password,
			dob:this.dob,
			email:this.email,
			username:this.username
		})
	}
	register()
	{
		console.log('register',this.registerform.value);
		this.auth.register(this.registerform.value).subscribe( x => console.log('registered',x))
	}
}