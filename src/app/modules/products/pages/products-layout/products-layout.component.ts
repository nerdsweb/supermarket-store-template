import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { icons, images } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-products-layout',
  templateUrl: './products-layout.component.html',
  styleUrls: ['./products-layout.component.scss']
})
export class ProductsLayoutComponent {

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
    {
      image: images.product8,
      title: 'EL PERFUME',
      brand: 'PATRIC SÜSKIND',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '8'
    },
    {
      image: images.product17,
      title: '8 RULES OF LOVE',
      brand: 'JAY SHETTY',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '8'
    },
    {
      image: images.product18,
      title: 'A COUR OF FROST',
      brand: 'SARAH J. MAAS',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '8'
    },
    {
      image: images.product19,
      title: '21 LESSONS FOR THE CENTURY',
      brand: 'YUVAL NOAH HARARI',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '8'
    },
    {
      image: images.product20,
      title: 'LA TIERRA PROMETIDA',
      brand: 'BARACK OBAMA',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '8'
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
    {
      image: images.product17,
      title: '8 RULES OF LOVE',
      brand: 'JAY SHETTY',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '8'
    },
    {
      image: images.product18,
      title: 'A COUR OF FROST',
      brand: 'SARAH J. MAAS',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '8'
    },
    {
      image: images.product19,
      title: '21 LESSONS FOR THE CENTURY',
      brand: 'YUVAL NOAH HARARI',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '8'
    },
    {
      image: images.product20,
      title: 'LA TIERRA PROMETIDA',
      brand: 'BARACK OBAMA',
      price: '14,00',
      previousprice: '27,00',
      currency: '$',
      id: '8'
    },
  ]

  items: any[] = []

  smallMode: boolean = false

  @HostListener('window:resize', ['$event'])
  onResize(e: Event) {

    if (window.innerWidth <= 767) {

      this.smallMode = true

    } else {

      this.smallMode = false

    }

  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    if (window.innerWidth <= 767) {

      this.smallMode = true

    } else {

      this.smallMode = false

    }

  }

  /**
   * Me lleva a la vista de detalle
   * @param id 
   */
  navigate(id: string) {
    this.router.navigate(['/products/detail'])
  }

}
