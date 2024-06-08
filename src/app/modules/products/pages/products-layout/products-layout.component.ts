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
    this.router.navigate(['/Productos/Detalle'])
  }

}
