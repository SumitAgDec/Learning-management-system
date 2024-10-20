import { 
    getDataFunc
} from "../../admin/module/module.js"

export const loginUser = () => {
    let data = getDataFunc();
    let users = data && data.users
    // all global variable
    let loginEL = document.querySelector(".login")
    let loginForm = loginEL.querySelector(".login-form")
    let allInput = loginForm.querySelectorAll("input")
    let togglePBtn = loginForm.querySelector(".toggle-p-btn")
    
    // login now coding
    loginForm.onsubmit = (e) => {
        e.preventDefault()
        let email = users.find((item)=>item.email == allInput[0].value.trim().toLowerCase())
        if( email != undefined )
        {
            if( email.password == allInput[1].value.trim().toLowerCase() ){
                if( email.status == 'on' ){
                    if ( email.type == 'user' ){
                        window.location = '../../user/index.html'
                        sessionStorage.setItem("__au__", JSON.stringify(email));
                    }
                    else{ 
                        window.location = '../../admin/index.html'
                        sessionStorage.setItem("__au__", JSON.stringify(email));
                    }
                }
                else{
                    swal("You are blocked", 'contact your branch', 'warning')
                }
            }
            else{
                swal("Wrong credential", 'contact your branch', 'warning')
            }
        }
        else {
            swal("Wrong credential", 'contact your branch', 'warning')
        }
    }

    // toggle password
    togglePBtn.onclick = () =>{
        if(allInput[1].type == 'password'){
            allInput[1].type = 'text'
            togglePBtn.innerHTML = `<i class="fa fa-eye"></i>`
        }
        else{
            allInput[1].type = 'password'
            togglePBtn.innerHTML = `<i class="fa fa-eye-slash"></i>`
        }
    }
    
    
}