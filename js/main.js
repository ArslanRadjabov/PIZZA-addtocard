// const adder = document.getElementsByClassName('menu__btn');
// console.log(adder);

// for (let i = 0; i < adder.length; i++) {
//     let button = adder[i];
//     button.addEventListener('click', function (event) {
//         var buttonclicked = event.target
//         updateCardTotal();
//     })
    
// }

var addToCard = document.getElementsByClassName('menu__btn');
for (let i = 0; i < addToCard.length; i++) {
    const button = addToCard[i];
    button.addEventListener('click', cardClicked);
}

function cardClicked(event) {
    var button = event.target;
    var menu__item = button.parentElement.parentElement;
    var title  = menu__item.getElementsByClassName('menu__title')[0].innerText;
    var price = menu__item.getElementsByClassName('menu__cost')[0].innerText;
    var img = menu__item.getElementsByClassName('menu__img')[0].src;
    console.log(title,price,img);
    addItemtoCard(title, price,img);
}

function addItemtoCard(title, price,img) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('menu__item');
    
}

// function updateCardTotal() {
//     var cardMenu = document.getElementsByClassName('menu')[0];
//     var cartRows = cardMenu.getElementsByClassName('menu__item')[0];
//     var total = 0;
//     for (let i = 0; i < cartRows.length; i++) {
//         let cartRow = cartRows[i];
//         let priceElement = cartRow.getElementById('menu__cost');
//         let narx = priceElement.value;
//         // var price = parseFloat(priceElement.innerText.replace('$', ''))
//         total = total + narx;
//     }  
//     document.getElementsByClassName('total__price')[0].innerText = total;
// }