import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreButtonComponent } from './components/core-button/core-button.component';
import { CoreBrandsComponent } from './components/core-brands/core-brands.component';
import { CoreProductCardComponent } from './components/core-product-card/core-product-card.component';
import { NerdswebCommonModule } from 'nerdsweb-common';


@NgModule({
    declarations: [
        CoreButtonComponent,
        CoreBrandsComponent,
        CoreProductCardComponent
    ],
    imports: [
        CommonModule,
        NerdswebCommonModule,
    ],
    exports: [
        CoreButtonComponent,
        CoreBrandsComponent,
        CoreProductCardComponent
    ]
})
export class CoreModule { }
