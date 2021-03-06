"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var catalogo_json_1 = __importDefault(require("./catalogo.json"));
var app = (0, express_1["default"])().use(express_1["default"].json(), (0, cors_1["default"])());
app.post("/ricerca", function (req, res) {
    console.log("Qualcuno si è connesso");
    //ottengo i dati dei libri e li inserisco nella var catalogo
    //const parametri: ricerca = JSON.parse(req.body);
    var _a = req.body, titolo = _a.titolo, autore = _a.autore, casaEditrice = _a.casaEditrice, isbn = _a.isbn;
    //creo una variabile che contenga i parametri di ricerca
    //controllo, per ogni libro del catalogo, se sono contenuti nei rispettivi campi, nel caso in cui anche solo un campo non conten
    console.log(catalogo_json_1["default"]);
    var ret = catalogo_json_1["default"].libri.filter(function (libro) {
        return libro.autore.toLowerCase().includes(autore.toLowerCase()) &&
            libro.titolo.toLowerCase().includes(titolo.toLowerCase()) &&
            libro.casaEditrice.toLowerCase().includes(casaEditrice.toLowerCase()) &&
            libro.isbn.toLowerCase().includes(isbn.toLowerCase());
    });
    res.status(200).send(ret);
});
exports["default"] = app;
