let registered_user = {};
if(localStorage.getItem('currentUser')){
    registered_user = JSON.parse(localStorage.getItem('currentUser'))
    let theName = document.getElementById('username')
    theName.innerHTML = registered_user.name;
}else{
    window.location.href = '../login/login.html'
}

let items = [
    {
        id: 0,
        image: "../img/adminImg/admin-image1.png",
        product_name: "Punk Double Layer Lock Chain",
        product_description: "I'm just a developer, not a content writer. Can't be thinking of description for goods",
        product_price: 1862,
        discount_price: 3360
    },
    {
        id: 1,
        image: "../img/adminImg/admin-image2.png",
        product_name: "Childrens Led Light Shoes",
        product_description: "I'm just a developer, not a content writer. Can't be thinking of description for goods",
        product_price: 4850,
        discount_price: 9325
    },
    {
        id: 2,
        image: "../img/adminImg/admin-image3.png",
        product_name: "XIAOMI Poco M4 Pro",
        product_description: "I'm just a developer, not a content writer. Can't be thinking of description for goods",
        product_price: 106999,
        discount_price: 109990
    },
    {
        id: 3,
        image: "../img/adminImg/admin-image4.png",
        product_name: "Children's Gown",
        product_description: "I'm just a developer, not a content writer. Can't be thinking of description for goods",
        product_price: 3266,
        discount_price: 5299
    },
    {
        id: 4,
        image: "../img/adminImg/admin-image5.png",
        product_name: "Silver Crest 4500W Industrial Blender",
        product_description: "I'm just a developer, not a content writer. Can't be thinking of description for goods",
        product_price: 17200,
        discount_price: 32000
    },
    {
        id: 5,
        image: "../img/adminImg/admin-image6.png",
        product_name: "Kiki New Gain Led Clipper",
        product_description: "I'm just a developer, not a content writer. Can't be thinking of description for goods",
        product_price: 6815,
        discount_price: 7350
    },
    {
        id: 6,
        image: "../img/adminImg/admin-image7.png",
        product_name: "Adidas Sport PERFORMER ASWEERUN",
        product_description: "I'm just a developer, not a content writer. Can't be thinking of description for goods",
        product_price: 23500,
        discount_price: 32567
    },
    {
        id: 7,
        image: "../img/adminImg/admin-image8.png",
        product_name: "Kid's Shoes Fashion Girls Shoe",
        product_description: "I'm just a developer, not a content writer. Can't be thinking of description for goods",
        product_price: 23500,
        discount_price: 32567
    }

]

let showDashboard = ()=>{
    
        items.forEach(element => {
            document.getElementById('selection').innerHTML += `
            <div onclick="press(event)" class="goods" id=${element.id}>
                    <div class="goods-image">
                        <img id="goods_image1" src="${element.image}" alt="">
                    </div>
                    <p>${element.product_name}</p>
                    <b>${element.product_price}</b><br>
                    <span>&#8358; ${element.discount_price}</span>
                </div>
            `
        });
        
}

function press(event) {
    let product = items.find(el => el.id == event.target.id)
    console.log(product);
    localStorage.setItem('single_product', JSON.stringify(product))
    window.location.href = '../seemore/seemore.html'
}

showDashboard()

document.getElementById('logout').addEventListener('click', ()=>{
    localStorage.removeItem('currentUser')
    window.location.href = '../index.html'
})