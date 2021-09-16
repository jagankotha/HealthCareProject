import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MastercomponentComponent } from './mastercomponent/mastercomponent.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { PantsComponent } from './pants/pants.component';
import { KidsComponent } from './kids/kids.component';
import { NikiComponent } from './niki/niki.component';
import { PoloComponent } from './polo/polo.component';
import { JeansComponent } from './jeans/jeans.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    MastercomponentComponent,
    ShirtsComponent,
    PantsComponent,
    KidsComponent,
    NikiComponent,
    PoloComponent,
    JeansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
