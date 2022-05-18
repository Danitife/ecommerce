let singleProduct = {}
if(localStorage.getItem('single_product')){
    singleProduct = JSON.parse(localStorage.getItem('single_product'))
    console.log(singleProduct);
}
let index = 1;
document.getElementById('product_img').src = singleProduct.image
document.getElementById('product_name').innerHTML = singleProduct.product_name
document.getElementById('product_price').innerHTML = singleProduct.product_price
document.getElementById('product_description').innerHTML = singleProduct.product_description
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
    document.getElementById('total').innerHTML = total_sum
}
total()