import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf31_workshop';

  itemToAdd: { name: string, quantity: number }[] = [];
  inventory: { name: string }[] = [];
  receivedItems: { name: string, quantity: number }[] = [];

  updateItemsIntoCart(event: string) {
    console.log(`itemFromEvent: ${event}`);
    let objFound = this.receivedItems.find(obj => obj.name === event);
    let indexOfObj: number = 0;

    if (objFound != undefined) 
      indexOfObj = this.receivedItems.indexOf(objFound, 0);

    if (objFound != undefined && indexOfObj >= 0) {
      this.receivedItems[indexOfObj].quantity++;
    } else {
      this.receivedItems.push({ name: event, quantity: 1});
    }
  }
}
