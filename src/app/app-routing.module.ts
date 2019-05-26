import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthenticationComponent} from './authentication/authentication.component';
import {AboutComponent} from './about/about.component';
import { InternsComponent } from './interns/interns.component';

import { AuthGuardService } from './services/auth.guard.service';

const routes: Routes = [
{path:'',component:AboutComponent},
{path:'auth',component:AuthenticationComponent},
{path:'interns',component:InternsComponent,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
