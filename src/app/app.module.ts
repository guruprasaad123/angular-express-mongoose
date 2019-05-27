import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {InternsComponent} from './interns/interns.component';
import { InternEditComponent } from './intern-edit/intern.edit.component';

import {AuthService} from './services/auth.service';
import {InternService} from './services/intern.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthGuardService } from './services/auth.guard.service';
import { InternNewComponent } from './intern-new/intern.new.component';

export function tokenGetter() {
  return localStorage.getItem('TOKEN');
}
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    InternsComponent,
    InternNewComponent,
    InternEditComponent 
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        // whitelistedDomains: ['localhost:3000', 'localhost:4200']
      }
    })
  ],
  providers: [
  AuthService,
  InternService,
  AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
