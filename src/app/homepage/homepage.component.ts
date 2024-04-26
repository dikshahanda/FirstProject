import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  type=10

  result(){
    // alert("You are on right path")
    // console.log('hello you are searching')
    // confirm('click ok or cancel')
    if (this.type<5){
      alert('your value is greater')
    }
    else{
      alert('your value ')
    }
  }
  
}
