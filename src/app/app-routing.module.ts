import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RicercaLibriComponent } from './ricerca-libri/ricerca-libri.component';
import { RisultatiRicercaComponent } from './views/risultati-ricerca/risultati-ricerca.component';

const routes: Routes = [
  {
    path:"",
    component:RicercaLibriComponent
  },
  {
    path:"risultati-ricerca",
    component:RisultatiRicercaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
