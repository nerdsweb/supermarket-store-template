import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CmmDataService } from 'nerdsweb-common';
import { CmmTimerSessionService } from 'nerdsweb-common';
import { CmmDialogService } from 'nerdsweb-common';
import { CmmAuthGuard } from 'nerdsweb-common';
// import { CmmHttpInterceptor } from './common/interceptors/http.interceptor';
import { AppRoutingModule, routes } from './app-routing.module';
import { NerdswebCommonModule } from 'nerdsweb-common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    NerdswebCommonModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  providers: [
    CmmDataService,
    CmmTimerSessionService,
    CmmDialogService,
    CmmAuthGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: CmmHttpInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [],
})
export class AppModule { }
