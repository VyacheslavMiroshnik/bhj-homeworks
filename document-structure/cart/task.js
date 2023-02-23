const products = Array.from(document.getElementsByClassName("product"));
const cartProduct = document.querySelector(".cart__products");
const cartProductItems = document.getElementsByClassName("cart__product");
let cardIdList = [];
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
  cardIdList.push(id);
  cartProduct.insertAdjacentHTML(
    "beforeend",
    `<div class="cart__product" data-id="${id}">
<img class="cart__product-image" src="${imgSrc}">
<div class="cart__product-count">${count}</div>
</div>`
  );
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
  let listCartProduct = Array.from(cartProductItems);
  if (cardIdList.includes(product.dataset.id)) {
    listCartProduct.forEach((item) => {
      if (item.dataset.id === product.dataset.id) {
        switch (type) {
          case "add":
            let sum =
              Number(item.querySelector(".cart__product-count").textContent) +
              Number(
                product.querySelector(".product__quantity-value").textContent
              );
            item.querySelector(".cart__product-count").textContent = sum;
            break;
          case "remove":
            item.remove();
            cardIdList = cardIdList.filter((el) => el !== product.dataset.id);
            break;
          default:
            break;
        }
      }
    });
  } else {
    consturctCard(product);
  }
}
