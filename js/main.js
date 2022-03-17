
let pizzas = [
    {
      id: 1,
      imageUrl: "../images/pizza1.jpg",
      name: "Pepperoni",
      price: 2.23,
    },
    {
      id: 2,
      imageUrl: "../images/pizza2.jpg",
      name: "Cheesy",
      price: 5.99,
    },
    {
      id: 3,
      imageUrl: "../images/pizza3.jpg",
      name: "Margarita",
      price: 7.48,
    },
    {
      id: 4,
      imageUrl: "../images/pizza4.jpg",
      name: "Hawaiian",
      price: 9.32,
    },
  ];
  
  let menuList = document.querySelector(".menu");
  let cartList = document.querySelector(".card__list");
  let elSubTotal = document.querySelector("#subtotal");
  
  let totalPrice = 0;
  
  // left box added
  for (let i = 0; i < pizzas.length; i++) {
    let li = document.createElement("li");
    li.className = "menu__item pizza animate__animated  animate__fadeInLeft";
    li.innerHTML = `
        <img class="pizza__img" src=${pizzas[i].imageUrl} alt="pizza" />
              <div class="pizza__name">
                <p class="pizza__p">${pizzas[i].name}</p>
                <span class="pizza__price">$${pizzas[i].price}</span>
                <button class="pizza__btn" onclick='addItem(${pizzas[i].id} )'>
                  Add to Cart
                </button>
              </div>`;
  
    menuList.appendChild(li);
  }
  
  let newPizzasArr = [];
  function addItem(id) {
    for (let i = 0; i < pizzas.length; i++) {
      if (id == pizzas[i].id) {
        newPizzasArr.push(pizzas[i]);
      }
    }
  
    for (let i = 0; i < newPizzasArr.length; i++) {
      if (i == newPizzasArr.length - 1) {
        let li = document.createElement("li");
        li.className = "menu__item pizza cart__item animate__animated animate__flipInX";
        li.style =  'animation-duration: 1s ; background-color: rgb(160, 241, 228)';
        li.innerHTML = `
        <img class="pizza__img" src=${newPizzasArr[i].imageUrl} alt="pizza" />
              <div class="pizza__name">
                <p class="pizza__p">${newPizzasArr[i].name}</p>
                <span class="pizza__price">$${newPizzasArr[i].price}</span>
                <button class="pizza__btn remove"  onclick='removeItem(${i})'>
                  remove
                </button>
              </div>
      `;
        totalPrice += newPizzasArr[i].price;
        elSubTotal.textContent = totalPrice.toFixed(2);
        cartList.appendChild(li);
      }
    }
  }
  
  function removeItem(index) {
    let newArrRemove = [];
  
    for (let i = 0; i < newPizzasArr.length; i++) {
      if (index != i) {
        newArrRemove.push(newPizzasArr[i]);
      }
    }
  
    newPizzasArr = newArrRemove;
  
    cartList.innerHTML = "";
    totalPrice = 0;
  
    for (let i = 0; i < newPizzasArr.length; i++) {
      let li = document.createElement("li");
      li.className = "menu__item pizza cart__item  animate__animated animate__flipInX ";
      li.style =  'animation-duration: 1s ; background-color: rgb(160, 241, 228)';
      li.innerHTML = `
        <img class="pizza__img" src=${newPizzasArr[i].imageUrl} alt="pizza" />
              <div class="pizza__name">
                <p class="pizza__p">${newPizzasArr[i].name}</p>
                <span class="pizza__price">$${newPizzasArr[i].price}</span>
                <button class="pizza__btn remove"  onclick='removeItem(${i})'>
                  remove
                </button>
              </div>
      `;
      totalPrice += newPizzasArr[i].price;
      elSubTotal.textContent = totalPrice.toFixed(2);
      cartList.appendChild(li);
    }
    if (newPizzasArr.length == 0){
      totalPrice = 0;
      elSubTotal.textContent = totalPrice.toFixed(2);      
    }
    
    
}

// let arr = pizzas;
// let b =[];
// let count = arr.length;
// for (let i = 0; i < arr.length; i++) {
//     let k = [];
//     let f = [];
//     for (let j = 0; j < arr.length; j++) {
//         if(arr[0]==arr[j]){
//             k.push(arr[j]);
//         }
//         else{
//             f.push(arr[j])
        
//         }
//     }
//     arr = f;
//     if(k != "") b.push(k);   
// }
// console.log(b);
