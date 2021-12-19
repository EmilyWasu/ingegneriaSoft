import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; 

type ricerca = {titolo: string, autore: string, casaEditrice: string, isbn: string};
type libro = {
    titolo: string;
    autore: string;
    isbn: string;
    casaEditrice: string;
    disponibiltà: boolean;
    versione_digitale: boolean;
    n_copie: string;
};

@Injectable({
  providedIn: 'root'
})
export class RicercaService {
  risultati: any = undefined;
  lastObservable:Observable<Object>|undefined=undefined;

  constructor(private http: HttpClient) { }

  ricerca(params:ricerca) {
    this.lastObservable = this.http.post("localhost:5000/ricerca", params);
  }
}
