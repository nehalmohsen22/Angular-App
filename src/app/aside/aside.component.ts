import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { CartService } from '../product/cart-service/cart.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  cartItems?: Product[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems().items;
  }

  deleteFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    window.alert('Your product has been removed from the cart!');
  }
}
