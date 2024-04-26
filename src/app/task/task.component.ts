import { Component } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  message="hello" 
  task(){
    console.log('text')
    console.warn('text')
    console.error('text')
    console.info('text')
    this.message="hello world"
   }
  //  bann(m2:string){
  //   console.log(m2)
  //  }

   userINFO(m2:string,m3:string,m4:string,m5:string,m6:string){

    var login={"email":m2, "password":m3}
    console.log(login);
   }
   
}
