import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CmmEcomProductDetailModelv2 } from 'src/app/common/data/utils/models/ecommerce.models';
import { icons, images } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-products-detail-layout',
  templateUrl: './products-detail-layout.component.html',
  styleUrls: ['./products-detail-layout.component.scss']
})
export class ProductsDetailLayoutComponent {

  looks = []

  product: CmmEcomProductDetailModelv2 = {
    id: '1',
    images: [
      images.product6,
    ],
    mainImage: images.product6,
    name: 'PASTA PLUMA SUPERIOR',
    price: '1,75',
    quantity: 1,
    currency: 'S',
    aditionalInfo: [
      {
        title: 'SKU',
        text: '48234829449493'
      }
    ],
  }

  products: any[] = [
    {
      image: images.product3,
      title: 'SARDINAS EN SALSA DE TOMATE',
      price: '1,25',
      previousprice: '1,50',
      currency: '$',
      id: '3'
    },
    {
      image: images.product4,
      title: 'KETCHUP PAMPERO 300ML',
      price: '1,25',
      previousprice: '1,50',
      currency: '$',
      id: '4'
    },
    {
      image: images.product6,
      title: 'ATUN EN ACEITE EVEBA 1KG',
      price: '1,25',
      previousprice: '1,50',
      currency: '$',
      id: '5'
    },
  ]

  promos = []

  items: any[] = []

  smallMode: boolean = false

  constructor(
    private router: Router
  ) { }

  /**
   * Me lleva a la vista de detalle
   * @param id
   */
  navigate(id: string) {
    this.router.navigate(['/products/detail'])
  }

}
