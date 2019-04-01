import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Product } from './models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  title = 'angular-demo';
  products: Product[];
  subscription: Subscription;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.subscription = this.appService.products.subscribe(
      (data: Product[]) => {
        this.products = data;
      });
    this.appService.onGetProducts();
  }
}
