import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { HomeComponent } from './home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { StringSlicePipe } from './string-slice.pipe';
import { AddProductComponent } from './product/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllPhotosComponent } from './all-photos/all-photos.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,
    ToDoListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    ProductListComponent,
    StringSlicePipe,
    AddProductComponent,
    AllPhotosComponent,
    LoginComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
