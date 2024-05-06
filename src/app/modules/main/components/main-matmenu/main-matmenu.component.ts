import { Component } from '@angular/core';
import { images } from 'src/assets/images/image-routes';

@Component({
  selector: 'cmp-main-matmenu',
  templateUrl: './main-matmenu.component.html',
  styleUrls: ['./main-matmenu.component.scss']
})
export class MainMatmenuComponent {

  images = images

  /**
   * Data para los expansion panel
   */
  options: any[] = [
    {
      header: 'Ropa',
      items: [
        'Camisas',
        'Jeans',
        'Chaquetas',
        'Pantalones',
        'Vestidos',
        'Jumpsuits',
        'Faldas',
        'Todo',
      ]
    },
    {
      header: 'Zapatos',
      items: [
        'Mocasines',
        'Botas',
        'Sneakers',
        'Sandalias',
      ]
    },
    {
      header: 'Bolsos',
      items: [
        'Bandoleras',
        'Morrales',
        'Monederos/billeteras',
        'Riñoneras',
        'Sobres',
      ]
    },
    {
      header: 'Accesorios',
      items: [
        'Sombreros/Caps',
        'Correas',
        'Pulseras',
        'Relojes',
        'Sobres',
      ]
    },
    {
      header: 'Underwear',
      items: [
        'Ropa interior',
        'Traje de baño',
        'Pijamas',
        'Sandalias',
        'Medias',
      ]
    },
    {
      header: 'Activewear',
      items: [
        'Sudaderas',
        'Hoodies',
        'Guarda camisas',
        'Conjuntos',
      ]
    },
  ]

}
