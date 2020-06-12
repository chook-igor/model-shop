const cartContainer = document.querySelector('.ordered-items')
let ordered = {...localStorage};
let orderPos = '';
let key = '';
let productList = '';
function loadOrder() {
  for (key in ordered) {
    orderPos = ordered[key].split(',');
    productList += `<div class="product"> 
                      <p class="product-name">${orderPos[0]}</p>
                      <p class="product-price">${orderPos[1]} $</p>
                      <hr>
                      </div>`;
    cartContainer.innerHTML = productList;
    }
}

loadOrder();
