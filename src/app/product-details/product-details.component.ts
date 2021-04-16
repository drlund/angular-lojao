import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    product;

    constructor(
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {

  // Primeiro pega o id do produto da rota atual.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Encontra o produto que corresponde ao id fornecido na rota.
  this.product = products.find(product => product.id === productIdFromRoute);

  }

}