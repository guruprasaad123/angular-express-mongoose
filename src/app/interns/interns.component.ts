import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { InternService } from '../services/intern.service';
import { Intern } from '../intern.model';


@Component({
selector: 'app-interns',
templateUrl: './interns.component.html',
styleUrls: ['./interns.component.scss']
}
)
export class InternsComponent implements OnInit{

interns:Intern[];
	constructor(public route: Router, public internService: InternService) {

	
	}

	ngOnInit()
	{
		this.internService.getAll().subscribe(x=>{
			console.log('interns',x);
			this.interns=x;
		});
	}

}
