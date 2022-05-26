let singleProduct = {}
if(localStorage.getItem('single_product')){
    singleProduct = JSON.parse(localStorage.getItem('single_product'))
    console.log(singleProduct);
}
let index = 1;

let singlePro = ()=>{
    document.getElementById('selected_product').innerHTML = `
            <div class="pro_img_div">
                <img src=${singleProduct.image} alt="">
            </div>
            <div class="pro_description">
                <span id="total" class="total"></span>
                <h1>${singleProduct.product_name}</h1>
                <div class="star">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <p id="product_price">${singleProduct.product_price}</p>
                <small>${singleProduct.product_description}</small>
                <hr>
                <div class="QTY_SIZE">
                    <div>
                        <h4>QTY</h4>
                        <div class="mybutton">
                            <button id="decreaseQTY">-</button>
                            <span id="QTY"></span>
                            <button id="increaseQTY">+</button>
                        </div>
                    </div>
                    <div class="sizeDiv">
                        <h4>SIZE</h4>
                        <select name="" id="">
                            <option value="">Medium</option>
                            <option value="">Large</option>
                            <option value="">X-Large</option>
                        </select>
                    </div>
                </div>

                <div class="cartDiv">
                    <button class="cart">ADD TO CART</button>
                    <button class="favbutton"><i class="fa fa-heart"></i></button>
                    <button class="favbutton"><i class="icofont-comment"></i></button>
                </div>
                <div class="shareIt">
                    <span>SHARE IT</span>
                    <i class="social fa fa-facebook"></i>
                    <i class="social fa fa-twitter"></i>
                    <i class="social fa fa-instagram"></i>
                </div>
            </div>
    `
}
singlePro()

document.getElementById('product_price').innerHTML = singleProduct.product_price.toLocaleString()
let QTY = document.getElementById('QTY')
QTY.innerHTML = index
document.getElementById('decreaseQTY').addEventListener('click', ()=>{
    if (index == 1) {
        return;
    }else{
        index--
        QTY.innerHTML = index
    }
    total()
})
document.getElementById('increaseQTY').addEventListener('click', ()=>{
    index++
    QTY.innerHTML = index
    total()
})
let total_sum;
let total = ()=>{
    total_sum = singleProduct.product_price * index
    document.getElementById('total').innerHTML = total_sum.toLocaleString()
}
total()

let des = `
<h1>This is about the product</h1>
<b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nostrum quas officiis blanditiis veniam velit minima expedita aut odio molestias at ratione quae dignissimos, laboriosam harum accusantium eligendi repellat itaque</b>`
document.getElementById('description-content').innerHTML = des