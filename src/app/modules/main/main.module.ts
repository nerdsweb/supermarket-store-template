import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainNavbarMennuComponent } from './components/main-navbar-mennu/main-navbar-mennu.component';
import { MainSidenavMenuComponent } from './components/main-sidenav-menu/main-sidenav-menu.component';
import { MainMenuDialogComponent } from './dialogs/main-menu-dialog/main-menu-dialog.component';
import { MainMatmenuComponent } from './components/main-matmenu/main-matmenu.component';
import { NerdswebCommonModule } from 'nerdsweb-common';


@NgModule({
  declarations: [
    MainLayoutComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainNavbarMennuComponent,
    MainSidenavMenuComponent,
    MainMenuDialogComponent,
    MainMatmenuComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NerdswebCommonModule
  ]
})
export class MainModule { }
