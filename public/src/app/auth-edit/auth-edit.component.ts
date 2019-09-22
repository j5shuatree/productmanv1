import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './../http.service';
import { Product } from '../models/product';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-auth-edit',
  templateUrl: './auth-edit.component.html',
  styleUrls: ['./auth-edit.component.css']
})
export class AuthEditComponent {
  @Input() product: Product;
  toggledisplay = false;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    console.log('ineditDetailsProd)');
    }


  onProdUpdate(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('got to Prodhupdate', form.value);
    let tempObservable = this._http.onProdUpdate(form.value);
    tempObservable.subscribe(data => console.log(`Got our data to send onProdUpdate!`, data));
    console.log("*********** Update in edit component", form.value);

  }

}
