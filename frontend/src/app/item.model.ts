export class Item {

  private description: string;
  private price: number;
  private qty: number;

  constructor(description: string, price: number, qty: number) {
    this.description = description;
    this.price = price;
    this.qty = qty;
  }

  getDescription(){
    return this.description;
  }

  getPrice(){
    return this.price;
  }

  getQty(){
    return this.qty;
  }
}
