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
      images: [],
      mainImage: images.product5,
      name: 'PADRE RICO PADRE POBRE',
      brand: 'Robert T. Kiyosaki',
      sku: 'krogm93746917',
      price: '14,00',
      previousPrice: '27,00',
      quantity: 1,
      currency: '$',
      id: '5'
    },
    {
      id: '3',
      images: [
        images.product20,
      ],
      mainImage: images.product6,
      name: 'Never split the difference',
      brand: 'Chris Voss',
      sku: 'krogm93746917',
      price: '175.00',
      previousPrice: '',
      currency: '$',
      quantity: 1,
      aditionalInfo: [
        {
          title: 'sinopsis',
          texts: [
            'El prestigioso ex negociador internacional del FBI Chris Voss, especializado en secuestros con rehenes, nos enseña un método de negociación rompedor: tácticas para negociaciones duras que son aplicables en múltiples aspectos de nuestras vidas.',
          ]
        },
      ],
    },
    {
      id: '3',
      images: [
        images.product20,
      ],
      mainImage: images.product6,
      name: 'HÁBITOS ATÓMICOS',
      brand: 'JAMES CLEAR',
      sku: 'krogm93746917',
      price: '175.00',
      previousPrice: '',
      currency: '$',
      quantity: 1,
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
