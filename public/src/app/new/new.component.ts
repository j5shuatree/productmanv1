import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';
import { NgForm, FormsModule } from '@angular/forms';
import { Product } from '../models/product';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  @Input()  product: Product;
  newProduct = new Product();
  constructor(private _http: HttpService) { }

  ngOnInit() {
  }
  onAddProduct(event: Event, form: NgForm) {
    event.preventDefault();
    console.log(form.value);
    let tempObservable = this._http.addProduct(form.value);
    tempObservable.subscribe(data => {
      console.log(`Here is some Product data`, data);
      this.newProduct = new Product();
    });
  }

}
