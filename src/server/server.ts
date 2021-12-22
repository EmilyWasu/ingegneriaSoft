import cors from "cors";
import express from "express";
import libri from "./catalogo.json";

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


const app = express().use(express.json(), cors());

app.post("/ricerca", (req, res) => {
    console.log("Qualcuno si è connesso");
    //ottengo i dati dei libri e li inserisco nella var catalogo

    //const parametri: ricerca = JSON.parse(req.body);
    const { titolo, autore, casaEditrice, isbn } = req.body;
    //creo una variabile che contenga i parametri di ricerca
    //controllo, per ogni libro del catalogo, se sono contenuti nei rispettivi campi, nel caso in cui anche solo un campo non conten

    console.log(libri);

    const ret = libri.libri.filter((libro: libro) =>
        libro.autore.toLowerCase().includes(autore.toLowerCase()) &&
        libro.titolo.toLowerCase().includes(titolo.toLowerCase()) &&
        libro.casaEditrice.toLowerCase().includes(casaEditrice.toLowerCase()) &&
        libro.isbn.toLowerCase().includes(isbn.toLowerCase())
    );

    res.status(200).send(ret);
});

export default app;