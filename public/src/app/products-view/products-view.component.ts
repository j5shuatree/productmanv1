import { HttpService } from './../http.service';
import { Product } from './../models/product';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {
  @Input() product = Product;
  myProduct: Product[] = [];
  selectedProduct: Product;
  Products = [];
  newProduct = new Product();
  toggledisplay3 = false;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getProduct();
  }
  toggle3() {
    this.toggledisplay3 = !this.toggledisplay3;
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

  onEdit(product) {
    console.log('got to the onEdit', product);
    this.product = product;
  }
  onDeleteOne(prodId) {
    let tempObservable = this._http.onDelete(prodId);
    tempObservable.subscribe(data => console.log(`Got our data to send for deletion!`, data));
    console.log("**************", prodId);

  }

}

