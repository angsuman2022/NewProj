import { Component, OnInit } from '@angular/core';
import {LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(private _auth:LoginServiceService) { }

  ngOnInit(): void {
  }
  LoggedIn(Input:boolean):boolean{
    if(Input)
    {
      return this._auth.logingIn();
    }
    else{
      return !this._auth.logingIn();
    }
  }
  Logout(){
    this._auth.logotUser();
  }

}
