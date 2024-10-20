import { 
    getDataFunc,
    createOptionsFunc,
    registerFunc
} from "../../admin/module/module.js"

export const registerUser = () =>{
    const data = getDataFunc();
    let courses = data && data.courses;
    let users = data && data.users;
    // all global variable
    let registerEl = document.querySelector(".register")
    let regForm = document.querySelector(".register-form")
    let allRegSEl = document.querySelectorAll("select")
    let allInput = regForm.querySelectorAll("input")
    let togglePBtn = registerEl.querySelector(".toggle-p-btn")
    // show course in form
    createOptionsFunc(courses, allRegSEl[1], 'name');

    // register data
    regForm.onsubmit = (e) => {
        e.preventDefault();
        let email = users.find((item)=>item.email == allInput[3].value.trim().toLowerCase())
        if(email == undefined){
            registerFunc(regForm, users, 'users')
        }
        else{
            swal("User exist", "This email already registered !", 'warning')
        }
    }

    // toggle password
    togglePBtn.onclick = () =>{
        if(allInput[4].type == 'password'){
            allInput[4].type = 'text'
            togglePBtn.innerHTML = `<i class="fa fa-eye"></i>`
        }
        else{
            allInput[4].type = 'password'
            togglePBtn.innerHTML = `<i class="fa fa-eye-slash"></i>`
        }
    }
}