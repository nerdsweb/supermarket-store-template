import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cmp-main-sidenav-menu',
  templateUrl: './main-sidenav-menu.component.html',
  styleUrls: ['./main-sidenav-menu.component.scss']
})
export class MainSidenavMenuComponent {

  /**
   * Emite evento de cerrar el sidenav
   */
  @Output() closeSidenav: EventEmitter<boolean> = new EventEmitter()

  /**
   * Data para los expansion panel
   */
  expansionPanelData: any[] = [
    {
      header: 'Best sellers',
      items: []
    },
    {
      header: 'Recetas',
      items: []
    },
    {
      header: 'Educativos',
      items: []
    },
    {
      header: 'Infantiles',
      items: []
    },
    {
      header: 'Papelería',
      items: []
    },
  ]

  /**
   * Index del panele expandido
   */
  panelExpanded!: number

}
