import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'productPipe'
})
export class ProductPipe implements PipeTransform {

  transform(value: Product, args?: any): string {
    return `product: ${value.name} costs: ${value.price} soldout: ${value.soldout}`;
  }

}
