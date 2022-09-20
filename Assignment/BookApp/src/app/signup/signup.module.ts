import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'
import { SignupComponent } from './signup.component';
import { signuproutes  } from '../routing/signuproutes';


@NgModule({
  declarations: [
  
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(signuproutes)
  ],
  providers: [],
  bootstrap: [SignupComponent]
})
export class SignupModule { }
