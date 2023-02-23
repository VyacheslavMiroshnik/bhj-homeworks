const products = Array.from(document.getElementsByClassName("product"));
const cartProduct = document.querySelector(".cart__products");
const cartProductItems = document.getElementsByClassName("cart__product");
cartActive();

products.forEach((product) => {
  let addBtn = product.querySelector(".product__add");
  let removeBtn = product.querySelector(".product__remove");
  let plus = product.querySelector(".product__quantity-control_inc");
  let minus = product.querySelector(".product__quantity-control_dec");
  let count = product.querySelector(".product__quantity-value");

  plus.addEventListener("click", (e) => {
    count.textContent++;
  });

  minus.addEventListener("click", (e) => {
    if (+count.textContent === 1) {
      count.textContent = 1;
    } else {
      count.textContent--;
    }
  });

  addBtn.addEventListener("click", (e) => {
    btnActivate("add", product);
    cartActive();
    count.textContent = 1;
  });

  removeBtn.addEventListener("click", (e) => {
    btnActivate("remove", product);
    cartActive();
  });
});

function consturctCard(card) {
  let imgSrc = card.querySelector("img").getAttribute("src");
  let count = card.querySelector(".product__quantity-value").textContent;
  let id = card.dataset.id;
  cartProduct.insertAdjacentHTML(
    "beforeend",
    `<div class="cart__product" data-id="${id}">
<img class="cart__product-image" src="${imgSrc}">
<div class="cart__product-count">${count}</div>
</div>`
  );
  card.querySelector(".product__remove").style = "display:block;";
}

function cartActive() {
  const cart = document.querySelector(".cart");
  if (!cart.querySelector(".cart__product")) {
    cart.style = "display:none";
  } else {
    cart.style = "";
  }
}

function btnActivate(type, product) {
  let cartProduct = Array.from(cartProductItems).find(
    (element) => element.dataset.id === product.dataset.id
  );

  if (cartProduct) {
    if (cartProduct.dataset.id === product.dataset.id) {
      switch (type) {
        case "add":
          let sum =
            Number(
              cartProduct.querySelector(".cart__product-count").textContent
            ) +
            Number(
              product.querySelector(".product__quantity-value").textContent
            );
          cartProduct.querySelector(".cart__product-count").textContent = sum;
          break;
        case "remove":
          product.querySelector(".product__remove").style = "";
          cartProduct.remove();
          break;
        default:
          break;
      }
    }
  } else {
    switch (type) {
      case "add":
        consturctCard(product);
        break;
      default:
        break;
    }
  }
}
/* кнопка add добавляет только последний элемент
 for(product of products) {
  let addBtn = product.querySelector(".product__add");
  let removeBtn = product.querySelector(".product__remove");
  let plus = product.querySelector(".product__quantity-control_inc");
  let minus = product.querySelector(".product__quantity-control_dec");
  let count = product.querySelector(".product__quantity-value");

  plus.addEventListener("click", (e) => {
    count.textContent++;
  });

  minus.addEventListener("click", (e) => {
    if (+count.textContent === 1) {
      count.textContent = 1;
    } else {
      count.textContent--;
    }
  });

  addBtn.addEventListener("click", (e) => {
    btnActivate("add", product);
    cartActive();
    count.textContent = 1;
  });

  removeBtn.addEventListener("click", (e) => {
    btnActivate("remove", product);
    cartActive();
  });
}; */
