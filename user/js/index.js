import {getDataFunc, 
    registerFunc, 
    formateDateFunc,
    updateDeFunc
} from "../../admin/module/module.js"

let userInfo;
// check user login or not
if(sessionStorage.getItem('__au__') != null)
{
    userInfo = JSON.parse(sessionStorage.getItem('__au__'))
}
else
{
    window.location = "../../index.html"
}
console.log(userInfo);


// all global variables
let logoutBtn = document.querySelector(".logout-btn")
let profileEl = document.querySelector(".profile")
let userNameEl = document.querySelector(".user-name")
let courseListEl = document.querySelector(".course-list")
let letterName = document.querySelector(".letter-name")
let userMBtn = document.querySelector(".user-m-btn")
let userMForm = document.querySelector(".user-m-form")
let allMFormInput = userMForm.querySelectorAll("input")
let profileBox = document.querySelector(".profile-box")
let imgTag = profileBox.querySelector("img")
let h3Tag = profileBox.querySelector("h3")
let pTag = profileBox.querySelector("p")
let profileForm = profileBox.querySelector(".profile-form")
let allPInput = profileForm.querySelectorAll("input")
let countMsgEl = document.querySelector(".count-msg")
let userMList = document.querySelector(".user-msg-list")

// get data
let data = getDataFunc()

const {courses} = data;
const {usersMsg} = data;
let course = userInfo.course



// logout coding
logoutBtn.onclick = () => {
    logoutBtn.innerText = "please wait...";
    logoutBtn.disabled = true;
    sessionStorage.removeItem("__au__");
    setTimeout(()=>{
        window.location = "../../index.html"
    },2000)
}

// filter message
let filterMsg = usersMsg.filter((item) => {
    return item.type == 'admin' && item.email == userInfo.email && item.status != true
});

// filter all message
let filterAllMsg = usersMsg
  .map((item, index) => ({
    ...item,
    index: index
  }))
  .filter((item) => {
    return item.email == userInfo.email;
  });


//update status
const updateStatus = () => {
    let allSBtn = userMList.querySelectorAll(".status-btn")
    allSBtn.forEach((btn, no)=>{
        btn.onclick = () => {
            let index = btn.getAttribute("index")
            let obj = usersMsg[index];
            obj['status'] = true;
            usersMsg[index] = obj;
            updateDeFunc(usersMsg, 'usersMsg')
            filterAllMsg[no] = obj
            showUserMList()
        }
    })
}

// show all message
const showUserMList = () => {
    userMList.innerHTML = ''
    filterAllMsg.forEach((item,index)=>{
        userMList.innerHTML += `
        <tr>
            <td class="text-nowrap">${index + 1}</td>
            <td class="text-nowrap">${item.title}</td>
            <td class="text-nowrap">${item.message}</td>
            <td class="text-nowrap">${formateDateFunc(item.createdAt)}</td>
            <td class="text-nowrap">
                ${item.status ? `<button disabled class="btn text-green-500"><i class="fa fa-eye"></i></button>` : `<button ${item.type == 'user' ? 'disabled' : ''} index="${item.index}" class="btn status-btn text-grey-500"><i class="fa fa-eye-slash"></i></button>`}
                ${item.type == 'user' ? `${item.status != true ? `<button class="btn text-green-500"><i class="fa fa-edit"></i></button>` : ''}
                <button class="btn text-red-500"><i class="fa fa-trash"></i></button>` : ''}
            </td>
        </tr>
        `
    })
    updateStatus();
};
showUserMList()


// show profile and name
profileEl.src = userInfo.profile
userNameEl.innerText = userInfo.name
letterName.innerHTML = userInfo.name[0]
imgTag.src = userInfo.profile;
h3Tag.innerText = userInfo.name;
pTag.innerHTML = userInfo.email;
allPInput[0].value = userInfo.father;
allPInput[1].value = userInfo.mobile;
allPInput[2].value = userInfo.address;
allPInput[3].value = userInfo.type;
allPInput[4].value = userInfo.course;
allPInput[5].value = userInfo.password;
allPInput[6].value = userInfo.status;
allPInput[7].value = userInfo.price;
allPInput[8].value = formateDateFunc(userInfo.createdAt);
filterMsg.length == 0 && countMsgEl.classList.add("d-none")
countMsgEl.innerText = filterMsg.length;

// filter course
let filter = courses.filter((item)=>course.includes(item.name))
filter.forEach((item, index) => {
    courseListEl.innerHTML += `
        <div class="card flex gap-y-4 p-3 bg-white shadow">
            <img src="${item.profile}" alt="">
            <div class="flex justify-between items-center">
                <h1 class="font-bold">${item.name}</h1>
                <p>
                    <i class="fa fa-rupee"></i>
                    ${item.price}
                </p>
            </div>
            <div class="flex justify-between items-center">
                ${item.free ? 
                    '<button class="btn bg-green-400 text-white">Free</button>' : 
                    '<button class="btn bg-pink-400 text-white">Paid</button>'
                }
                ${item.live ?
                    '<button class="btn bg-red-500 text-white">Live</button>' :
                    '<button class="btn bg-yellow-500 text-white">Completed</button>'
                }
                
                <a href="${item.link}">
                    <button class="btn bg-blue-400 text-white">Course Link</button>
                </a>
            </div>
            <button class="btn bg-green-500 text-white w-full">Syllabus</button>
        </div>
    `
});


// send message from user
userMBtn.onclick = () => {
    allMFormInput[1].value = userInfo.name;
    allMFormInput[2].value = userInfo.email;
}

userMForm.onsubmit = (e) => {
    e.preventDefault();
    registerFunc(userMForm, usersMsg, 'usersMsg')
}