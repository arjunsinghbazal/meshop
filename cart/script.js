const cart = document.querySelector('.cart');
const cartItems = JSON.parse(localStorage.getItem('myData'));
let bill="";
if (!cartItems || cartItems.length === 0) {
  cart.innerHTML = `<p>Your Cart is Empty</p>
                    <img src="shopping-cart-realistic_1284-6011.avif" alt="404">`;
} else {
  cart.innerHTML = `<ul></ul>`;
  const ul = cart.querySelector('ul');
  cartItems.forEach((item, index) => {
    const nameElement = document.getElementsByTagName("bill");
    nameElement.innerHTML=`<h3 class="name">${item.title}</h3>:
    <p class="price">${item.price}</p>`;
    bill+=nameElement.innerText;
    const li = document.createElement('li');
    li.dataset.index = index;
    li.innerHTML = `<button class="remove-item-btn">Remove Item</button>
      <img src="${item.img}" alt="${item.title}">
      <div>
        <p style="width:100%;height:20%;overflow:hidden;">${item.title}</p>
        <p>${item.price}</p>
      </div>
    `;
    ul.appendChild(li);
  });
  const removeItemBtns = cart.querySelectorAll('.remove-item-btn');
  removeItemBtns.forEach(removeItemBtn => {
    removeItemBtn.addEventListener('click', (event) => {
      const li = event.target.closest('li');
      const index = li.dataset.index;
      cartItems.splice(index, 1);
      localStorage.setItem('myData', JSON.stringify(cartItems));
      li.style.display = 'none';
    });
  });
}


///checklist
const Items = JSON.parse(localStorage.getItem('myData'));

if (Items && Items.length > 0) {
  const totalPrice = Items.reduce((sum, item) => {
    const priceMatch = item.price.match(/\d+(\.\d+)?/);
    const price = priceMatch ? parseFloat(priceMatch[0]) : 0;
    return sum + price;
  }, 0);
  const totalEl = document.querySelector('.total-price');
  totalEl.textContent = `Total Price: ${totalPrice.toFixed(2)} INR`;
  localStorage.setItem('totalPrice', totalPrice);
}
console.log(bill);


