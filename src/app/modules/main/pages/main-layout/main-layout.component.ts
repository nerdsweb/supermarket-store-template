import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CmmEcomFooterConfig } from 'src/app/common/data/utils/models/ecommerce.models';
import { icons, logos } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  /**
   * Indica si el sidenav está abierto
   */
  sidenavOpen: boolean = false

  /**
   * Ruta actual en la que estoy
   */
  currentRoute: string = ''

  /**
   * Indica si debo poner el layout en modo responsive
   */
  smallMode: boolean = false

  footerConfig: CmmEcomFooterConfig = {
    // items: [
    //   {
    //     icon: icons.van,
    //     info: 'Envío Gratis',
    //     text: 'Solo dentro la ciudad de Caracas'
    //   },
    //   {
    //     icon: icons.return,
    //     info: 'Devoluciones',
    //     text: 'Devoluciones gratuitas y cambios'
    //   },
    //   {
    //     icon: icons.purse,
    //     info: 'Empaque exclusivo',
    //     text: 'Empaque exclusivo por marca'
    //   },
    // ],
    mainLogo: logos.daves,
    mainLogoSize: {width: '75px', height: '110px'},
    businessInfo: {
      name: "Dave's",
      phone: '+58 0424-5555607',
      mail: 'atencion@miraculous.com',
      direction: 'Av. Circumbalación del sol, calle 110 con av 62 de El Cafetal, Caracas'
    },
    products: [
      'Ropa',
      'Calzado',
      'Accesorios',
      'Damas',
      'Caballeros',
    ],
    aboutUs: [
      'Quienes somos',
      'Ventas al mayor',
      'Ofertas'
    ],
    socialNetworkIcons: [
      icons.instagram,
      icons.facebook,
    ],
    businessQualitiesConfig: {
      showBorder: true
    }
  }

  @HostListener('window:resize')
  onResize(e: Event) {

    if (window.innerWidth <= 992) {
      this.smallMode = true
    } else {
      this.smallMode = false
    }

  }

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {

    if (window.innerWidth <= 992) {
      this.smallMode = true
    } else {
      this.smallMode = false
    }

    this.currentRoute = location.href
    this.listenRouteChanges()

  }

  listenRouteChanges() {

    this.router.events.subscribe(event => {
      this.currentRoute = location.href
    })

  }

}
