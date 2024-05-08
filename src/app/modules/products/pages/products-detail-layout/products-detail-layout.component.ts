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
    brand: 'MARY',
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
      image: images.product5,
      title: 'PADRE RICO PADRE POBRE',
      brand: 'Robert T. Kiyosaki',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '5'
    },
    {
      image: images.product6,
      title: 'UN CUENTO PERFECTO',
      brand: 'ELÍSABET BENAVENT',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '6'
    },
    {
      image: images.product7,
      title: 'HÁBITOS ATÓMICOS',
      brand: 'JAMES CLEAR',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '7'
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
