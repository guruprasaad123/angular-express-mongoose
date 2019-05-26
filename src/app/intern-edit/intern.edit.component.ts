import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

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
	constructor(public route: ActivatedRoute, public internService: InternService) {


	}

	ngOnInit()
	{
        this.route.params.subscribe(params => {
         
            console.log(params['id']);
            this._id=params['id']; 
            this.internService.get(this._id).subscribe(x=>{
            console.log('got intern',x);
            this.intern=x;
        })
          });
      
    }
    
    submit()
    {
        this.internform.value;
    }

}
