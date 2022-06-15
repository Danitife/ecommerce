let registered_user = {}
let cart_items = []
if(localStorage.getItem('currentUser')){
    registered_user = JSON.parse(localStorage.getItem('currentUser'))
    document.getElementById('username').innerHTML = registered_user.name
}
if(localStorage.getItem('my_cart')){
    cart_items = JSON.parse(localStorage.getItem('my_cart'))
}

setActive('cart')

let cart_display = document.getElementById('cart-display')
cart_items.forEach(element => {
    cart_display.innerHTML += `
        <tr id=${element.id}>
            <td><img class="cartImage" src=${element.image}>
                <span>${element.product_name}</span>
            </td>
            
        
            <td> &#8358; ${element.product_price.toLocaleString()}</td>
            <td>
                <div class="mybutton">
                    <button onclick="decrease(event)" id="decreaseQTY">-</button>
                    <span id="QTY">1</span>
                    <button onclick="increase(event)" id="increaseQTY">+</button>
                </div>
            </td>
            <td id="gTot">${element.product_price}</td>
        </tr>
    `    
});
// let index = 1;
//     let QTY = document.getElementById('QTY')
//     QTY.innerHTML = index;

// function tell(event) {    
//     let thisClick = event.currentTarget.id;
//     // console.log(thisClick);
//     let the_cart = cart_items.find(item => item.id == thisClick);
//     // console.log(the_cart);
    
    
    
//     // total()
// }

function decrease(event) {
    let itm_id = event.target.parentElement.parentElement.parentElement.id;
    let display_item_quantity = event.target.nextElementSibling;
    let total_element = event.target.parentElement.parentElement.nextElementSibling
    let count = display_item_quantity
    if(count.innerHTML == 1){
        alert('Item cannot be less than 1')
        return;
    }
    count.innerHTML--
    total(itm_id, count.innerHTML, total_element)
    grandTot()
}
function increase(event){
    let itm_id = event.target.parentElement.parentElement.parentElement.id;
    let display_item_quantity = event.target.previousElementSibling;
    let total_element = event.target.parentElement.parentElement.nextElementSibling
    let count = display_item_quantity
    count.innerHTML++
    total(itm_id, count.innerHTML, total_element)
    grandTot()
}

// let allDecreaseBtn = document.querySelectorAll("#decreaseQTY")
// let allIncreaseBtn = document.querySelectorAll("#increaseQTY")
// allDecreaseBtn.forEach((element) => {
//     element.addEventListener('click', (e)=>{
//         let itm_id = e.target.parentElement.parentElement.parentElement.id
//         let qauntityElement =  e.target.nextElementSibling
//         let totalElement = e.target.parentElement.parentElement.nextElementSibling
//         if (qauntityElement.innerHTML == 1) {
//             console.log("Quantity cannot be less than 1");
//             return;
//         }else{
//             qauntityElement.innerHTML--
//         }
//         total(itm_id, qauntityElement.innerHTML, totalElement)
//     })
// })

// allIncreaseBtn.forEach((element) => {
//     element.addEventListener('click', (e)=>{
//         // console.log(e);
//         let itm_id = e.target.parentElement.parentElement.parentElement.id
//         let totalElement = e.target.parentElement.parentElement.nextElementSibling
//         let qauntityElement =  e.target.previousElementSibling
//         qauntityElement.innerHTML++
//         total(itm_id, qauntityElement.innerHTML, totalElement)
//     })
// })


let total = (itm_id, count, total_element)=>{
    let total_sum;
    let itm = cart_items.find(item => item.id == itm_id)
    total_sum = itm.product_price * count
    total_element.innerHTML = total_sum
}

let grandTot = ()=>{
    let grand = document.querySelectorAll('#gTot')
    console.log(grand);
    console.log(typeof(grand)); // THIS WAS SUPPOSED TO BE AN ARRAY BUT FOUND OUT ITS AN OBJECT THAT'S WHY I CANNOT USE THE REDUCE METHOD
    console.log(grand[0].innerHTML);
    let to = 0
    grand.forEach(e => {
        console.log(e.innerHTML);
        to += Number(e.innerHTML)
    })

    console.log(to.toLocaleString());
    document.getElementById('grandTotal').innerHTML = ` &#8358; ${to.toLocaleString()}`
}
grandTot()