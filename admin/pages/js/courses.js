import { 
    registerFunc, 
    getDataFunc, 
    formateDateFunc,
    createOptionsFunc
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

    // read cateogry coding
    const readCatFunc = () =>{
        categoryList.innerHTML = '';
        category.forEach((item, index) => {
            categoryList.innerHTML += `
            <tr>
                <td class="text-nowrap">${index + 1}</td>
                <td class="text-nowrap">${item.category}</td>
                <td class="text-nowrap">${formateDateFunc(item.createdAt)}</td>
                <td class="text-nowrap">
                    <button class="edit-btn text-green-300">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button class="del-btn text-red-300">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </td>
            </tr>
            `
        });
        
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
    
    // read course coding
    const readCoursFunc = () => {
        courseList.innerHTML = ''
        courses.forEach((item, index)=>{
            courseList.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td class="text-nowrap"><img src=${item.thumbnail} width="40px" alt=""></td>
                <td class="text-nowrap">${item.name}</td>
                <td class="text-nowrap">${item.category}</td>
                <td class="text-nowrap"><a href="${item.link}">Link</a></td>
                <td class="text-nowrap">${item.price}</td>
                <td class="text-nowrap">${item.duration}</td>
                <td class="text-nowrap">${formateDateFunc(item.createdAt)}</td>
                <td class="text-nowrap">
                    <button class="text-green-300">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button class="text-red-300">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </td>
            </tr>
            `
        })
    }

    readCoursFunc()
    
}