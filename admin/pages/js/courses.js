import { 
    registerFunc, 
    getDataFunc, 
    formateDateFunc,
    createOptionsFunc,
    isConfirmFunc,
    updateDeFunc
} from "../../module/module.js"

let data = getDataFunc();
let category = data ? data.category ? data.category : [] : [];

export const categoryFunc = () => {
    // global variable
    let courseEl = document.querySelector(".courses")
    let categoryForm = courseEl.querySelector(".category-form")
    let modal = courseEl.querySelector("#category-modal")
    let btnClose = modal.querySelector(".btn-close")
    let categoryList = courseEl.querySelector(".category-list")
    let courseForm = courseEl.querySelector(".course-form")
    let courseCategory = courseForm.querySelector('.course-category')
    let addCategoryModal = courseEl.querySelector(".add-category-btn")
    let allFormInput = categoryForm.querySelectorAll("input")
    let allFormBtn = categoryForm.querySelectorAll("button")

    // store category coding
    categoryForm.addEventListener('submit', function(e){
        e.preventDefault()
        registerFunc(categoryForm, category, 'category')
        setTimeout(()=>{
            btnClose.click();
            readCatFunc();
        },100)
        //show category in select
        createOptionsFunc(category, courseCategory)
        
    })

    //delete coding
    const delCatFunc = () => {
        let delBtn = categoryList.querySelectorAll(".del-btn")
        delBtn.forEach( (btn, index) => {
            btn.onclick = async () => {
                let cnf = await isConfirmFunc()
                if(cnf){
                    category.splice(index,1)
                    readCatFunc()
                    updateDeFunc(category, 'category')
                }
            }
        });
    }

    //edit coding
    const editFunc = () => {
        let editBtn = categoryList.querySelectorAll(".edit-btn")
        editBtn.forEach((btn, index) => {
            btn.onclick = () => {
                addCategoryModal.click()
                let string = btn.getAttribute('data')
                let data = JSON.parse(string); 
                allFormInput[0].value = data.category
                
                allFormBtn[1].classList.add('d-none')
                allFormBtn[2].classList.remove('d-none')
                allFormBtn[2].onclick = () =>{
                    registerFunc(categoryForm, category, 'category', index)
                    window.location.reload()
                    btnClose.click();
                }
            }
        })
        
    }

    // read cateogry coding
    const readCatFunc = () =>{
        categoryList.innerHTML = '';
        category.forEach((item, index) => {
            let itemString = JSON.stringify(item);
            categoryList.innerHTML += `
            <tr>
                <td class="text-nowrap">${index + 1}</td>
                <td class="text-nowrap">${item.category}</td>
                <td class="text-nowrap">${formateDateFunc(item.createdAt)}</td>
                <td class="text-nowrap">
                    <button data='${itemString}' class="edit-btn text-green-300">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button class="del-btn text-red-300">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </td>
            </tr>
            `
        });
        delCatFunc();
        editFunc()
    }

    readCatFunc()

    
}

export const courseFunc = () => {
    let data = getDataFunc();
    let courses = data ? data.courses ? data.courses : [] : [];
    let courseEl = document.querySelector(".courses")
    let modal = courseEl.querySelector("#course-modal")
    let btnClose = modal.querySelector('.btn-close')
    let courseForm = courseEl.querySelector(".course-form")
    let courseCategory = courseForm.querySelector('.course-category')
    let courseList = courseEl.querySelector(".course-list")
    let addCourseModal = courseEl.querySelector(".add-course-btn")
    let allFormInput = courseForm.querySelectorAll("input")
    let allFormSelect = courseForm.querySelectorAll("select")
    let allFormTextArea = courseForm.querySelector("textarea")
    let allFormBtn = courseForm.querySelectorAll("button")

    //store course coding
    courseForm.addEventListener('submit', function(e){
        e.preventDefault()
        registerFunc(courseForm,  courses, 'courses' )
        setTimeout(()=>{
            btnClose.click();
            readCoursFunc();
        },100)
    })

    //show category in select
    createOptionsFunc(category, courseCategory)

    //delete coding
    const delCourseFunc = () => {
        let delBtn = courseList.querySelectorAll(".del-btn")
        delBtn.forEach( (btn, index) => {
            btn.onclick = async () => {
                let cnf = await isConfirmFunc()
                if(cnf){
                    courses.splice(index,1)
                    readCoursFunc()
                    updateDeFunc(courses, 'courses')
                }
            }
        });
    }

    //edit coding
    const editFunc = () => {
        let editBtn = courseList.querySelectorAll(".edit-btn")
        editBtn.forEach((btn, index) => {
            btn.onclick = () => {
                addCourseModal.click()
                let string = btn.getAttribute('data')
                let data = JSON.parse(string); 
                allFormInput[1].value = data.name
                allFormInput[2].value = data.link
                allFormInput[3].value = data.price
                data.live ? allFormInput[4].checked = true : allFormInput[4].checked = false
                data.free ? allFormInput[5].checked = true : allFormInput[5].checked = false;
                allFormSelect[0].value = data.category
                allFormSelect[1].value = data.duration
                allFormTextArea.value = data.desc
                
                allFormBtn[1].classList.add('d-none')
                allFormBtn[2].classList.remove('d-none')
                allFormBtn[2].onclick = () =>{
                    registerFunc(courseForm, courses, 'courses', index)
                    window.location.reload()
                    btnClose.click();
                }
            }
        })
        
    }
    
    // read course coding
    const readCoursFunc = () => {
        courseList.innerHTML = ''
        courses.forEach((item, index)=>{
            let itemString = JSON.stringify(item);
            courseList.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td class="text-nowrap"><img src=${item.profile} width="40px" alt=""></td>
                <td class="text-nowrap">${item.name}</td>
                <td class="text-nowrap">${item.category}</td>
                <td class="text-nowrap"><a href="${item.link}">Link</a></td>
                <td class="text-nowrap">${item.price}</td>
                <td class="text-nowrap">${item.duration}</td>
                <td class="text-nowrap">${formateDateFunc(item.createdAt)}</td>
                <td class="text-nowrap">
                    <button data='${itemString}' class="edit-btn text-green-300">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button class="del-btn text-red-300">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </td>
            </tr>
            `
        });
        delCourseFunc()
        editFunc()
    }

    readCoursFunc()
    
}