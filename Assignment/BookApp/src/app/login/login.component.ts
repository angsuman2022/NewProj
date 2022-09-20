import { Component, OnInit } from '@angular/core';
import {UserData} from '../models/userdata';
import {LoginServiceService } from '../services/login-service.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _service:LoginServiceService,private _router:Router) { }
  UserdataModel:UserData=new UserData();
  Errormsg:any='';
  ngOnInit(): void {
  }
  loginUser()
  {
    this._service.loginUser(this.UserdataModel).subscribe(res=>{
     /*  console.log('Hi you are able to login');
      alert('Hi'); */
      localStorage.setItem('token',res.token);
      this._router.navigate(['home']);
    }, res=>
    {
      console.log(res);
      this.Errormsg="There are some error";
      document.getElementById('btnerrormsg')?.click();


    }
  );
  }

}
