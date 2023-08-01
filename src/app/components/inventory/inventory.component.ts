import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit { 
  items: { name: string }[] = [];

  @Output() onAddingToCart: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.items.push({ name: 'Intel 24900K' });
    this.items.push({ name: 'Intel 24700K' });
    this.items.push({ name: 'Samsung 1180 PRO 24TB' });
    this.items.push({ name: 'Samsung 1180 PRO 18TB' });
    this.items.push({ name: 'Samsung 1180 PRO 12TB' });
    this.items.push({ name: 'ASUS RTX 9090Ti' });
    this.items.push({ name: 'MSI RTX 9080Ti' });
    this.items.push({ name: 'Gigabyte RTX 9070tTi' });
    this.items.push({ name: 'Zotac RTX 9060Ti' });
  }

  addItemToCart(item: string) {
    
    let objFound = this.items.find(obj => obj.name === item);
    let indexOfObj: number;

    if (objFound != undefined) 
      indexOfObj = this.items.indexOf(objFound, 0);

    this.onAddingToCart.emit(item);
    console.log(`itemToAddToCart: ${item}`);
  }
}
