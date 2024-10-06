// Start all global variable 
let togglerBtn = document.querySelector('.toggler-btn')
let sideNav = document.querySelector(".side-nav")
let pageContent = document.querySelector(".page-content")
let page = document.querySelector(".page")
let menuItems = document.querySelectorAll('.menu-items')


// End all global variable 


// Start toggler coding

togglerBtn.addEventListener('click', function(){
    sideNav.classList.toggle("active")
    pageContent.classList.toggle("active")
})

// End toggler coding


// Define routes 

//  import routes form pages 
import dashboard from "../pages/dashboard.js"
import courses from "../pages/courses.js"
import students from "../pages/students.js"
import settings from "../pages/settings.js"
import notFound from "../pages/notFound.js"



const routes = {
    '/' : dashboard,
    '/courses' :courses,
    '/students' : students,
    '/settings' : settings
}


// hangle routes changes
const handleRouteChanges = () =>{
    console.log(window.location.hash);
    let path = window.location.hash.replace("#", "") || "/";
    console.log(path);
    page.innerHTML = routes[path] || notFound;
}

//handle routes navigation

menuItems.forEach((items)=>{
    items.addEventListener('click', function(){
        menuItems.forEach((el) => el.classList.remove('active'))
        let path = items.getAttribute("to")
        window.location.hash = path
        items.classList.toggle('active')
    })
})

// // load the initial routes
window.onhashchange= () => {
    handleRouteChanges()
}

// Handle Hash Changes
// window.addEventListener('hashchange', handleRouteChanges);

// Handle Initial Load
// window.addEventListener('DOMContentLoaded', () => {
//     // If no hash is present, default to '/'
//     if(!window.location.hash){
//         window.location.hash = '/';
//         console.log(menuItems);
//         menuItems[0].classList.toggle('active');
//     } else {
//         handleRouteChanges();
//     }
// });