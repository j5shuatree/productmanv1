import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Product } from './models/product';
import { HttpService } from './http.service';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product = Product;
  title = 'Home Page';
  myProduct: Product[] = [];
  selectedProduct: Product;
  Products = [];
  newProduct = new Product();
  toggledisplay = false;
  toggledisplay2 = false;


    constructor(private _http: HttpService) {
    }

    toggle() {
      this.toggledisplay = !this.toggledisplay;
    }
    toggle2() {
      this.toggledisplay2 = !this.toggledisplay2;
    }


    getProduct() {
        let tempObservable = this._http.getAllProducts();

        tempObservable.subscribe(
          (res: any) => {
            this.myProduct = res.data;
            // Where you find the array res.data or res.data.data
            console.log('res is ', res.data);
          },
         );
        }
    onProductDetails(product: Product) {
        this.selectedProduct = product;
      }

    onAddProduct(form: NgForm) {
        let tempObservable = this._http.addProduct(form.value);
        tempObservable.subscribe(data => {
          console.log(`Here is some prodId data`, data);
          this.newProduct = new Product();
        });
        this.getProduct();
      }

    onProdUpdate(prodId){
      let tempObservable = this._http.onProdUpdate(prodId);
      console.log("**************Update", prodId);

    }
    onDeleteOne(prodId) {
      let tempObservable = this._http.onDelete(prodId);
      tempObservable.subscribe(data => console.log(`Got our data to send for deletion!`, data));
      console.log("**************", prodId);

    }
}
