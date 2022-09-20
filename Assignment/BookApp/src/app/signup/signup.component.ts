import { Component, OnInit } from '@angular/core';
import {UserData} from '../models/userdata';
import {LoginServiceService } from '../services/login-service.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _service:LoginServiceService,private _router:Router) { }
  UserdataModel:UserData=new UserData();
  ngOnInit(): void {
  }

  registerUser()
  {
    if(this.UserdataModel.type=="1")
    {
      this.UserdataModel.type="Author";
    }
    if(this.UserdataModel.type=="2")
    {
      this.UserdataModel.type="Reader";
    }
    this._service.registerUser(this.UserdataModel).subscribe(res=>{
     /*  console.log('Hi you are able to login');
      alert('Hi'); */
      localStorage.setItem('token',res.token);
      this._router.navigate(['home']);
    },res=>console.log(res));
  }

}
