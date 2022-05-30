import { Component, OnInit } from '@angular/core';

import { Product } from './../product';
import { ProdServiceService } from './../prod-service/prod-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  prodList?: Product[];
  selectedProduct?: Product;

  constructor(private prodService: ProdServiceService) {}

  ngOnInit(): void {
    this.prodList = this.prodService.getProdList();
  }

  selectProd(e: any) {
    this.selectedProduct = e;
  }
}
