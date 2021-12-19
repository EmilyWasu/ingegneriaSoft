import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RicercaService } from '../ricerca.service';

@Component({
  selector: 'app-ricerca-libri',
  templateUrl: './ricerca-libri.component.html',
  styleUrls: ['./ricerca-libri.component.scss']
})
export class RicercaLibriComponent implements OnInit {
  titolo: string="";
  autore: string="";
  casaEditrice: string="";
  isbn: string="";
  constructor(private ricercaS: RicercaService, private router:Router) { }

  ngOnInit(): void {
  }
  cerca():void{
    let args={
      titolo:this.titolo,
      autore:this.autore,
      casaEditrice:this.casaEditrice,
      isbn:this.isbn
    };
    console.log(args);
    this.ricercaS.ricerca(args);
    this.router.navigate(["/risultati-ricerca"]);
  }
}
