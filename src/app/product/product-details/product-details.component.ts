import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from './../product';
import { ProdServiceService } from './../prod-service/prod-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  prod?: Product;

  constructor(
    private activeRoute: ActivatedRoute,
    private prodService: ProdServiceService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((pram) => {
      this.prod = this.prodService.getProductById(pram['id']);
    });
  }
}
