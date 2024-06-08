import { Component } from '@angular/core';
import { CmmEcomProductDetailModelv2 } from 'src/app/common/data/utils/models/ecommerce.models';
import { images } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-products-overview-layout',
  templateUrl: './products-overview-layout.component.html',
  styleUrls: ['./products-overview-layout.component.scss']
})
export class ProductsOverviewLayoutComponent {

  productsList: CmmEcomProductDetailModelv2[] = [
    {
      mainImage: images.product3,
      images: [],
      name: 'SARDINAS EN SALSA DE TOMATE',
      price: '1,25',
      previousPrice: '1,50',
      currency: '$',
      id: '3',
      quantity: 1
    },
    {
      mainImage: images.product4,
      images: [],
      name: 'KETCHUP PAMPERO 300ML',
      price: '1,25',
      previousPrice: '1,50',
      currency: '$',
      id: '4',
      quantity: 1
    },
    {
      mainImage: images.product6,
      images: [],
      name: 'ATUN EN ACEITE EVEBA 1KG',
      price: '1,25',
      previousPrice: '1,50',
      currency: '$',
      id: '5',
      quantity: 1
    },
  ]

  prebill: any = {
    basePrice: 175,
    delivery: 175,
    totalPrice: 175,
    discount: '_ US$',
    currency: 'US$'
  }

}
