import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-risultati-ricerca',
  templateUrl: './risultati-ricerca.component.html',
  styleUrls: ['./risultati-ricerca.component.scss']
})
export class RisultatiRicercaComponent implements OnInit {
  results=[
    {
      img:"assets/image/harryPotter.jpg",
      titolo:"harry potter",
      autore:"jk rowling",
      casaEditrice: "boh",
      isbn: "ISBN7356859673",
      nCopie: 2,
      online:true
    },
    {
      img:"",
      titolo:"harry splatter",
      autore:"jk bowling",
      casaEditrice: "uhh",
      isbn: "ISBN73568567673",
      nCopie: 69,
      online:true
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
