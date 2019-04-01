import { Injectable } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";
import { Product } from "./models/product.model";

@Injectable()
export class AppService {
    products = new BehaviorSubject<Product[]>(undefined);
    subscription: Subscription;

    items: Product[] = [
        new Product('1', 'Pen', 10, 5, ''),
        new Product('2', 'Pencil', 5, 1, '')
    ]

    onGetProducts() {
        this.products.next(this.items);
    }
}