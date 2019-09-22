import { ProductsViewComponent } from './products-view/products-view.component';
import { AuthEditComponent } from './auth-edit/auth-edit.component';
import { NewComponent } from './new/new.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path: 'products/view', component: ProductsViewComponent },
{ path: 'products/new', component: NewComponent },
{ path: 'products/edit:id', component: AuthEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
