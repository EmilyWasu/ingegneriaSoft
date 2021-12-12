import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RicercaLibriComponent } from './ricerca-libri/ricerca-libri.component';

const routes: Routes = [
  {
    path:"",
    component:RicercaLibriComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
