const prevBtn = document.querySelector("section.portfolio .container .work .prev");
const nextBtn = document.querySelector("section.portfolio .container .work .next");
const portfolioItems = document.querySelectorAll("section.portfolio .container .work .parent");

let currentActive = 0;

nextBtn.addEventListener("click", nextItem);
prevBtn.addEventListener("click", prevItem);

function nextItem() {
    currentActive++
    portfolioItems[currentActive].classList.add("active");
    update();
}

function prevItem() {
    portfolioItems[currentActive].classList.remove("active");
    currentActive--
    update();
}

function update() {
    // update currentActive value 
    currentActive = currentActive;

    // able or disable prevBtn if :
    if (currentActive > 0) {
        prevBtn.classList.remove("disable")
    } else if (currentActive <= 0) {
        prevBtn.classList.add("disable")
    }
    
    // able or disable nextBtn if :
    if (currentActive === portfolioItems.length - 1) {
        nextBtn.classList.add("disable")
    } else {
        nextBtn.classList.remove("disable")
    }
}


// update the website year dynamic
const websiteYear = document.querySelector("footer .container .right-footer .website-year");
const dynamicYear = new Date().getFullYear();
websiteYear.innerHTML = dynamicYear;

// add burger icon to show and hide nav menu
const burgerIcon = document.querySelector("header .container nav .burger");
const navMenu = document.querySelector("header .container nav .nav-menu");
const navMenuLis = [...document.querySelectorAll("header .container nav ul li")];

burgerIcon.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
})

navMenuLis.forEach(li => {
    const link = [...li.children][0];
    link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    })
})

