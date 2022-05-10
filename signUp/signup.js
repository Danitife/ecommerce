let users = []; 
        let sign_up = document.getElementById('sign_up');
        if(sign_up){
            sign_up.addEventListener('click', (e)=>{
                e.preventDefault()
                let email = document.getElementById('email');
                let password = document.getElementById('password');
                let confirmPassword = document.getElementById('confirmPassword');
                let error_message = document.getElementById('error_message');

                let user = {
                    email: email.value, 
                    password: password.value,
                    confirmPassword: confirmPassword.value
                }
                if(user.password != user.confirmPassword){
                    error_message.innerHTML = "Password does not match";
                    return;
                }else{
                    error_message.innerHTML  = "Login Successful"
                }
                console.log(user);
                users.push(user)
                localStorage.setItem('user', JSON.stringify(users));
                window.location.href = '../login/login.html'
            })
        }