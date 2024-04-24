// Seleccionar el elemento nav por su id
const navSelector = document.getElementById("nav");

// Array de objetos para los botones de navegación
const options = [
  { title: "Ofertas de la semana", linkTo: "./outlet.html" },
  { title: "Cómo comprar", linkTo: "./how.html" },
  { title: "Impuestos", linkTo: "./taxs.html" },
  { title: "Pedidos", linkTo: "./orders.html" },
  { title: "Garantía", linkTo: "./warranty.html" },
];

// Iterar sobre las opciones y crear los botones de navegación
for (let option of options) {
  const anchor = document.createElement("a");
  anchor.className = "nav-button";
  anchor.textContent = option.title;
  anchor.href = option.linkTo;
  navSelector.appendChild(anchor);
}

const footerSelector = document.getElementById("footer");

const options2 = [
  {
    linkTo: "#",
    opts: ["Ofertas de la semana", "Laptops", "Audio", "Auticulares"],
  },
  { linkTo: "#", opts: ["Cómo comprar", "Formas de pago", "", ""] },
  { linkTo: "#", opts: ["Costos y tarifas", "Impuestos", "Facturación"] },
  { linkTo: "#", opts: ["Mis pedidos", "Pedir nuevamente", "Lista de deseos"] },
  { linkTo: "#", opts: ["Garantía de Entrega"] },
];

for (const option of options2) {
  const column = document.createElement("div");
  column.classList.add("col");

  const list = document.createElement("ul");

  const mainItem = document.createElement("li");
  mainItem.classList.add("col-main-item");
  const mainLink = document.createElement("a");
  mainLink.href = option.linkTo;
  mainLink.textContent = option.opts[0];
  mainItem.appendChild(mainLink);
  list.appendChild(mainItem);

  for (let i = 1; i < option.opts.length; i++) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = option.linkTo;
    link.textContent = option.opts[i];
    listItem.appendChild(link);
    list.appendChild(listItem);
  }

  column.appendChild(list);
  footerSelector.querySelector(".columns-container").appendChild(column);
}

// // Seleccionar el elemento ul dentro de la barra de navegación por su id
// const ulSelector = document.querySelector("#nav ul");

// // Array de objetos para los botones de navegación
// const options = [
//   { title: "Ofertas de la semana", linkTo: "./outlet.html" },
//   { title: "Productos", linkTo: "./products.html" },
//   { title: "Contacto", linkTo: "./contact.html" },
//   { title: "Marcas", linkTo: "./brands.html" },
// ];

// // Iterar sobre las opciones y crear los elementos li y a correspondientes
// options.forEach(option => {
//   const li = document.createElement("li");
//   const anchor = document.createElement("a");
//   anchor.textContent = option.title;
//   anchor.href = option.linkTo;
//   li.appendChild(anchor);
//   ulSelector.appendChild(li);
// });
