import { registerFunc, getDataFunc, formateDateFunc } from "../../module/module.js"

export const userFunc = () => {
    let data = getDataFunc();
    let users = data ? data.users ? data.users : [] : [];
    let usersEl = document.querySelector('.users')
    let modal = usersEl.querySelector('#users-modal')
    let btnClose = modal.querySelector(".btn-close")
    let usersForm = usersEl.querySelector('.users-form')
    let usersList = usersEl.querySelector(".users-list")
    // send data to DB or local storage
    usersForm.addEventListener('submit', function(e){
        e.preventDefault();
        registerFunc(usersForm, users, 'users');
        setTimeout(()=>{
            btnClose.click();
            readUserFunc();
        },100)
    })

    // read data form DB or local storage
    const readUserFunc = () => {
        users.forEach( (item, index) => {
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
                            <button class="flex items-center justify-between dropdown-item text-blue-600">
                                Edit
                                <i class="fa fa-edit"></i>
                            </button>
                            <button class="flex items-center justify-between dropdown-item text-red-600">
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
                        <h5 class="text-gray-500 font-semibold">12000</h5>
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
                        <h5 class="text-gray-500 font-semibold">${item.course.length}</h5>
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
                        <h5 class="text-gray-500 font-semibold">${item.type}</h5>
                    </div>
                </div>
                <div class="flex justify-between items-center">
                    <div class="border-b w-full"></div>
                    <div class="w-full flex justify-between items-center">
                        <button class="btn bg-blue-50 text-blue-600 rounded-full">
                            <i class="fa-regular fa-envelope"></i>
                        </button>
                        <div class="border-b w-full"></div>
                        <button class="btn bg-red-50 text-red-600 rounded-full">
                            <i class="fa-solid fa-ban"></i>
                        </button>
                        <button class="btn d-none bg-green-50 text-green-600 rounded-full">
                            <i class="fa-solid fa-check"></i>
                        </button>
                    </div>
                    <div class="border-b w-full"></div>
                </div>
            </div>
            `
        });
    }

    readUserFunc()

}