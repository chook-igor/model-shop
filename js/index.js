const container = document.querySelector('.shop');
const cartIndex = document.querySelector('.ordered-qty');
let counter = 0;
let orderCount = 0;

async function getProducts() {
  const response = await fetch('products.json')
  products =  await response.json()
  let productList = '';
  products.forEach(product => {
    productList += `<div class="product"> 
                             <img class="product-image" src="img/product/${product.image}" alt="${product.item}">
                             <p class="product-name">${product.item}</p>
                             <p class="product-price">${product.price.toFixed(2)} $</p>
                             <button class="button" data-id=${product.id} >Add to cart</button>
                         </div>`;
    });
    container.innerHTML = productList;
  document
    .querySelectorAll('.product button')
    .forEach((butn) => butn.addEventListener("click", addToCart));
      function addToCart() {
        const button = event.target;
        const id = button.dataset.id;
        localStorage.setItem(id, [])
        cartIndex.innerHTML = localStorage.length;
      }
}

getProducts();

    