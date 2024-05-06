import { Component, Input } from '@angular/core';
import { images } from 'src/assets/images/image-routes';

@Component({
  selector: 'cmp-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent {

  @Input() product: any

  /**
   * Index de la imagen a mostrar
   */
  mainImageIndex: number = 0

  choosenVariant: number = 0

  choosenSize: number = 0

  constructor() { }

  /**
   * Añade más unidades del producto
   */
  addProductUnit() {

    this.product.quantity += 1

  }

  /**
   * Elimina unidades del producto
   */
  removeProductUnit() {

    this.product.quantity -= 1

    if (this.product.quantity < 1) {
      this.product.quantity = 1
    }

  }

  /**
   * Cambia la imagen que se está mostrando
   * @param next 
   */
  changeMainImageIndex(next: boolean) {

    if (next) {

      this.mainImageIndex += 1

      if (this.mainImageIndex >= this.product.images.length) {
        this.mainImageIndex = 0
      }

    } else {

      if (this.mainImageIndex <= 0) {

        this.mainImageIndex = this.product.images.length - 1

      }

    }

  }

}
