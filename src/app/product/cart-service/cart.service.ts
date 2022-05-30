import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  counts: number[] = [];

  constructor() {}

  addToCart(product: Product) {
    if (this.items.indexOf(product) === -1) {
      this.items.push(product);
      this.counts.push(1);
    } else {
      this.counts[this.items.indexOf(product)]++;
    }
  }

  removeFromCart(product: Product) {
    if (this.items.indexOf(product) !== -1) {
      this.counts[this.items.indexOf(product)]--;
      if (this.counts[this.items.indexOf(product)] === 0) {
        this.counts.splice(this.items.indexOf(product), 1);
        this.items.splice(this.items.indexOf(product), 1);
      }
    }
  }

  getItems() {
    return { items: this.items, counts: this.counts };
  }

  clearCart() {
    this.items = [];
    this.counts = [];
    return { items: this.items, counts: this.counts };
  }
}
