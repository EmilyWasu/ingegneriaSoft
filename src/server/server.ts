import { resolve } from "dns";
import express from "express";
import libri from "./catalogo.json";
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


const port= 5000;

export default class server {
    constructor () {
        const app = express () .use(express.json());
        app.post ("/ricerca", (req, res) => {
            console.log ("Qualcuno si è connesso");
            //ottengo i dati dei libri e li inserisco nella var catalogo

            //const parametri: ricerca = JSON.parse(req.body);
            const { titolo, autore, casaEditrice, isbn } = req.body;
            //creo una variabile che contenga i parametri di ricerca
            //controllo, per ogni libro del catalogo, se sono contenuti nei rispettivi campi, nel caso in cui anche solo un campo non conten
            
            console.log(libri);

            const ret = libri.libri.filter((libro: libro) => 
                libro.autore.includes(autore) &&
                libro.titolo.includes(titolo) &&
                libro.casaEditrice.includes(casaEditrice) &&
                libro.isbn.includes(isbn)
            );

            res.status(200).send(ret);
        });
        app.listen (port);
    }
}
new server();