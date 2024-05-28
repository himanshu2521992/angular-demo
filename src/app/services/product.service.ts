import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, name: 'Product 1', price: 100, description: 'Trouser', image: 'assets/image1.jpg' },
    { id: 2, name: 'Product 2', price: 200, description: 'Shirt', image: 'assets/image2.jpg' },
    // Add more products
  ];

  getProducts(): Observable<any[]> {
    return of(this.products);
  }

  getProduct(id: number): Observable<any> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }
}
