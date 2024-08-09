const fs = require("fs");

const contenido = "Este es un nuevo contenido para el archivo.";

fs.writeFile("nuevo-archivo.txt", contenido, "utf8", (error) => {
  if (error) {
    console.error("Error al escribir el archivo:", error);
    return;
  }
  console.log("Archivo creado y contenido escrito correctamente. ");
});
