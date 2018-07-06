import { Component } from '@angular/core';
import { Login } from '../../imports';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends Login {
  pageTitle:string;
  constructor() {
    super();
  }

}
