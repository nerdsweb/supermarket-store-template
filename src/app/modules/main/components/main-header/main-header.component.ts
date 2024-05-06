import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CmmSearchDialogComponent } from 'src/app/common/components/ecommerce/cmm-search-dialog/cmm-search-dialog.component';
import { CmmDialogService } from 'src/app/common/services/dialogs.service';
import { icons, images, logos } from 'src/assets/images/image-routes';

@Component({
  selector: 'cmp-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {

  icons = icons

  logos = logos

  navbarItems: any[] = [
    {
      text: 'Best sellers',
    },
    {
      text: 'Recetas',
    },
    {
      text: 'Educativos',
    },
    {
      text: 'Infantiles',
    },
    {
      text: 'Papelería',
    },
  ]

  /**
   * Emite evento de abrir sidenav
   */
  @Output() openSidenav: EventEmitter<boolean> = new EventEmitter()

  /**
   * Indica si el sidenav está abierto
   */
  @Input() sidenavOpen: boolean = false

  /**
   * Indica si debo mostrar el background
   */
  @Input() showBg: boolean = false

  @HostListener('window:scroll', ['$event'])
  onScroll(e: Event) {

    if (document.documentElement.scrollTop != 0) {
      this.showBg = true
    } else {
      this.showBg = false
    }

  }

  showed: string = ''

  constructor(
    private dialog: MatDialog,
    private dialogsService: CmmDialogService
  ) { }

  /**
   * Toggle el sidenav
   */
  toggleSidenav() {

    this.sidenavOpen = !this.sidenavOpen

    this.openSidenav.emit(this.sidenavOpen)

  }

  showMenu(menu: string) {

    this.showed = menu

  }

  /**
   * Abre el diálogo para buscar
   */
  openSearch() {

    this.dialogsService.CmmOpenSearchDialog({ inputMode: 'makeup' })

  }

}
