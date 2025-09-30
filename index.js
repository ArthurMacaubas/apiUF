import express from "express";
import { buscarUfs, buscarUfsPorId, buscarUfsPorNome, buscarUfsPorSigla, buscarUfsPorInicial } from "./Servicos/servico.js";

const ip = 1982;
const app = express();

app.get('/ufs', (req, res) => {
  const nomeUf = req.query.busca;
  const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();
  if (resultado.length > 0) {
    res.json(resultado);
  } else {
    res.status(404).send({"erro" : "Nenhuma UF encontrada"});
  }
});

app.get("/ufs/:iduf", (req, res) => {
  const uf = buscarUfsPorId(req.params.iduf);

  if (uf) {
    res.json(uf);
  } else if (isNaN(parseInt(req.params.iduf))) {
    res.status(400).send({ "erro" : "Requisição Inválida!" });
  } else {
    res.status(404).send({ "erro" : "UF não encontrada!"});
  }
});

app.get("/ufs/sigla/:siglaUf", (req, res) => {
  const uf = buscarUfsPorSigla(req.params.siglaUf);

  if (uf) {
    res.json(uf);
  } else if (isNaN(parseInt(req.params.siglaUf))) {
    res.status(400).send({ "erro" : "Requisição Inválida!" });
  } else {
    res.status(404).send({ "erro" : "UF não encontrada!"});
  }
});

app.get("/ufs/inicial/:inicialUf", (req, res) => {
  const uf = buscarUfsPorInicial(req.params.inicialUf);

  if (uf) {
    res.json(uf);
  } else if ((parseInt(req.params.inicialUf))) {
    res.status(400).send({ "erro" : "Requisição Inválida!" });
  } else {
    res.status(404).send({ "erro" : "UF não encontrada!"});
  }
});

app.listen(ip, () => {
  console.log("Servidor iniciado em: http://localhost:" + ip + "/ufs/");
});
