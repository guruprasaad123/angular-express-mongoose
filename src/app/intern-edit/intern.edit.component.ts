import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

import { InternService } from '../services/intern.service';
import { Intern } from '../intern.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
selector: 'app-intern-edit',
templateUrl: './intern.edit.component.html',
styleUrls: ['./intern.edit.component.scss']
}
)
export class InternEditComponent implements OnInit{

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
        this.route.params.subscribe(params => {
         
            console.log(params['id']);
            this._id=params['id']; 
            console.log('_id',this._id,params);
            this.internService.get(this._id).subscribe(x=>{
            console.log('got intern',x);
            this.intern=x[0];
            
        this.internform.patchValue({
            name:this.intern.name ,
            age:this.intern.age,
            role:this.intern.role,
            skills:this.intern.skills.join(','),
            dob:this.intern.dob
        })
        });
          });
      
    }
    
    submit()
    {
        const value = this.internform.value;
        if(value)
        {
              value.skills = value.skills.split(',');
              value._id = this._id;
        this.internService.edit(value).subscribe( ()=>{
            this.router.navigate(['interns']);
        });  
        }
    
    }

}
