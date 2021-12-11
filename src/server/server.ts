import * as express from "express";

const port= 5000;

export default class server {
    constructor () {
        const app = express () .use(express.json());
        app.post ("/ricerca", (req, res) => {
            console.log ("Qualcuno si è connesso");
        });
        app.listen (port);
    }
}
