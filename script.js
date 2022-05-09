function shop(){
    window.location.href = 'login.html'
}
let bar = document.getElementById('bar');
let nav = document.getElementById('navbar');
let close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', ()=>{
        console.log('hello ');
        nav.classList.add('active')
    })
}
if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}