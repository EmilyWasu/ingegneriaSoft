import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './views/home/home.component';
import { RicercaLibriComponent } from './ricerca-libri/ricerca-libri.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './shared/modules/material/material.module';
import { RisultatiRicercaComponent } from './views/risultati-ricerca/risultati-ricerca.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RicercaLibriComponent,
    RisultatiRicercaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
