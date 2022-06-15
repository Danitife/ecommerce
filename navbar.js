function navbar(){
    document.getElementById('nav').innerHTML = `
        <div class="nav-logo">
            <img src="../img/logo.png" alt="">
            <h1>ShopTee</h1>
        </div>
        <h1>Welcome to your Dashboard <span id="username"></span></h1>
        <div class="nav">
                <div class="navv-item">
                    <i class="fa fa-home"></i>
                    <a href="#">Home</a>
                </div>
                <div onclick="dashboard()" id="da" class="navv-item">
                    <i class="icofont-listing-box mm"></i>
                    <a>Dashboard</a>
                </div>
                <div class="navv-item">
                    <i class="icofont-ui-love"></i>
                    <a onclick="favourite()">Favourite</a>
                </div>
                <div onclick="cartt()" id="car" class="navv-item">
                    <i class="fa fa-cart-arrow-down cart"></i>
                    <a>Cart</a>
                </div>
                <div class="navv-item">
                    <i class="icofont-cart-alt"></i>
                    <a href="#">Checkout</a>
                </div>
                <div onclick="history()" id="hist" class="navv-item">
                    <i class="icofont-history"></i>
                    <a>History</a>
                </div>
                <div class="navv-item">
                    <i class="icofont-notepad"></i>
                    <a href="#">Summary</a>
                </div>
                <div class="navv-item">
                    <i class="icofont-ui-rate-blank"></i>
                    <a href="#">Reviews</a>
                </div>
        </div>
    `
}
navbar()
function dashboard(){
    window.location.href = '../dashboard/dashboard.html';
}
function cartt(){
    window.location.href = '../cart/cart.html'
}
function favourite(){
    window.location.href = '../favourite/favourite.html'
}
function history(){
    window.location.href = '../history/history.html'
}


function setActive(href) {
    if (href == 'dashboard') {
        document.getElementById('da').classList.add('active')
    }else if(href == 'cart'){
        document.getElementById('car').classList.add('active')
    }else if(href == 'history'){
        document.getElementById('hist').classList.add('active')
    }
    
}