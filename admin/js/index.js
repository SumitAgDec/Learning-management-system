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
import users from "../pages/users.js"
import settings from "../pages/settings.js"
import notFound from "../pages/notFound.js"
import topics from "../pages/topics.js"
import chapters from "../pages/chapters.js"

//  import routes form pages / js folder
import {dashboardFunc} from '../pages/js/dashboard.js'
import { userFunc } from "../pages/js/users.js"
import { categoryFunc, courseFunc } from "../pages/js/courses.js"
import { topicFunc } from "../pages/js/topics.js"
import { chapterFunc } from "../pages/js/chapters.js"
import { settingsFunc } from "../pages/js/settings.js"



const routes = {
    '/' : dashboard,
    '/courses' :courses,
    '/topics' :topics,
    '/chapters' :chapters,
    '/users' : users,
    '/settings' : settings
}


// hangle routes changes
const handleRouteChanges = () =>{
    let path = window.location.hash.replace("#", "") || "/";
    page.innerHTML = routes[path] || notFound;
    if( path == '/'){
        dashboardFunc()
    }
    else if ( path == '/users' ){
        userFunc();
    }
    else if ( path == '/courses' ){
        categoryFunc();
        courseFunc()
    }
    else if ( path == '/topics' ){
        topicFunc();
    }
    else if ( path == '/chapters' ){
        chapterFunc();
    }
    else if ( path == '/settings' ){
        settingsFunc();
    }
}

//handle routes navigation

menuItems.forEach((items)=>{
    items.addEventListener('click', function(){
        menuItems.forEach((el) => el.classList.remove('active'))
        let path = items.getAttribute("to")
        window.location.hash = path
        items.classList.add('active')
    })
})

// // load the initial routes
// window.onhashchange= () => {
//     handleRouteChanges()
// }

// Handle Hash Changes
window.addEventListener('hashchange', handleRouteChanges);

// Handle Initial Load
window.addEventListener('DOMContentLoaded', () => {
    // If no hash is present, default to '/'
    if(!window.location.hash){
        window.location.hash = '/';
        console.log(menuItems);
        menuItems[0].classList.add('active');
    } else {
        handleRouteChanges();
    }
});