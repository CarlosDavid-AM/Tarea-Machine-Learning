const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "../")));

// Levantar el index.html desde el puerto 3000
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/identificador", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/pages/identificador.html"));
});

app.listen(PORT, () => {
  console.log(`Server corriendo en: http://localhost:${PORT}`);
});
