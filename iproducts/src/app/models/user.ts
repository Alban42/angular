import { Product } from './product';

export class User {

  public products = new Array<Product>();

  public birthdate: Date;

  constructor(public name) {

  }

  public sayHello() {
    console.log(`Coucou je suis ${name}`);
  }
}
