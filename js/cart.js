const cartContainer = document.querySelector(".ordered-items");

function loadOrder() {
  let qnty = 1;
  let productList = "";
  for (let i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);
    orderPos = JSON.parse(localStorage.getItem(key));
    productList += `<div class="product" id="id${orderPos.id}"> 
                        <div>
                          <p class="product-name">${orderPos.item}</p>
                        </div>
                        <div>
                          <p class="product-price${
                            orderPos.id
                          }">${orderPos.price.toFixed(2)}</p>
                        </div>
                        <div>
                          <p class="item-add" data-id="${
                            orderPos.id
                          }" style="text-align:center">&#x2295</p>
                        </div>
                        <div>
                          <p class="qnty${
                            orderPos.id
                          }" style="text-align:center" >${qnty}</p>
                        </div>
                        <div>
                          <p class="item-rem" data-id="${
                            orderPos.id
                          }" style="text-align:center">&#x2296</p>
                        </div>
                        <div>
                          <p class="item-total${orderPos.id}" id="item-total">${
      orderPos.price * qnty
    }</p>
                        </div>
                      </div><hr>`;
    cartContainer.innerHTML = productList;
  }
}

loadOrder();

document
  .querySelectorAll(".item-add")
  .forEach((plus) => plus.addEventListener("click", increase));

function increase() {
  const plus = event.target;
  let qntyId = plus.dataset.id;
  let qnty = parseInt(document.querySelector(`.qnty${qntyId}`).innerHTML);
  let itemPrice = parseInt(
    document.querySelector(`.product-price${qntyId}`).innerHTML
  );
  document.querySelector(`.qnty${qntyId}`).innerHTML = qnty += 1;
  document.querySelector(`.item-total${qntyId}`).innerHTML = qnty * itemPrice;
}

document
  .querySelectorAll(".item-rem")
  .forEach((minus) => minus.addEventListener("click", decrease));

function decrease() {
  const plus = event.target;
  let qntyId = plus.dataset.id;
  let qnty = document.querySelector(`.qnty${qntyId}`).innerHTML;
  let itemPrice = parseInt(
    document.querySelector(`.product-price${qntyId}`).innerHTML
  );

  document.querySelector(`.qnty${qntyId}`).innerHTML = qnty -= 1;
  document.querySelector(`.item-total${qntyId}`).innerHTML = qnty * itemPrice;
  if (qnty < 1) document.querySelector(`#id${qntyId}`).innerHTML = "";
}

document.querySelector(".delivery-info").addEventListener("click", send);
function send() {
  localStorage.clear();
}
