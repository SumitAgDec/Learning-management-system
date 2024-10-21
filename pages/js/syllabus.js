import { 
    getDataFunc
} from "../../admin/module/module.js"

export const syllabus = () => {
    // get data from local storage
    let data = getDataFunc();
    let {courses} = data;
    let {topics} = data;
    let {chapters} = data;

    // get course from session
    let courseName = sessionStorage.getItem("course")
    let filterCourse = courses.filter((item)=>item.name == courseName)
    let filterTopics = topics.filter((item)=>item.course == courseName)
    // console.log(filterTopics, chapters);
    
    
    // global variables
    let syllabusEl = document.querySelector(".syllabus")
    let courseNEl = syllabusEl.querySelector(".course-name")
    let courseDEl = syllabusEl.querySelector(".course-desc")
    let topicList = syllabusEl.querySelector(".topic-list")

    // show course name and desccription
    courseNEl.innerHTML = filterCourse[0].name;
    courseDEl.innerHTML = filterCourse[0].desc;

    // show topics
    filterTopics.forEach((item, index) => {
        // filter chapters that belongs to current topic
        const filterChapters = chapters.filter((chapter)=>chapter.topic == item.name)  
        // console.log(filterChapters);
        
        const chapterHtml = filterChapters.map((ch)=> `
        <p class="mt-1">${ch.name}</p>
        ` )
        
        topicList.innerHTML += `
            <div class="bg-white mt-2 p-4">
                <h1 class="font-bold capitalize text-2xl">${item.name}</h1>
                ${chapterHtml}
            </div>
        `
    });
}