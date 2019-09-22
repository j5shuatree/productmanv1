import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class HttpService {
  constructor(private _http: HttpClient) {

  }

  getAllProducts() {
    console.log('in Get all products from services');
    return this._http.get('/api/products/');
  }


  getOneProd(prodId) {
    return this._http.get(`/api/products/${prodId}`);
  }
  addProduct(newProduct) {
    return this._http.post(`/api/products/`, newProduct);
  }

  onProdUpdate(selectedProduct) {
    console.log('posting to backend routesInHTTPSERVICE', selectedProduct._id, selectedProduct);
    return this._http.put(`/api/products/${selectedProduct._id}`, selectedProduct);

  }
  onDelete(prodId) {
    return this._http.delete(`/api/products/${prodId}`);
  }
}
