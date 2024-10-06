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

const routes = {
    '/' : `<h1>Welcome to dashboard</h1>`,
    '/courses' : `<h1>Welcome to courses</h1>`,
    '/students' : `<h1>Just for code</h1>`,
    '/settings' : `<h1>Welcome to settings</h1>`
}

const notFound = `
    <div class="not-found">
        <h1>404</h1>
        <p>Oops! The page you're looking for dosen't exist</p>
        <button>Go to Dashboard</button>
    </div>
`

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

// load the initial routes
window.onhashchange= () => {
    handleRouteChanges()
}