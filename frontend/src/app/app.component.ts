import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Item } from './item.model';
// import model item



@Component({
  selector: 'app-root', // markup for html showing component on page
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})



export class AppComponent {
  [x: string]: any;
  
 

  invoice: Item[];

  constructor() {
    // initialize variable
    this.invoice = [];
    var item = new Item('item', 1, 1);
    this.invoice.push(item);
  }
 

   // add another item.
   
 addItem(): void {
  var item = new Item('item', 1, 1);
 this.invoice.push(item);
}

// delete item
deleteItemInvoice(index): void {
 this.invoice.splice(index, 1);
}


// calculate total price for one element

subTotal(item): number {
  let res = 0;
 // return item.qty * item.price;
 if (item.qty > 100) {
  return (item.qty * item.price ) * (0.5 * 100) / 1000;
 } else if (item.qty > 250) {
  return  res + (item.qty * item.price ) * (0.10 * 100) / 1000;
 } else if (item.qty > 500) {
  return res + (item.qty * item.price ) * (0.15 * 100) / 1000;
 } else if (item.qty > 1000) {
  return res + (item.qty * item.price ) * (0.20 * 100) / 1000;
 }   

 return item.qty * item.price;
}


// calculate total price for cart.

total(): number {
 let total = 0;
 for (const item of this.invoice) {
   total = total + (item.getQty() * item.getPrice());
 }
 return total;
}

  exampleItems = [];

  lastUpdate= new Date();
  
  async selectAll() {
    try {
      console.log(environment.readAll);
      console.log('calling read all endpoint');

      this.exampleItems = [];
      const output = await fetch(environment.readAll);
      const outputJSON = await output.json();
      this.exampleItems = outputJSON;
      console.log('Success');
      console.log(outputJSON);
    } catch (error) {
      console.log(error);
    }
  }

  // click "create item", fill the form and then click save to create 
  async saveItem(item: any) {
    try {
      console.log(environment.create);
      console.log('calling create item endpoint with: ' + item.id);

      const requestBody = {
        id: item.id,
        item: item.item,
        qty: item.qty,
        price: item.price,
        total: item.total,
        status: item.status,
        date: item.date
      };

      const createResponse =
        await fetch(environment.create, {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers:{
            'Content-Type': 'application/json'
          }
        });
      console.log('Success');
      console.log(createResponse.status);

      // call select all to update the table
      this.selectAll();
    } catch (error) {
      console.log(error);
    }
  }

  async updateItem(item: any) {
    try {
      console.log(environment.update);
      console.log('calling update endpoint with id ' + item.id + ' ,' + item.item + ',' + item.qty + ',' + item.price + ',' + item.total + ',' + item.status + ',' + item.date);

      const requestBody = {
        item: item.item
      };

      const updateResponse =
        await fetch(environment.update + item.id, {
          method: 'PUT',
          body: JSON.stringify(requestBody),
          headers:{
            'Content-Type': 'application/json'
          }
        });
      console.log('Success');
      console.log(updateResponse.status);

      // call select all to update the table
      this.selectAll();
    } catch (error) {
      console.log(error);
    }
  }

  async deleteItem(item: any) {
    try {
      console.log(environment.delete);
      console.log('calling delete endpoint with id ' + item.id);

      const deleteResponse =
        await fetch(environment.delete + item.id, {
          method: 'DELETE',
          headers:{
            'Content-Type': 'application/json'
          }
        });

      console.log('Success');
      console.log(deleteResponse.status);

      // call select all to update the table
      this.selectAll();
    } catch (error) {
      console.log(error);
    }
  }

  createItem() {
    this.exampleItems.push({
      id: '',
      item: '',
      qty: '',
      price: 1,
      total: '',
      status: '',
      date: '',
      save: true
    });
  }

  
}
