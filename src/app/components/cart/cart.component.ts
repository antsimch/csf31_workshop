import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input() cartList: { name: string, quantity: number }[] = [];

  removeItem(item: string) {
    console.log(`itemToDelete: ${item}`);
    let objFound = this.cartList.find(obj => obj.name === item);
    let indexOfObj: number;

    if (objFound != undefined) {
      indexOfObj = this.cartList.indexOf(objFound, 0);
      this.cartList.splice(indexOfObj, 1);
    }
  }
}
