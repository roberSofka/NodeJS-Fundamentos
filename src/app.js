require("dotenv").config();
const operaciones = require("./operaciones");

console.log("¡Hola, mundo desde Node.js!");

const apiKey = process.env.API_KEY;
const databaseUrl = process.env.DATABASE_URL;

console.log(operaciones.suma(5, 3));
console.log(operaciones.resta(10, 4));
console.log(apiKey);
console.log(databaseUrl);
