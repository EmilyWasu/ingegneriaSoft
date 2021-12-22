import app from "src/server/server";
import request from "supertest";

describe("/ricerca", () => {
    describe("POST", () => {
        it("should return only one book based on its author", async () => {
            const { body, statusCode } = await request(app).post("/ricerca").send({
                "titolo": "",
                "autore": "Ken",
                "casaEditrice": "",
                "isbn": ""
            });

            expect(statusCode).toBe(200);
            expect(body).toEqual([
                {
                    "titolo": "Fu sera e fu mattina",
                    "autore": "Ken Follett",
                    "isbn": "9788804722120",
                    "casaEditrice": "Mondadori",
                    "disponibiltà": true,
                    "versione_digitale": true,
                    "n_copie": "3",
                    "copertina": "https://www.mondadori.it/content/uploads/2020/09/978880472212HIG.JPG"
                }
            ]);
        });

        it("Not enough parameters", async () => {
            const { statusCode } = await request(app).post("/ricerca").send({
                "titolo": ""
            });

            expect(statusCode).toBe(500);
        })

        it("Should return every book", async () => {
            const { statusCode, body } = await request(app).post("/ricerca").send({
                "titolo": "",
                "autore": "Ken",
                "casaEditrice": "",
                "isbn": ""
            });

            expect(statusCode).toBe(200);
        });

        it("Should return a book given its name", async () => {
            const { statusCode, body } = await request(app).post("/ricerca").send({
                "titolo": "Il caso Fitzgerald",
                "autore": "",
                "casaEditrice": "",
                "isbn": ""
            });

            expect(statusCode).toBe(200);
            expect(body).toEqual([
                {
                    "titolo": "Il caso Fitzgerald",
                    "autore": "John Grisham",
                    "isbn": "9788804680109",
                    "casaEditrice": "Mondadori",
                    "disponibiltà": false,
                    "versione_digitale": true,
                    "n_copie": "2",
                    "copertina": "https://www.mondadoristore.it/img/Il-caso-Fitzgerald-John-Grisham/ea978880468010/BL/BL/01/NZO/?tit=Il+caso+Fitzgerald&aut=John+Grisham"
                }
            ]);
        });

        it("Should return some books given them casaEditrice", async () => {
            const { statusCode, body } = await request(app).post("/ricerca").send({
                "titolo": "",
                "autore": "",
                "casaEditrice": "mondadori",
                "isbn": ""
            });

            expect(statusCode).toBe(200);
            expect(body).toEqual([
                {
                    "titolo": "Fu sera e fu mattina",
                    "autore": "Ken Follett",
                    "isbn": "9788804722120",
                    "casaEditrice": "Mondadori",
                    "disponibiltà": true,
                    "versione_digitale": true,
                    "n_copie": "3",
                    "copertina": "https://www.mondadori.it/content/uploads/2020/09/978880472212HIG.JPG"
                },
                {
                    "titolo": "Il caso Fitzgerald",
                    "autore": "John Grisham",
                    "isbn": "9788804680109",
                    "casaEditrice": "Mondadori",
                    "disponibiltà": false,
                    "versione_digitale": true,
                    "n_copie": "2",
                    "copertina": "https://www.mondadoristore.it/img/Il-caso-Fitzgerald-John-Grisham/ea978880468010/BL/BL/01/NZO/?tit=Il+caso+Fitzgerald&aut=John+Grisham"
                },
                {
                    "titolo": "Lo scudo di Talos",
                    "autore": "Valerio Massimo Manfredi",
                    "isbn": "9788804333715",
                    "casaEditrice": "Mondadori",
                    "disponibiltà": false,
                    "versione_digitale": true,
                    "n_copie": "2",
                    "copertina": "https://images-na.ssl-images-amazon.com/images/I/71ZJ2zeDmiL.jpg"
                },
                {
                    "titolo": "Pompei",
                    "autore": "Robert Harris",
                    "isbn": "9788804689836",
                    "casaEditrice": "Mondadori",
                    "disponibiltà": true,
                    "versione_digitale": false,
                    "n_copie": "3",
                    "copertina": "https://www.mondadoristore.it/img/Pompei-Robert-Harris/ea978880468983/BL/BL/01/NZO/?tit=Pompei&aut=Robert+Harris"
                }
            ])
        });

        it("Should return a book given its isbn", async () => {
            const { statusCode, body } = await request(app).post("/ricerca").send({
                "titolo": "",
                "autore": "",
                "casaEditrice": "",
                "isbn": "9788804680109"
            });

            expect(statusCode).toBe(200);
            expect(body).toEqual([
                {
                    "titolo": "Il caso Fitzgerald",
                    "autore": "John Grisham",
                    "isbn": "9788804680109",
                    "casaEditrice": "Mondadori",
                    "disponibiltà": false,
                    "versione_digitale": true,
                    "n_copie": "2",
                    "copertina": "https://www.mondadoristore.it/img/Il-caso-Fitzgerald-John-Grisham/ea978880468010/BL/BL/01/NZO/?tit=Il+caso+Fitzgerald&aut=John+Grisham"
                }
            ]
            )
        });
    });
});