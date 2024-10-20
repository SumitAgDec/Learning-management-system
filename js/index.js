// Start all global variable
let page = document.querySelector(".page")
let menuItems = document.querySelectorAll('.menu-items')


// End all global variable 



// Define routes 

//  import routes form pages 
import register from '../pages/register.js'
import notFound from '../pages/notFound.js'
import login from '../pages/login.js'

//  import routes form pages / js folder
// import {dashboardFunc} from '../pages/js/dashboard.js'
import { registerUser } from '../pages/js/register.js'
import { loginUser } from '../pages/js/login.js'



const routes = {
    '/' : '/',
    '/register' :register,
    '/login' :login,
}


// hangle routes changes
const handleRouteChanges = () =>{
    let path = window.location.hash.replace("#", "") || "/";
    page.innerHTML = routes[path] || notFound;
    if( path == '/'){
        // dashboardFunc()
    }
    else if( path == '/register'){
        registerUser()
    }
    else if( path == '/login'){
        loginUser()
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
        menuItems[0].classList.toggle('active');
    } else {
        handleRouteChanges();
    }
});