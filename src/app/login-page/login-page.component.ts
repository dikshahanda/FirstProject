import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  userINFO(m2:string,m3:string){

    // var login={"email":m2, "password":m3}
    console.log(m2,m3);}
}
