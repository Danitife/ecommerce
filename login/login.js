

        let login = document.getElementById('login');
        if(login){
            login.addEventListener('click', (e)=>{
                let registered_user = JSON.parse(localStorage.getItem('user'))
                console.log(registered_user);
                let email = document.getElementById('email'),value;
                let password = document.getElementById('password').value;
                let message = document.getElementById('message')
                e.preventDefault()
                if(email != registered_user[0].email && password != registered_user[0].password){
                    message.innerHTML = "Invalid user information";
                    console.log(registered_user[0].email);
                    return;
                }else{
                    window.location.href = '/dashboard.html'
                }
            })
        }