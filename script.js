function shop(){
    window.location.href = 'signUp/signup.html'
}
let bar = document.getElementById('bar');
let nav = document.getElementById('navbar');
let close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}
if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}
let feature = [
    {
        image: "img/feature/f1.png",
        content: "Free Shipping"
    },
    {
        image: "img/feature/f2.png",
        content: "Online Order"
    },
    {
        image: "img/feature/f3.png",
        content: "Save Money"
    },
    {
        image: "img/feature/f4.png",
        content: "Promotions"
    },
    {
        image: "img/feature/f5.png",
        content: "Happy Sell"
    },
    {
        image: "img/feature/f6.png",
        content: "24 / 7 Support"
    },
]

let showFeature = ()=>{
    feature.forEach(element =>{
        document.getElementById('feature').innerHTML += `
        <div class="fe-box">
            <img src=${element.image} alt="" width="100%" height="100px">
            <h6>${element.content}</h6>
        </div>
        `
    })
}
showFeature()

let featured_product = [
    {
        image: "img/f9.png",
        price: 78
    },
    {
        image: "img/f2.jpg",
        price: 78
    },
    {
        image: "img/f4.jpg",
        price: 78
    },
    {
        image: "img/f5.jpg",
        price: 78
    },
    {
        image: "img/f9.png",
        price: 78
    },
    {
        image: "img/maclean_dispenser.jpg",
        price: 78
    },
    {
        image: "img/Groceries.jpg",
        price: 78
    },
    {
        image: "img/Clock.jpg",
        price: 78
    }
]

let showFeatured = ()=>{
    featured_product.forEach(element =>{
        document.getElementById('pro-container1').innerHTML +=`
        <div class="pro">
                <img src=${element.image} alt="">
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-Shirt</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>${element.price}</h4>
                </div>
                <a href="#"><i class="fa fa-cart-arrow-down cart"></i></a>
        </div>
        `
    })
}
showFeatured()

let product = [
    {
        image: "img/f9.png",
        brand: "Adidas",
        product_name: "Cartoon Astronaut T-Shirt",
        price: 78
    },
    {
        image: "img/f2.jpg",
        brand: "Adidas",
        product_name: "Soft Tender Towels",
        price: 78
    },
    {
        image: "img/f4.jpg",
        brand: "Adidas",
        product_name: "A very Nice Kitchen Set",
        price: 78
    },
    {
        image: "img/f5.jpg",
        brand: "Adidas",
        product_name: "Fashion Belts for Ladies",
        price: 78
    },
    {
        image: "img/f9.jpg",
        brand: "Adidas",
        product_name: "Men's Body Spray",
        price: 78
    },
    {
        image: "img/laptop1.jpg",
        brand: "Hp",
        product_name: "Laptop",
        price: 78
    },
    {
        image: "img/laptop2.jpg",
        brand: "Dell",
        product_name: "Computer",
        price: 78
    },
    {
        image: "img/car.png",
        brand: "Tesla",
        product_name: "Car",
        price: 78
    }
]

let displayProduct = ()=>{
    product.forEach(element =>{
        document.getElementById('pro-container2').innerHTML +=`
            <div class="pro">
                <img src=${element.image} alt="">
                <div class="des">
                    <span>${element.brand}</span>
                    <h5>${element.product_name}</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>${element.price}</h4>
                </div>
                <a href="#"><i class="fa fa-cart-arrow-down cart"></i></a>
            </div>
        `
    })
}
displayProduct()