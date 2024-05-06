import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsLayoutComponent } from './pages/products-layout/products-layout.component';
import { CmmModule } from 'src/app/common/common.module';
import { CoreModule } from 'src/app/core/core.module';
import { ProductsOverviewLayoutComponent } from './pages/products-overview-layout/products-overview-layout.component';
import { ProductsDetailLayoutComponent } from './pages/products-detail-layout/products-detail-layout.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';


@NgModule({
  declarations: [
    ProductsLayoutComponent,
    ProductsOverviewLayoutComponent,
    ProductsDetailLayoutComponent,
    ProductsDetailComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    CmmModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
