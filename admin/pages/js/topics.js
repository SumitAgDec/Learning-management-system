import { 
    registerFunc, 
    getDataFunc, 
    formateDateFunc,
    createOptionsFunc,
    isConfirmFunc,
    updateDeFunc
} from "../../module/module.js"

export const topicFunc = () => {
    let data = getDataFunc();
    let category = data ? data.category ? data.category : [] : [];
    let courses = data ? data.courses ? data.courses : [] : [];
    let topics = data ? data.topics ? data.topics : [] : [];
    let topicEl = document.querySelector(".topics")
    let modal = topicEl.querySelector("#topics-modal")
    let btnClose = modal.querySelector('.btn-close')
    let topicForm = topicEl.querySelector(".topic-form")
    let topicCatEl = topicForm.querySelector('.topic-category')
    let topicCourseEl = topicForm.querySelector('.topic-course')
    let topicList = topicEl.querySelector(".topics-list")
    let addTopicBtn = topicEl.querySelector(".add-topic-btn")
    let allFormInput = topicForm.querySelectorAll("input")
    let allFormSelect = topicForm.querySelectorAll("select")
    let allFormBtn = topicForm.querySelectorAll("button")
    
    let topicCatSEl = topicEl.querySelector('.topic-cat-select')
    let topicCourseSEl = topicEl.querySelector('.topic-course-select')

    //store course coding
    topicForm.addEventListener('submit', function(e){
        e.preventDefault()
        registerFunc(topicForm,  topics, 'topics' )
        setTimeout(()=>{
            btnClose.click();
            readTopicFunc(topics);
        },100)
    })

    //show category in select
    createOptionsFunc(category, topicCatEl, "category")
    createOptionsFunc(category, topicCatSEl, "category")
    topicCatEl.onchange = () =>{
        let filter = courses.filter((item)=>(item.category == topicCatEl.value) )
        console.log(filter);
        createOptionsFunc(filter, topicCourseEl, "name")
    }
    topicCatSEl.onchange = () =>{
        let filter = courses.filter((item)=>(item.category == topicCatSEl.value) )
        console.log(filter);
        createOptionsFunc(filter, topicCourseSEl, "name")
    }

    //delete coding
    const delCourseFunc = () => {
        let delBtn = topicList.querySelectorAll(".del-btn")
        delBtn.forEach( (btn, index) => {
            btn.onclick = async () => {
                let cnf = await isConfirmFunc()
                if(cnf){
                    topics.splice(index,1)
                    readTopicFunc(topics)
                    updateDeFunc(topics, 'topics')
                }
            }
        });
    }

    //edit coding
    const editFunc = () => {
        let editBtn = topicList.querySelectorAll(".edit-btn")
        editBtn.forEach((btn, index) => {
            btn.onclick = () => {
                addTopicBtn.click()
                let string = btn.getAttribute('data')
                let data = JSON.parse(string); 
                allFormInput[0].value = data.name
                allFormSelect[0].value = data.category
                allFormSelect[1].innerHTML = `<option>${data.course[0]}</option>`
                allFormBtn[1].classList.add('d-none')
                allFormBtn[2].classList.remove('d-none')
                allFormBtn[2].onclick = () =>{
                    registerFunc(courseForm, courses, 'courses', index, readCoursFunc)
                    // window.location.reload()
                    
                    btnClose.click();
                }
            }
        })
        
    }
    
    // read course coding
    const readTopicFunc = (array) => {
        topicList.innerHTML = ''
        array.forEach((item, index)=>{
            let itemString = JSON.stringify(item);
            topicList.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td class="text-nowrap">${item.category}</td>
                <td class="text-nowrap">${item.course}</td>
                <td class="text-nowrap">${item.name}</td>
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

    readTopicFunc(topics)
    
}