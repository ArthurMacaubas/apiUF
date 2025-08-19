import colecaoUf from "./dados/dados.js";
import express from "express";

const ip = 1982

const app = express();

app.get("/ufs", (req, res) => {
    res.json(colecaoUf)
});

app.get("/ufs/:iduf", (req, res) => {
    const idUf = parseInt(req.params.iduf);
    const uf = colecaoUf.find(u => u.id == idUf);
    res.json(uf);
});

app.listen(ip, () => {
    console.log('Servidor sendo iniciado: http://localhost:' + ip + "/ufs/")
})