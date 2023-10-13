const express = require("express");
const { getPackageDescriptionNpm } = require("utils-playground");
const app = express();

app.get("/pacote/:nomePacote", async (req, res) => {
  const { nomePacote } = req.params;

  const pacote = await getPackageDescriptionNpm(nomePacote);
  return res.send(pacote);
});

app.listen(3000);
