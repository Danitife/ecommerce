let registered_user = {}
let cart_items = []
if(localStorage.getItem('currentUser')){
    registered_user = JSON.parse(localStorage.getItem('currentUser'))
    console.log(registered_user);
    document.getElementById('username').innerHTML = registered_user.name
}
if(localStorage.getItem('my_cart')){
    cart_items = JSON.parse(localStorage.getItem('my_cart'))
    console.log(cart_items);
}
let cart_display = document.getElementById('cart-display')
cart_items.forEach(element => {
    cart_display.innerHTML += `
        <tr id=${element.id} onclick="tell(event)">
            <td><img class="cartImage" src=${element.image}></td>
            <td>${element.product_name}</td>
            <td>${element.product_price}</td>
            <td>
                <div class="mybutton">
                    <button class="decreaseQTY">-</button>
                    <span id=${element.id}></span>
                    <button id="increaseQTY">+</button>
                </div>
            </td>
            <td id="total"></td>
        </tr>
    `
});
let index = 1
let QTY = document.getElementById('')
QTY.innerHTML = index;

function tell(event) {
    let thisClick = event.currentTarget.id;
    console.log(thisClick);
    let the_cart = cart_items.find(item => item.id == thisClick);
    console.log(the_cart);
    the_cart.document.getElementById('decreaseQTY').addEventListener('click', ()=>{
        if (index == 1) {
            return;
        }else{
            index--
            QTY.innerHTML = index
        }
        total()
    })
    the_cart.document.getElementById('increaseQTY').addEventListener('click', ()=>{
        index++
        QTY.innerHTML = index
        total()
    })
    let total_sum;
    let total = ()=>{
        total_sum = the_cart.product_price * index
        document.getElementById('total').innerHTML = total_sum.toLocaleString()
    }
    total()
}

