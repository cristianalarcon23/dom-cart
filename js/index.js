// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('input').value;
  let subtotal = (price * quantity);  
  const spanSubTot = product.querySelector('.subtotal span');
  spanSubTot.innerHTML = `${subtotal.toFixed(2)}`;
  return subtotal;
}

  // ITERATION 2 & 3

function calculateAll() {
let totalMoney = 0;
const allProductsFunc = [...document.getElementsByClassName('product')];
  allProductsFunc.forEach((elem) => {
    updateSubtotal(elem);
    totalMoney += updateSubtotal(elem);
  });
  const totalShop = document.querySelector('#total-value span');
  totalShop.innerHTML = `${totalMoney.toFixed(2)}`;
}

const table = document.getElementById('table');
// ITERATION 4 ¡¡¡¡¡lo he conseguido modificando html como en clase, me dio permiso Ale xD!!!

function removeProduct(passId) {
  const row = document.getElementById(passId);
  table.removeChild(row);
  calculateAll(); 
}



// ITERATION 5

let id = 3; //pongo id en 3 pq en este caso tengo 3 productos con ids 0,1,2
function createProduct() {
  const productName = document.getElementById('input-pname').value;
  const productPrice = document.getElementById('input-pprice').value;
  const newRow = document.createElement('tr');
  newRow.id = id;
  newRow.innerHTML = `<td class="name">
  <span>${productName}</span>
</td>
<td class="price">$<span>${productPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove" onclick="removeProduct(${id})">Remove</button>
</td>`;
  table.appendChild(newRow);
  id++;
  document.getElementById("input-pname").value = "";
  document.getElementById("input-pprice").value = "";
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
})

