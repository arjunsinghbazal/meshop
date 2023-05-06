// Get container element
const container = document.querySelector('.items');

// Define the functions to generate random sizes and colors
function getRandomSizes() {
  const sizes = ['S', 'M', 'L', 'XL'];
  const randomSizes = [];
  while (randomSizes.length < 3) {
    const randomIndex = Math.floor(Math.random() * sizes.length);
    const randomSize = sizes[randomIndex];
    if (!randomSizes.includes(randomSize)) {
      randomSizes.push(randomSize);
    }
  }
  return randomSizes;
}

function getRandomColor() {
  const colors = ['red', 'blue', 'green', 'wheat', 'black','grey','brown','purple'];
  const random = [];
  while (random.length < 1) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    if (!random.includes(randomColor)) {
      random.push(randomColor);
    }
  }
  return random[0];
}

function createProductItem(product) {
  const item = document.createElement('div');
  item.classList.add('item');

  // Create HTML elements for the product
  const img = document.createElement('img');
  img.src = product.image;
  img.alt = product.title;

  const head=document.createElement('p');
  head.classList.add('para');
  head.innerText=product.title;

  const info = document.createElement('div');
  info.classList.add('info');

  const category = document.createElement('div');
  category.classList.add('category');
  category.textContent = `Category: ${product.category}`;

  const price = document.createElement('div');
  price.classList.add('price');
  price.textContent = `Price : ${Math.floor(product.price)} INR`;

  const sized = document.createElement('div');
  sized.classList.add('sized');
  sized.textContent = `Size : ${getRandomSizes()}`;

  const colorsDiv = document.createElement('div');
  colorsDiv.classList.add('colors');
  colorsDiv.textContent = 'Color :';

  const colorsRow = document.createElement('div');
  colorsRow.classList.add('row');

  const circles = [];

  for (let i = 0; i < 3; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.backgroundColor = getRandomColor();
    colorsRow.appendChild(circle);
    circles.push(circle);
  }

  colorsDiv.appendChild(colorsRow);

  const rating = document.createElement('div');
  rating.classList.add('row');
  rating.textContent = `Rating : ${Math.floor(product.rating.rate)}`;

  const button = document.createElement('button');
  button.classList.add('addBtn');
  button.textContent = 'Add to Cart';



  button.addEventListener('click', () => {
    if (button.textContent === "Added") {
      return;
    } else {
      button.textContent = "Added";
      const itemImg = img.src;
      const itemPrice = price.innerText;
      const itemTitle = head.innerText;
      const existingData = JSON.parse(localStorage.getItem('myData')) || [];
      let obj={
        img:itemImg, price:itemPrice, title:itemTitle
      }
      existingData.push(obj);
      localStorage.setItem('myData', JSON.stringify(existingData));
    }
  });
  
  // Append the HTML elements to the item element
  info.appendChild(category);
  info.appendChild(price);
  info.appendChild(sized);
  info.appendChild(colorsDiv);
  info.appendChild(rating);
  item.appendChild(img);
  item.appendChild(head);
  item.appendChild(info);
  item.appendChild(button);

  return item;
}

function appendProductsToContainer(products) {
  for (const product of products) {
    const item = createProductItem(product);
    container.appendChild(item);
  }
}

function getProductsFromApi() {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      localStorage.setItem('products', JSON.stringify(data));
      appendProductsToContainer(data);
    })
    .catch(error => console.error(error));
}

getProductsFromApi();

///colour filtering
function filterByColor(color) {
  const items = document.querySelectorAll('.item');
  for (const item of items) {
    const circles = item.querySelectorAll('.circle');
    let colorMatch = false;
    for (const circle of circles) {
      if (circle.style.backgroundColor === color) {
        colorMatch = true;
        break;
      }
    }
    if (colorMatch) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
}
////category filtering
function filterbyCategory(category){
  const items = document.querySelectorAll('.item');
  for (let i = 0; i < items.length; i++) {
    if (category === "all") {
        items[i].style.display = "block";
      }
    else {
      const circles = items[i].querySelectorAll('.category');
      let colorMatch = false;
      for (const circle of circles) {
        if (circle.innerText === category) {
          colorMatch = true;
          break;
        }
      }
      if (colorMatch) {
        items[i].style.display = 'block';
      } else {
        items[i].style.display = 'none';
      }
    }

  }
}

/////search on filtering

function inputfilter(){
  const inputText = document.getElementById("search").value.toLowerCase();
  const items = document.querySelectorAll('.item');
  const heads = document.querySelectorAll(".para");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const head = heads[i];
    if (head.textContent.toLowerCase().includes(inputText)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
}

////button 


