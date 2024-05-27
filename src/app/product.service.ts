import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseURL = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get<Product[]>(this.baseURL);
  }
  getProductById(id: string | number | undefined) {
    return this.http.get<Product>(`${this.baseURL}/${id}`);
  }
  createProduct(product: Product) {
    return this.http.post(`${this.baseURL}`, product);
  }
  deleteProduct(id: string | number| undefined) { 
     return this.http.delete(`${this.baseURL}/${id}`);
  }
  Update(data: Product){
    return this.http.put<Product>(`${this.baseURL}/${data.id}`,data);
  }
}
