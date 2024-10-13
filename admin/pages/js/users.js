import { registerFunc, getDataFunc } from "../../module/module.js"

export const userFunc = () => {
    let data = getDataFunc();
    let users = data ? data.users ? data.users : [] : [];
    let usersEl = document.querySelector('.users')
    let modal = usersEl.querySelector('#users-modal')
    let btnClose = modal.querySelector(".btn-close")
    let usersForm = usersEl.querySelector('.users-form')
    
    usersForm.addEventListener('submit', function(e){
        e.preventDefault();
        registerFunc(usersForm, users, 'users');
        btnClose.click();
    })
}