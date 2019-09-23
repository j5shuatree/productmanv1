import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';
import { NgForm, FormsModule } from '@angular/forms';
import { Product } from '../models/product';
import {FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  @Input()  product: Product;
  newProduct = new Product();
  email = new FormControl('', [Validators.required, Validators.email]);
  title = new FormControl('', [Validators.required]);

  constructor(private _http: HttpService) { }

  ngOnInit() {
  }



  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getErrorMessage2() {
    return this.title.hasError('required') ? 'Must be 2 chars or greater' :
            '';
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
