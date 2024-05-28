import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items = [];
  private itemsSubject = new BehaviorSubject<any[]>([]);

  getCartItems() {
    return this.itemsSubject.asObservable();
  }

  addToCart(product) {
    const item = this.items.find(i => i.product.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      this.items.push({ product, quantity: 1 });
    }
    this.itemsSubject.next(this.items);
  }

  removeFromCart(product) {
    const itemIndex = this.items.findIndex(i => i.product.id === product.id);
    if (itemIndex >= 0) {
      this.items.splice(itemIndex, 1);
      this.itemsSubject.next(this.items);
    }
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
}
