import { Injectable } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";
import { Product } from "./models/product.model";
import { environment } from "../environments/environment.prod";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
    products = new BehaviorSubject<Product[]>(undefined);
    subscription: Subscription;
    items: Product[];

    constructor(private httpClient: HttpClient) { }

    onGetProducts() {
        this.httpClient.get<Product[]>(environment.apiUrl + "/products")
            .subscribe((data: Product[]) => {
                this.products.next(data);
            });
    }
}