import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { AuthEditComponent } from './auth-edit/auth-edit.component';
import { NewComponent } from './new/new.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsViewComponent } from './products-view/products-view.component';

@NgModule({
   declarations: [
      AppComponent,
      AuthEditComponent,
      NewComponent,
      ProductsViewComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatCardModule,
      MatButtonModule,
      MatCheckboxModule,
      FormsModule,
      AppRoutingModule
   ],
   providers: [
      HttpService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
