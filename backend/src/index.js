require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Importa a configuração da API
const api = require("./api/api");

const app = express();
const port = 3333;

// Configuração detalhada do CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Substitui bodyParser.json() pelo express.json() para análise de corpos de requisição JSON
app.use(express.json());

// Utiliza a API
app.use("/api", api);

app.listen(port, () => console.log(`API rodando em http://localhost:${port}`));
