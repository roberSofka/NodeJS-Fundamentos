const fs = require("fs");

fs.copyFile("archivo.txt", "copia-archivo.txt", (error) => {
  if (error) {
    console.error("Error al copiar el archivo: ", error);
    return;
  }
  console.log("Archivo copiado exitosamente.");
});
