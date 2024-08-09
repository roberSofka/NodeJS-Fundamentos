function esperar(ms) {
  return new Promise((resolve) => {
    settimeout(resolve, ms);
  });
}

async function mensajeDeSaludo(nombre) {
  await esperar(1000);
  return `Hola, ${nombre}!`;
}

(async () => {
  const mensaje = await mensajeDeSaludo("María");
  console.log(mensaje);
})();
