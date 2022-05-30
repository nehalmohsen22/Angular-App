import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ProdServiceService } from './../prod-service/prod-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private prodService: ProdServiceService
  ) {}

  ngOnInit(): void {}

  myform = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    url: new FormControl('', [Validators.required, Validators.minLength(5)]),
    price: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  get title() {
    return this.myform.get('title') as FormControl;
  }
  get description() {
    return this.myform.get('description') as FormControl;
  }
  get url() {
    return this.myform.get('url') as FormControl;
  }
  get price() {
    return this.myform.get('price') as FormControl;
  }

  onSubmit(prod: Product) {
    console.log(prod);
    this.prodService.post(prod);
    this.router.navigateByUrl('/product-list/');
    return;
  }
}
