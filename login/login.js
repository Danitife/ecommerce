let registered_user = JSON.parse(localStorage.getItem('user'))
console.log(registered_user);

let login = document.getElementById('login');
if(login){
    login.addEventListener('click', (e)=>{
        e.preventDefault()
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let message = document.getElementById('message');
        let spinner = document.getElementById('sb')

        registered_user.forEach(element => {
            if(email != element.email && password != element.password){
                message.innerHTML = `<p style="background-color: rgb(177, 96, 96);">User Information Incorect</p>`
                return;
            }else{
                spinner.setAttribute('style', 'display: block')
                // setInterval(() => {
                    let current_user = email
                    console.log(current_user);
                    // window.location.href = '../dashboard/dashboard.html'
                // }, 3000);
            }
        });
    })
}