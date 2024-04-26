import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VNS';
  productQty=50


  buyingQty=2

  message=""


  calculatePrice(){

    if (this.productQty*this.buyingQty>10)
      {
       this.message="Its greater than 10";
      }
      else{
        this.message="Its lesser than 10";
      }
    return this.productQty*this.buyingQty;
  }

  showMe(){
    alert("you clicked on get started button")
  }

 

}
