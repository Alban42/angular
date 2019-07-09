import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { GenericProductService } from 'src/app/services/generic-product-service';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.css']
})
export class Sub2Component implements OnInit {

  public amount:number = 0;

  // Injection de dépendance, ajout du service productService qui sera un singleton (géré par Angular)
  constructor(public productService : GenericProductService) { }

  ngOnInit() {
  }

  public addProduct(name:string, price:number, soldout : boolean):void {
    this.productService.addProduct(new Product(name, price, soldout));
  }

  public goFilter(amount: number):void {
    this.amount = amount;
  }
}
