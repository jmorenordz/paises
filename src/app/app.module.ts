import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { PaisesModule } from './paises/paises.module';
import { ShareModule } from './share/share.module';


import { AppComponent } from './app.component';
//import { RouterModule } from '@angular/router';
import { appRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule,    
    ShareModule,
    PaisesModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
