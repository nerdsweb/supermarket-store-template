import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { CoreModule } from 'src/app/core/core.module';
import { NerdswebCommonModule } from 'nerdsweb-common';


@NgModule({
  declarations: [
    HomeLayoutComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    NerdswebCommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
