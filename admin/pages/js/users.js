import { registerFunc } from "../../module/module.js"

export const userFunc = () => {
    let users = []
    let usersEl = document.querySelector('.users')
    let usersForm = usersEl.querySelector('.users-form')
    usersForm.addEventListener('submit', function(e){
        e.preventDefault();
        registerFunc(usersForm, users, 'users')
    })
}