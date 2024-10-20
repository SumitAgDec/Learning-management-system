import { 
    registerFunc, 
    getDataFunc, 
    formateDateFunc, 
    isConfirmFunc,
    updateDeFunc
    } from "../../module/module.js"

export const userFunc = () => {
    let data = getDataFunc();
    let users = data ? data.users ? data.users : [] : [];
    let usersMsg = data ? data.usersMsg ? data.usersMsg : [] : [];
    let usersEl = document.querySelector('.users')
    let openModalBtn = usersEl.querySelector('.open-modal')
    let modal = usersEl.querySelector('#users-modal')
    let btnClose = modal.querySelector(".btn-close")
    let usersForm = usersEl.querySelector('.users-form')
    let usersList = usersEl.querySelector(".users-list")
    let allFormInput = usersForm.querySelectorAll('input') 
    let allFormSelect = usersForm.querySelectorAll('select')
    let allFormText = usersForm.querySelector('textarea')
    let allFormBtn = usersForm.querySelectorAll("button")
    let togglePBtn = usersForm.querySelector(".toggle-p-btn")
    let userMModal = usersEl.querySelector("#user-m-modal")
    let mBtnClose = userMModal.querySelector(".btn-close")
    let userMForm = usersEl.querySelector(".user-m-form")
    let allUMFormInput = userMForm.querySelectorAll("input")

    // send data to DB or local storage
    usersForm.addEventListener('submit', function(e){
        e.preventDefault();
        let email = users.find((item)=> item.email == allFormInput[3].value.trim().toLowerCase())
        if( email == undefined ){
            registerFunc(usersForm, users, 'users');
            setTimeout(()=>{
                btnClose.click();
                readUserFunc(users);
            },100)
        } else{
            swal("User Exist", 'This user is already existed', 'warning')
        }
    })

    // toggle password
    togglePBtn.onclick = () =>{
        if(allFormInput[4].type == 'password'){
            allFormInput[4].type = 'text'
            togglePBtn.innerHTML = `<i class="fa fa-eye"></i>`
        }
        else{
            allFormInput[4].type = 'password'
            togglePBtn.innerHTML = `<i class="fa fa-eye-slash"></i>`
        }
    }

    // delete coding 
    const deleteFunc = () => {
        let allDelBtn = document.querySelectorAll('.delete-btn')
        allDelBtn.forEach((btn,index) => {
            btn.onclick = async () =>{
                let confirm = await isConfirmFunc()
                if(confirm)
                {
                    users.splice(index,1);
                    readUserFunc(users);
                    updateDeFunc(users, 'users');
                } 
                
            }
        })
    }

    // reset form and btn
    btnClose.onclick = () => {
        allFormBtn[1].classList.remove('d-none')
        allFormBtn[2].classList.add('d-none')
        usersForm.reset('')
    }

    //edit coding
    const editFunc = () => {
        let editBtn = usersList.querySelectorAll(".edit-btn")
        editBtn.forEach((btn, index) => {
            btn.onclick = () => {
                openModalBtn.click()
                let string = btn.getAttribute('data')
                let data = JSON.parse(string); 
                // allFormInput[0].value = data.profile
                allFormInput[1].value = data.name
                allFormInput[2].value = data.mobile
                allFormInput[3].value = data.email
                allFormInput[4].value = data.password
                allFormInput[5].value = data.father
                data.status ? allFormInput[6].checked = true : allFormInput[6].checked = true
                data.type == 'admin' ? allFormInput[7].checked = true : allFormInput[7].checked = false
                data.type == 'teacher' ? allFormInput[8].checked = true : allFormInput[8].checked = false;
                data.type == 'user' ? allFormInput[9].checked = true : allFormInput[9].checked = true
                allFormInput[10].value = data.price
                allFormSelect[0].value = data.qualification
                let options = allFormSelect[1].querySelectorAll("option")
                options.forEach((op, index)=>{
                    if(data.course && data.course.includes(op.value)){
                        op.selected = true
                    }
                })
                allFormText.value = data.address
                allFormBtn[1].classList.add('d-none')
                allFormBtn[2].classList.remove('d-none')
                allFormBtn[2].onclick = () =>{
                    registerFunc(usersForm, users, 'users', index, readUserFunc)
                    // window.location.reload()
                    btnClose.click();
                }
            }
        })
        
    }

    //send user message coding 
    const sendUserMsg = () =>{
        let allMBtn = usersList.querySelectorAll(".user-m-btn") 
        allMBtn.forEach((btn, index)=>{
            btn.onclick = () =>{
                let name = btn.getAttribute("name")
                let email = btn.getAttribute("email")
                allUMFormInput[1].value = name
                allUMFormInput[2].value = email
            }
        })   
    }

    //store user message coding
    userMForm.onsubmit = () => {
        registerFunc(userMForm, usersMsg, 'usersMsg');
        mBtnClose.click();
    }


    // read data form DB or local storage
    const readUserFunc = (array) => {
        usersList.innerHTML = ''
        array.forEach( (item, index) => {
            let itemString = JSON.stringify(item);
            usersList.innerHTML += `
            <div class="p-4 bg-white shadow-sm">
                <div class="flex border-b py-3 justify-between items-center">
                    <div class="flex justify-center items-center gap-3">
                        <div class="bg-red-100 rounded-full">
                            <img src=${item.profile} width="50" class="rounded-full" alt="">
                        </div>
                        <div>
                            <h5 class="font-semibold">${item.name}</h5>
                            <p class="text-sm text-gray-500">
                                <i class="fa fa-location"></i>
                                ${item.address}
                            </p>
                        </div>
                    </div>
                    <div class="dropdown dropstart">
                        <button role="btn" data-bs-toggle='dropdown' class="btn bg-gray-100 rounded-full w-11 h-11">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                        <div class="dropdown-menu">
                            <button data='${itemString}' class="edit-btn flex items-center justify-between dropdown-item text-blue-600">
                                Edit
                                <i class="fa fa-edit"></i>
                            </button>
                            <button class="delete-btn flex items-center justify-between dropdown-item text-red-600">
                                Delete
                                <i class="fa fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-4">
                    <div class="flex items-center gap-2">
                        <button class="btn rounded-full bg-green-100 text-green-600">
                            <i class="fa-solid fa-indian-rupee-sign"></i>
                        </button>
                        <h5>Payments</h5>
                    </div>
                    <div>
                        <h5 class="text-gray-500 font-semibold"><h5>${item.price || '--'}</h5>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-4">
                    <div class="flex items-center gap-2">
                        <button class="btn rounded-full w-9 h-9 flex items-center justify-center bg-red-100 text-red-600">
                            <i class="fa-solid fa-video"></i>
                        </button>
                        <h5>Total course</h5>
                    </div>
                    <div>
                        <h5 class="text-gray-500 font-semibold">${item.course ? item.course.length : '0'}</h5>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-4">
                    <div class="flex items-center gap-2">
                        <button class="btn rounded-full bg-blue-100 text-blue-600">
                            <i class="fa-regular fa-calendar-days"></i>
                        </button>
                        <h5>Joined</h5>
                    </div>
                    <div>
                        <h5 class="text-gray-500 font-semibold">${formateDateFunc(item.createdAt)}</h5>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-4">
                    <div class="flex items-center gap-2">
                        <button class="btn rounded-full bg-pink-100 text-pink-600">
                            <i class="fa fa-user"></i>
                        </button>
                        <h5>Type</h5>
                    </div>
                    <div>
                        <h5 class="text-gray-500 font-semibold">${item.type ? item.type : 'none'}</h5>
                    </div>
                </div>
                <div class="flex justify-between items-center">
                    <div class="border-b w-full"></div>
                    <div class="w-full flex justify-between items-center">
                        <button 
                        name = "${item.name}"
                        email = "${item.email}"
                        data-bs-toggle="modal" 
                        data-bs-target="#user-m-modal" 
                        class="user-m-btn btn bg-blue-50 text-blue-600 rounded-full">
                            <i class="fa-regular fa-envelope"></i>
                        </button>
                        <div class="border-b w-full"></div>
                        <button class="btn bg-red-50 text-red-600 rounded-full ${item.status ? 'd-none' : ''}">
                            <i class="fa-solid fa-ban"></i>
                        </button>
                        <button class="btn bg-green-50 text-green-600 rounded-full  ${item.status ? '' : 'd-none'}">
                            <i class="fa-solid fa-check"></i>
                        </button>
                    </div>
                    <div class="border-b w-full"></div>
                </div>
            </div>
            `
        });
        editFunc()
        deleteFunc()
        sendUserMsg()
    }

    readUserFunc(users)

    

}