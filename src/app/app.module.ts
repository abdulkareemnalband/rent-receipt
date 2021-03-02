import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormTwelveBbComponent } from './form-twelve-bb/form-twelve-bb.component';
import { RentReceiptComponent } from './rent-receipt/rent-receipt.component';

@NgModule({
  declarations: [
    AppComponent,
    RentReceiptComponent,
    FormTwelveBbComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'rent-receipt',
        component: RentReceiptComponent
      },
      {
        path: 'form-12bb',
        component: FormTwelveBbComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


