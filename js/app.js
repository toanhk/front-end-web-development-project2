/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const navList = document.querySelector("#navbar__list");
const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");
const section4 = document.querySelector("#section4");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
for (let i = 0; i < 4; i++) {
  let menuItem = document.createElement("li");

  //create link
  let a = document.createElement("a");
  let link = document.createTextNode(`Section ${i + 1}`);
  a.appendChild(link);
  a.href = `#section${i + 1}`;
  a.className = "menu__link";

  menuItem.appendChild(a);

  navList.appendChild(menuItem);
}

// Add class 'active' to section when near top of viewport
function makeActive() {
  const sections = [section1, section2, section3, section4];

  for (const section of sections) {
    //section.classList.remove("your-active-class");
    const box = section.getBoundingClientRect();
    // You can play with the values in the "if" condition to further make it more accurate.
    if (box.top <= 150 && box.bottom >= 150) {
      // Apply active state on the current section and the corresponding Nav link.
      section.classList.add("your-active-class");

      //this.parentNode.classList.add('active');
    } else {
      // Remove active state from other section and corresponding Nav link.
      section.classList.remove("your-active-class");
    }

    
  }
}

// Scroll to anchor ID using scrollTO event
// document.addEventListener();
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
document.addEventListener("scroll", function () {
  makeActive();
});
// Set sections as active

const links = document.querySelectorAll(".menu__link");

for (const link of links) {
  link.addEventListener("click", function () {
    let current = document.querySelector(".active");
    if (current) current.classList.remove("active");

    //link.classList.add("active");
    this.parentNode.classList.add("active");
  });
}
