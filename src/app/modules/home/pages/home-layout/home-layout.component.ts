import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { logoShape } from 'src/app/common/assets/images/images-routes';
import { CmmEcomProductCardDataModel } from 'src/app/common/data/utils/models/ecommerce.models';
import { images, logos } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent {

  images = images

  logos = logos

  /**
   * Productos de la primera sección
   */
  section1Products: CmmEcomProductCardDataModel[] = [
    {
      image: images.product1,
      title: 'HARINA DE MAIZ PAN 1kg',
      price: '1,25',
      previousprice: '1,50',
      currency: '$',
      id: '1'
    },
    {
      image: images.product2,
      title: 'PASTA PLUMA MARY 1KG',
      price: '1,25',
      previousprice: '1,50',
      currency: '$',
      id: '2'
    },
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
    {
      image: images.product7,
      title: 'QUESO CREMA BUFILCIM',
      price: '1,25',
      previousprice: '1,50',
      currency: '$',
      id: '6'
    },
    {
      image: images.product8,
      title: 'JAMÓN ENDIABLADO',
      price: '1,25',
      previousprice: '1,50',
      currency: '$',
      id: '7'
    },
    {
      image: images.product6,
      title: 'ARROZ MARY 1KG',
      price: '1,25',
      previousprice: '1,50',
      currency: '$',
      id: '8'
    },
  ]

  section2Products: CmmEcomProductCardDataModel[] = [
    {
      image: images.product9,
      title: 'CEBOLLAS',
      price: '1,25',
      previousprice: '1,50',
      currency: '$',
      id: '1'
    },
    {
      image: images.product10,
      title: 'TOMATES',
      price: '1,25',
      previousprice: '1,50',
      currency: '$',
      id: '1'
    },
    {
      image: images.product11,
      title: 'PIMENTÓN',
      price: '1,25',
      previousprice: '1,50',
      currency: '$',
      id: '1'
    },
    {
      image: images.product12,
      title: 'COCOS',
      price: '1,25',
      previousprice: '1,50',
      currency: '$',
      id: '1'
    },
  ]

  section3Products: CmmEcomProductCardDataModel[] = [

  ]

  constructor(
    private router: Router
  ) { }

  /**
   * Me lleva a la vista de detalle
   * @param id 
   */
  navigate(id: string) {
    this.router.navigate(['/Productos/Detalle'])
  }

}
