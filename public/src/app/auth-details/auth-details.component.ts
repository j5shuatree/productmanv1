import { HttpService } from './../http.service';
import { NgForm, FormsModule } from '@angular/forms';
import { Product } from '../models/product';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-auth-details',
  templateUrl: './auth-details.component.html',
  styleUrls: ['./auth-details.component.css']
})

export class AuthDetailsComponent implements OnInit {
  @Input() product: Product;
  newProduct = new Product();
  
  constructor(private _http: HttpService) { }

  ngOnInit() {
  }
  onAddProduct(form: NgForm) {
    let tempObservable = this._http.addProduct(form.value);
    tempObservable.subscribe(data => {
      console.log(`Here is some Author data`, data);
      this.newProduct = new Product();
    });
  }

}
