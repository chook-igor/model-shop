const container = document.querySelector(".shop");
const cartIndex = document.querySelector(".ordered-qty");
let products = [];
let order = [];

async function getProducts() {
  const response = await fetch("products.json");
  products = await response.json();
  showProducts();
}

function showProducts(category) {
  let productList = "";
  products
    .filter((product) => (category ? product.category === category : true))
    .forEach((product) => {
      productList += `<div class="product"> 
      <img class="product-image" src="img/product/${product.image}" alt="${
        product.item
      }">
      <p class="product-name">${product.item}</p>
      <p class="product-price">${product.price.toFixed(2)} $</p>
      <button class="button" data-id="${product.id}" >Add to cart</button>
      </div>`;
    });
  container.innerHTML = productList;

  document
    .querySelectorAll(".product button")
    .forEach((butn) => butn.addEventListener("click", addToCart));
  function addToCart() {
    const button = event.target;
    const id = button.dataset.id;

    order = JSON.stringify({
      id: products[id - 1].id,
      item: products[id - 1].item,
      price: products[id - 1].price,
    });
    localStorage.setItem(id, order);
    cartIndex.innerHTML = localStorage.length;
  }
}

getProducts();

document.querySelector(".all").addEventListener("click", () => showProducts());
document
  .querySelector(".big")
  .addEventListener("click", () => showProducts("32"));
document
  .querySelector(".med")
  .addEventListener("click", () => showProducts("48"));
document
  .querySelector(".sf")
  .addEventListener("click", () => showProducts("sf"));
