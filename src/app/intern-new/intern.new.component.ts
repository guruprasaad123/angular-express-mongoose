import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

import { InternService } from '../services/intern.service';
import { Intern } from '../intern.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
selector: 'app-intern-new',
templateUrl: './intern.new.component.html',
styleUrls: ['./intern.new.component.scss']
}
)
export class InternNewComponent implements OnInit{

internform:FormGroup;
name=new FormControl('',[
    Validators.required,
    Validators.min(5),
    Validators.max(100)
]);
age=new FormControl('',[
    Validators.required,
    
]);
dob=new FormControl('',[
    Validators.required,
    
]);
skills = new FormControl('',[
    Validators.required,
    
]);
role = new FormControl('',[
    Validators.required,
    
]);

intern:Intern;
_id:any;
	constructor(public router:Router,public route: ActivatedRoute, public internService: InternService) {

 this.internform= new FormGroup({
name:this.name ,
age:this.age,
role:this.role,
skills:this.skills,
dob:this.dob
 });
	}

	ngOnInit()
	{
  
    }
    
    submit()
    {
        const value = this.internform.value;
        if(value)
        {
              value.skills = value.skills.split(',');
              console.log('new ',value);
             
        this.internService.add(value).subscribe( ()=>{
            this.router.navigate(['interns']);
        });  
        }
    
    }

}
