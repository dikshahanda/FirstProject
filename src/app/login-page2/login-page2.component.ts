import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page2',
  templateUrl: './login-page2.component.html',
  styleUrl: './login-page2.component.css'
})
export class LoginPage2Component {
 loginn(m1:string,m2:string){
    console.log(m1,m2)
 }

}
