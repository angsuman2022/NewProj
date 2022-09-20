import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'
import { LoginComponent } from './login.component';
import { loginroutes  } from '../routing/loginroutes';


@NgModule({
  declarations: [
  
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(loginroutes)
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
