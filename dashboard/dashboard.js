let current_user = JSON.parse(localStorage.getItem('currentUser'))
console.log(current_user);

let theName = document.getElementById('username')

theName.innerHTML = current_user.name