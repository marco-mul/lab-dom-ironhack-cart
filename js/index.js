// ITERATION 1

function updateSubtotal(productRowElement) {
  // productRowElement is the tr element for the product
  console.log('Calculating subtotal, yey!', productRowElement);

  // GET THE UNIT PRICE
  const unitPriceElement = productRowElement.querySelector('.price span');
  const unitPrice = parseFloat(unitPriceElement.textContent);
  console.log(unitPrice);
  // GET THE QUANTITY
  const quantityInputElement =
    productRowElement.querySelector('.quantity input');
  const quantity = quantityInputElement.value;
  // MULTIPLY THEM TOGETHER
  const subtotal = unitPrice * quantity;
  // SET THE SUBTOTAL ON THE PRODUCT
  const subtotalElement = productRowElement.querySelector('.subtotal span');
  subtotalElement.textContent = subtotal;

  return subtotal;

}


function calculateAll() {

  let total = 0;
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach((productRowElement) => {
    total += updateSubtotal(productRowElement);
  });

  const totalElement = document.querySelector('#total-value span');
  totalElement.textContent = total;
}

// ITERATION 4

function removeProduct(e, productRowElement) {
  productRowElement.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((removeButton) => {
    const productRowElement = removeButton.closest('tr.product');
    removeButton.addEventListener('click', function (event) {
      productRowElement.remove();
      // we will need to update the total
      calculateAll();
    });
  });
  const createButton = document.querySelector('button#create');
  createButton.addEventListener('click', createProduct);
});
