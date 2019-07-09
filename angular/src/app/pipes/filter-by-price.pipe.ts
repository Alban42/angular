import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterByPrice'
})
export class FilterByPricePipe implements PipeTransform {

  transform(value: Array<Product>, amount: number): Array<Product> {
    return value.filter( product => product.price > amount);
  }

}
