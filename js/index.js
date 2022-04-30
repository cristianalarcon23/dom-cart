// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('input').value;
  let subtotal = (price * quantity);  
  console.log(subtotal)
  const spanSubTot = product.querySelector('.subtotal span');
  spanSubTot.innerHTML = `${subtotal.toFixed(2)}`;
  return subtotal;
}

  // ITERATION 2

function calculateAll() {
let totalMoney = 0;
const allProductsFunc = [...document.getElementsByClassName('product')];
  allProductsFunc.forEach((elem) => {
    updateSubtotal(elem);
  });
  allProductsFunc.forEach((elem) => {
    totalMoney += updateSubtotal(elem);
  })
  const totalShop = document.querySelector('#total-value span');
  totalShop.innerHTML = `${totalMoney}`;
  // ITERATION 3
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
