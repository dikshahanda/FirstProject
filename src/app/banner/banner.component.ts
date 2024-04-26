import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  showMe(){
    alert("you clicked on get started button")
    console.log("hello this is me")
    confirm("diksha")
  }
  butnalrt(){
    alert('you clicked on wrong button')
  }

  // result(){
  //   alert('Congratulations  you are sucessful')
  // }
}
