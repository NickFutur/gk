// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault()

//         const blockID = anchor.getAttribute('href').substr(1)

//         document.getElementById(blockID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//     })
// }


const header = document.querySelector('.header');
const first = document.querySelector('.header-block');
const headerHeight = header.offsetHeight;
const firstHeight = first.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    if (scrollDistance > lastScrollTop) {
        header.classList.remove('header-sticky');
    } else {
        header.classList.add('header-sticky');
    }

    if (scrollDistance === 0) {
        header.classList.remove('header-sticky');
    }

    lastScrollTop = scrollDistance;
});



const navMenu = document.querySelector(".mob-menu");
const hamburger = document.querySelector(".mobile-navigation")
const closeBtn = document.querySelector(".close-btn")
const menu_items = document.querySelectorAll('.mob-text-link');


hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    // document.body.style.position = "fixed";
})

closeBtn.addEventListener("click", () => {
    // document.body.style.position = "relative";
    navMenu.classList.toggle("active");
})

menu_items.forEach(item => {
    item.addEventListener('click', function() {
        navMenu.classList.toggle("active");
        // document.body.style.position = "relative";
    })
})