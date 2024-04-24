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
const products = [
  { name: "Macbook Pro 15'4", description: "Space Gray", price: 750000 },
  { name: "Macbook Pro 15'4", description: "Space Gray", price: 750000 },
  { name: "Macbook Pro 15'4", description: "Space Gray", price: 750000 },
  { name: "ui Pro 15'4", description: "Space Gray", price: 750000 },

  // Agrega más productos si es necesario
];

// Función para capturar el texto de búsqueda, filtrar los productos y actualizar la vista
function captureText() {
  // Guardar el valor capturado por el evento en una variable
  const searchText = document.getElementById("searchInput").value.toLowerCase();

  // Filtrar el array de productos para incluir solo aquellos cuyo nombre incluya el texto capturado
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText)
  );

  // Actualizar la vista con una nueva impresión de las tarjetas
  displayProducts(filteredProducts);
}

// Función para imprimir las tarjetas de productos
function displayProducts(products) {
  // Obtener el contenedor de productos
  const productContainer = document.getElementById("productContainer");

  // Limpiar el contenedor de productos antes de imprimir nuevos productos
  productContainer.innerHTML = "";

  // Iterar sobre el array de productos y crear una tarjeta para cada uno
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
          <a href="./details.html">
              <img class="product-img" src="assets/mock1.jpg" alt="${product.name}" />
              <div class="product-info">
                  <span class="product-title">${product.name}</span>
                  <span class="product-description">${product.description}</span>
                  <div class="product-price-block">
                      <span class="price">$${product.price}</span>
                      <span class="discount">50% Off</span>
                  </div>
                  <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
              </div>
          </a>
      `;
    productContainer.appendChild(productCard);
  });
}

// Agregar evento de escucha al campo de búsqueda para activar la función captureText
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", captureText);
displayProducts(products);
