import { Component, OnInit } from '@angular/core';
import { RicercaService } from 'src/app/ricerca.service';

type libro = {
  copertina: string;
  titolo: string;
  autore: string;
  isbn: string;
  casaEditrice: string;
  disponibiltà: boolean;
  versione_digitale: boolean;
  n_copie: string;
};

@Component({
  selector: 'app-risultati-ricerca',
  templateUrl: './risultati-ricerca.component.html',
  styleUrls: ['./risultati-ricerca.component.scss']
})
export class RisultatiRicercaComponent implements OnInit {
  results:libro[]=[];
  constructor(private ricercaS:RicercaService) {
    ricercaS.lastObservable?.subscribe(res => {
      this.results=res as libro[];
    });
   }

  ngOnInit(): void {
  }

}
