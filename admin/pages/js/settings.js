import { 
    registerFunc, 
    getDataFunc, 
    formateDateFunc,
    createOptionsFunc,
    isConfirmFunc,
    updateDeFunc
} from "../../module/module.js"

export const settingsFunc = () => {
    let data = getDataFunc();
    let pageNotify = data ? data.pageNotify ? data.pageNotify : [] : [];
    let settingEl = document.querySelector(".settings")
    let modal = settingEl.querySelector("#page-n-modal")
    let btnClose = modal.querySelector('.btn-close')
    let pageNForm = settingEl.querySelector(".page-n-form")
    let allFormInput = pageNForm.querySelectorAll("input")
    let allFormBtn = pageNForm.querySelectorAll("button")
    let textAreaEl = pageNForm.querySelector("textarea")
    let pageNPreview = settingEl.querySelector(".page-n-preview")
    let h1El = pageNPreview.querySelector("h1")
    let pageNList = settingEl.querySelector(".page-n-list")
    let addPageNBtn = settingEl.querySelector(".add-page-n-btn")

    //page notification preview coding
    textAreaEl.oninput = () =>{
        h1El.innerHTML = textAreaEl.value
    }

    allFormInput[1].oninput = () => {
        pageNPreview.style.backgroundColor = allFormInput[1].value
    }

    allFormInput[2].oninput = () => {
        pageNPreview.style.color = allFormInput[2].value
    }

    //store course coding
    pageNForm.addEventListener('submit', function(e){
        e.preventDefault()
            registerFunc(pageNForm,  pageNotify, 'pageNotify' )
            setTimeout(()=>{
            btnClose.click();
            readPageNFunc(pageNotify);
            },100)
    })

    //delete coding
    const delCourseFunc = () => {
        let delBtn = pageNList.querySelectorAll(".del-btn")
        delBtn.forEach( (btn, index) => {
            btn.onclick = async () => {
                let cnf = await isConfirmFunc()
                if(cnf){
                    pageNotify.splice(index,1)
                    readPageNFunc(pageNotify)
                    updateDeFunc(pageNotify, 'pageNotify')
                }
            }
        });
    }

    //edit coding
    const editFunc = () => {
        let editBtn = pageNList.querySelectorAll(".edit-btn")
        editBtn.forEach((btn, index) => {
            btn.onclick = () => {
                addPageNBtn.click()
                let string = btn.getAttribute('data')
                let data = JSON.parse(string);
                h1El.innerHTML = data.notification
                textAreaEl.value = data.notification;
                allFormInput[0].value = data.page
                allFormInput[1].value = data.bgColor;
                allFormInput[2].value = data.textColor;
                allFormBtn[1].classList.add('d-none')
                allFormBtn[2].classList.remove('d-none')
                allFormBtn[2].onclick = () =>{
                    registerFunc(pageNForm, pageNotify, 'pageNotify', index, readPageNFunc)
                    // window.location.reload()
                    
                    btnClose.click();
                }
            }
        })
        
    }
 
    // reset form and btn
    btnClose.onclick = () => {
        allFormBtn[1].classList.remove('d-none')
        allFormBtn[2].classList.add('d-none')
        topicForm.reset('')
    }
    
    // read course coding
    const readPageNFunc = (array) => {
        pageNList.innerHTML = ''
        array.forEach((item, index)=>{
            let itemString = JSON.stringify(item);
            pageNList.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.notification}</td>
                <td>${item.page}</td>
                <td>${formateDateFunc(item.createdAt)}</td>
                <td>
                    <button data='${itemString}' class="btn edit-btn text-green-400">
                        <i class="fa fa-edit"></i>
                    </button>
                    <button class="btn del-btn text-red-400">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
            `
        });
        delCourseFunc()
        editFunc()
    }

    readPageNFunc(pageNotify)
    
}