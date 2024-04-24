// const searchSelector = document.querySelector("#search");

// searchSelector.addEventListener("keyup", captureText);

// function captureText() {
//   console.log("capturado");
// }

const searchSelector = document.querySelector("#search");
searchSelector.addEventListener("keyup", (event) => captureText(event));

function captureText(event) {
  console.log("Tipo de evento: ", event.type);
  console.log("Valor del campo de búsqueda: ", event.target.value);
  console.log("Tipo de evento: ", event.type);
}

// const searchSelector = document.querySelector("#search");

// searchSelector.addEventListener("keyup", captureText);

// function captureText() {
//   console.log("capturado");
// }

// searchSelector.addEventListener("keyup", (event) => captureText(event));

// function captureText(event) {
//   console.log("Tecla presionada: ", event.key);
//   console.log("Valor del campo de búsqueda: ", event.target.value);
//   console.log("Tipo de evento: ", event.type);
// }

// Array de productos de ejemplo
