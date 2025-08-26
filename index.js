import colecaoUf from "./dados/dados.js";
import express from "express";

const ip = 1982;

const app = express();

app.get("/ufs", (req, res) => {
  res.json(colecaoUf);
});

app.get("/ufs/:iduf", (req, res) => {
  const idUf = parseInt(req.params.iduf);
  let menssagemErro = "";
  let uf;

  if (!(isNaN(idUf))) {
    uf = colecaoUf.find(u => u.id === idUf);
    if (!uf) {
      menssagemErro = "UF não encontrada";
    } else {
      menssagemErro = "Requisição inválida";
    }

    if (uf) {
      res.json(uf);
    } else {
      res.status(404).json({ "erro": menssagemErro });
    }
  }
});

app.listen(ip, () => {
  console.log("Servidor iniciado em: http://localhost:" + ip + "/ufs/");
});
