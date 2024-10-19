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
        let topic = topics.find((item)=>{
            return (
                item.course[0] == allFormSelect[1].value &&
                item.name == allFormInput[0].value.trim().toLowerCase()
            )
        })
        if( topic == undefined ){
            registerFunc(topicForm,  topics, 'topics' )
            setTimeout(()=>{
            btnClose.click();
            readTopicFunc(topics);
            },100)
        } else{
            swal("Topic Exits", 'This topic is already existed', 'warning')
        }
    })

    //show category in form select
    createOptionsFunc(category, topicCatEl, "category")

    // show category in page select
    createOptionsFunc(category, topicCatSEl, "category")

    //filter course in form select
    topicCatEl.onchange = () =>{
        let filter = courses.filter((item)=>(item.category == topicCatEl.value) )
        console.log(filter);
        createOptionsFunc(filter, topicCourseEl, "name")
    }

    //filter course in page selectx
    topicCatSEl.onchange = () =>{
        let filter = courses.filter((item)=>(item.category == topicCatSEl.value) )
        console.log(filter);
        createOptionsFunc(filter, topicCourseSEl, "name")
    }

    //filter data for page
    topicCourseSEl.onchange = () => {
        let tmp = topics.map((item,index)=>({...item,index:index}))
        let filter = tmp.filter((item)=>item.course == topicCourseSEl.value)
        readTopicFunc(filter);
    }

    //delete coding
    const delCourseFunc = () => {
        let delBtn = topicList.querySelectorAll(".del-btn")
        delBtn.forEach( (btn) => {
            btn.onclick = async () => {
                let index = btn.getAttribute("index")
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
        editBtn.forEach((btn) => {
            btn.onclick = () => {
                addTopicBtn.click()
                let index = btn.getAttribute("index")
                let string = btn.getAttribute('data')
                let data = JSON.parse(string); 
                allFormInput[0].value = data.name
                allFormSelect[0].value = data.category
                allFormSelect[1].innerHTML = `<option>${data.course[0]}</option>`
                allFormBtn[1].classList.add('d-none')
                allFormBtn[2].classList.remove('d-none')
                allFormBtn[2].onclick = () =>{
                    registerFunc(topicForm, topics, 'topics', index, readTopicFunc)
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
                    <button index="${item.index ? item.index : index}" data='${itemString}' class="edit-btn text-green-300">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button index="${item.index ? item.index : index}" class="del-btn text-red-300">
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