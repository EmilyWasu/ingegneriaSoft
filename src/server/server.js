"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var catalogo_json_1 = __importDefault(require("./catalogo.json"));
var port = 5000;
var server = /** @class */ (function () {
    function server() {
        var app = (0, express_1["default"])().use(express_1["default"].json());
        app.post("/ricerca", function (req, res) {
            console.log("Qualcuno si è connesso");
            //ottengo i dati dei libri e li inserisco nella var catalogo
            //const parametri: ricerca = JSON.parse(req.body);
            var _a = req.body, titolo = _a.titolo, autore = _a.autore, casaEditrice = _a.casaEditrice, isbn = _a.isbn;
            //creo una variabile che contenga i parametri di ricerca
            //controllo, per ogni libro del catalogo, se sono contenuti nei rispettivi campi, nel caso in cui anche solo un campo non conten
            console.log(catalogo_json_1["default"]);
            var ret = catalogo_json_1["default"].libri.filter(function (libro) {
                return libro.autore.includes(autore) &&
                    libro.titolo.includes(titolo) &&
                    libro.casaEditrice.includes(casaEditrice) &&
                    libro.isbn.includes(isbn);
            });
            res.status(200).send(ret);
        });
        app.listen(port);
    }
    return server;
}());
exports["default"] = server;
new server();
