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
      images.product20,
    ],
    mainImage: images.product6,
    name: 'Never split the difference',
    brand: 'Chris Voss',
    price: '175.00',
    quantity: 1,
    currency: 'S',
    aditionalInfo: [
      {
        title: 'sinopsis',
        texts: [
          'El prestigioso ex negociador internacional del FBI Chris Voss, especializado en secuestros con rehenes, nos enseña un método de negociación rompedor: tácticas para negociaciones duras que son aplicables en múltiples aspectos de nuestras vidas.',

          // 'Rompe la barrera del no es un manual de negociación imprescindible desarrollado y perfeccionado a lo largo de la extraordinaria carrera de Chris Voss como negociador en secuestros con rehenes y como reconocido profesor en las escuelas de negocio más prestigiosas del mundo. Voss ha puesto a prueba estas técnicas en todo tipo de situaciones y ha comprobado su efectividad, tanto en los inicios de su carrera cuando patrullaba las peligrosas calles de Kansas City como en los cursos que imparte en las mejores universidades. Entre las muchas y distintas personas que han aplicado sus enseñanzas, se encuentran desde clientes que han visto aumentar significativamente los beneficios de sus empresas hasta estudiantes de programas de MBA que han conseguido empleos mejores o incluso padres que tienen que vérselas con sus hijos.',

          // 'Rompe la barrera del no relata los entresijos de situaciones verdaderamente dramáticas y revela las mejores y más eficaces estrategias de negociación. Voss, uno de los mejores negociadores del mundo, nos enseña a emplear estas técnicas en cualquier aspecto de nuestra vida.'
        ]
      },
      // {
      //   title: 'otra cosa',
      //   text: 'El prestigioso ex negociador internacional del FBI Chris Voss, especializado en secuestros con rehenes, nos enseña un método de negociación rompedor: tácticas para negociaciones duras que son aplicables en múltiples aspectos de nuestras vidas. Rompe la barrera del no es un manual de negociación imprescindible desarrollado y perfeccionado a lo largo de la extraordinaria carrera de Chris Voss como negociador en secuestros con rehenes y como reconocido profesor en las escuelas de negocio más prestigiosas del mundo. Voss ha puesto a prueba estas técnicas en todo tipo de situaciones y ha comprobado su efectividad, tanto en los inicios de su carrera cuando patrullaba las peligrosas calles de Kansas City como en los cursos que imparte en las mejores universidades. Entre las muchas y distintas personas que han aplicado sus enseñanzas, se encuentran desde clientes que han visto aumentar significativamente los beneficios de sus empresas hasta estudiantes de programas de MBA que han conseguido empleos mejores o incluso padres que tienen que vérselas con sus hijos. Rompe la barrera del no relata los entresijos de situaciones verdaderamente dramáticas y revela las mejores y más eficaces estrategias de negociación. Voss, uno de los mejores negociadores del mundo, nos enseña a emplear estas técnicas en cualquier aspecto de nuestra vida.'
      // },
      // {
      //   title: 'COLOR',
      //   type: 'variants',
      //   colorVariants: [
      //     {
      //       color: '#fff'
      //     },
      //     {
      //       color: '#000'
      //     },
      //     {
      //       color: '#148954'
      //     }
      //   ]
      // },
      // {
      //   title: 'Tallas',
      //   type: 'variants',
      //   textVariants: [
      //     {
      //       text: 'XS'
      //     },
      //     {
      //       text: 'S'
      //     },
      //     {
      //       text: 'M'
      //     },
      //     {
      //       text: 'L'
      //     },
      //     {
      //       text: 'XL'
      //     },
      //     {
      //       text: 'XXL'
      //     },
      //   ]
      // },
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
