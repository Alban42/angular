import { Product } from '../models/product';

export abstract class GenericProductService {

    public abstract getAllProducts(): Array<Product>;
    
    public abstract  addProduct(prodcut:Product):void;
    
    public abstract getLength():number;

}
