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
      title: 'LA TIERRA PRIMETIDA',
      brand: 'BARACK OBAMA',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '1'
    },
    {
      image: images.product2,
      title: 'EL MUNDO COMO YO LO VEO',
      brand: 'ALBERT EINSTEIN',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '2'
    },
    {
      image: images.product3,
      title: 'LA VACA PÚRPURA',
      brand: 'SEHT GODIN',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '3'
    },
    {
      image: images.product4,
      title: 'EL LIBRO QUE TU CEREBRO NO QUIERE LEER',
      brand: 'DAVID DEL ROSARIO',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '4'
    },
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
    {
      image: images.product8,
      title: 'EL PERFUME',
      brand: 'PATRIC SÜSKIND',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '8'
    },
  ]

  section2Products: CmmEcomProductCardDataModel[] = [
    {
      image: images.product9,
      title: 'BLUEY',
      brand: 'Robert T. Kiyosaki',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '1'
    },
    {
      image: images.product10,
      title: 'CAPERUCITA ROJA',
      brand: 'ELÍSABET BENAVENT',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '1'
    },
    {
      image: images.product11,
      title: 'EL PRINCIPITO',
      brand: 'JAMES CLEAR',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '1'
    },
    {
      image: images.product12,
      title: 'JACK Y LAS HABICUELAS MÁGICAS',
      brand: 'PATRIC SÜSKIND',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '1'
    },
  ]

  section3Products: CmmEcomProductCardDataModel[] = [
    {
      image: images.product13,
      title: 'LA TIERRA PROMETIDA',
      brand: 'BARACK OBAMA',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '1'
    },
    {
      image: images.product14,
      title: 'LA TIERRA PROMETIDA',
      brand: 'BARACK OBAMA',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '1'
    },
    {
      image: images.product15,
      title: 'LA TIERRA PROMETIDA',
      brand: 'BARACK OBAMA',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '1'
    },
    {
      image: images.product16,
      title: 'LA TIERRA PROMETIDA',
      brand: 'BARACK OBAMA',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '1'
    },
  ]

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
