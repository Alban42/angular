import { Injectable } from "@angular/core";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  public products = new Array<Product>();

  constructor() {
    this.addProductByNameAndPrice("Product 1", 12);
    const product = this.addProductByNameAndPrice("Product 2", 10);
    product.setSoldOut(true);
    this.addProductByNameAndPrice("Product 3", 120);
    this.addProductByNameAndPrice("Product 4", 1);
  }

  public getAllProducts(): Array<Product> {
    return this.products;
  }

  public addProductByNameAndPrice(name: string, price: number): Product {
    const product: Product = new Product(name, price);
    this.products.push(product);
    return product;
  }

  public addProduct(prodcut: Product) {
    this.products.push(prodcut);
  }

  public getLength(): number {
    return this.products.length;
  }

  public getProductsByName(name: string): Product[] {
    let products: Product[];
    if (name === "Patricia Lebsack") {
      products = [new Product("Prod 11", 10), new Product("Prod 12", 2)];
    } else if (name === "Leanne Graham") {
      products = [new Product("Prod 21", 10), new Product("Prod 22", 2), new Product("Prod 23", 2)];
    } else {
      products = [new Product("Prod 31", 10)];
    }

    return products;
  }
}
