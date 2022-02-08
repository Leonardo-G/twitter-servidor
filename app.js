const express = require("express");
const dbConnect = require("./db/config");
const dotenv = require("dotenv").config();

const app = express();

dbConnect();

app.listen( 8080, () => {
    console.log("Servidor iniciado ", 8080)
})