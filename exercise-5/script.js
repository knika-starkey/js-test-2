let itemBox = document.querySelectorAll(".item_box"); // блок каждого товара

// Записываем данные в LocalStorage
function setCartData(o) {
  localStorage.setItem("cart", JSON.stringify(o));
}
// Получаем данные из LocalStorage
function getCartData() {
  return JSON.parse(localStorage.getItem("cart"));
}
function countAm() {
  let count = 0;
  if (getCartData()) {
    let cartData = getCartData();
    for (const key in cartData) {
      count += cartData[key][2];
    }
  }
  return count;
}
function countPr() {
  let count = 0;
  if (getCartData()) {
    let cartData = getCartData();
    for (const key in cartData) {
      count += cartData[key][1] * cartData[key][2];
    }
  }
  return count;
}
// Добавляем товар в корзину
function addToCart(e) {
  let button = e.target;
  button.disabled = true; // блокируем кнопку на время операции с корзиной
  let cartData = getCartData() || {}; // получаем данные корзины или создаём новый объект, если данных еще нет
  let parentBox = button.parentNode; // родительский элемент кнопки "Добавить в корзину";
  let itemId = button.getAttribute("data-id"); // ID товара
  let itemTitle = parentBox.querySelector(".item_title").innerHTML; // название товара
  let itemPrice = parentBox.querySelector(".item_price").innerHTML; // стоимость товара
  console.log(cartData);
  if (cartData.hasOwnProperty(itemId)) {
    cartData[itemId][2] += 1;
  } else {
    cartData[itemId] = [itemTitle, itemPrice, 1];
  }

  setCartData(cartData);
  button.disabled = false;
}
function clearCart(e) {
  localStorage.removeItem("cart");
}
for (let i = 0; i < itemBox.length; i++) {
  itemBox[i].querySelector(".add_item").addEventListener("click", addToCart);
  document.getElementById("clear_cart").addEventListener("click", clearCart);
}
