import { 
    getDataFunc
} from "../../admin/module/module.js"

export const coursesFunc = () => {
    let data = getDataFunc()
    const courseArr = data.courses;
    let courseList  = document.querySelector(".course-list");

    courseArr.forEach((item,index) => {
        courseList.innerHTML += `
        <div class="card flex gap-y-4 p-3 bg-white shadow">
            <img src="${item.profile}" alt="">
            <div class="flex justify-between items-center">
                <h1 class="font-bold capitalize">${item.name}</h1>
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
            <a href="#/syllabus" class="course-btn" name="${item.name}">
                <button class="btn bg-green-500 text-white w-full">Syllabus</button>
            </a>
        </div>
        `
    });
    let allCourseBtn = courseList.querySelectorAll(".course-btn")
    allCourseBtn.forEach((btn, index)=>{
        btn.onclick = () =>{
            let course = btn.getAttribute("name")
            sessionStorage.setItem("course", course)
        }
    })
}