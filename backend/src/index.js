const express = require("express");
const bodyParser = require("body-parser");

// Importa a configuração da API
const api = require("./api/api");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Utiliza a API
app.use("/api", api);

app.listen(port, () => console.log(`API rodando em http://localhost:${port}`));
