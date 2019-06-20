document.addEventListener("DOMContentLoaded", function(event) {

// Interactive elements
const collapse = document.querySelector("#collapse");
const toggle = document.querySelector("#toggle");
const navElements = document.querySelectorAll("#collapse nav");
const navFocusables = document.querySelectorAll("#collapse nav a"); // All focusable navigation elements
const collapseWidth = 475 // matches SCSS $app-collapse-width variable

// Expand/Collapse menu function
function expandMenu(expand) {
  if(expand) {
    toggle.classList.add("header__collapse-toggle--open"); // Add collapse open CSS class
    collapse.setAttribute("aria-expanded", "true"); // Add ARIA expanded collapse attribute
    navFocusables.forEach(link => link.removeAttribute("aria-hidden")); // Remove ARIA hidden to nav focusable elements to return to tab order
    if(window.innerWidth <= collapseWidth) {
      navElements[0].focus(); // Focus screen reader on first nav
    }
  } else {
    toggle.classList.remove("header__collapse-toggle--open"); // Remove collapse open CSS class
    collapse.setAttribute("aria-expanded", "false"); // Remove ARIA expanded collapse attribute
    navFocusables.forEach(link => link.setAttribute("aria-hidden", "true")); // Add ARIA hidden to nav focusable elements to remove from tab order
  }
}

// Throttled window resize
var resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    if(window.innerWidth > collapseWidth) {
     expandMenu(true); // Ensure menu is expanded for large screens
   }    
  }, 250);
});

// DOM content is loaded
window.addEventListener("DOMContentLoaded", () => {
  toggle.addEventListener("click", () => {
    const expand = !(collapse.getAttribute("aria-expanded") =="true") // Base toggle from current collapse aria state
    expandMenu(expand)
  });
  // expandMenu(expand); // Open menu on load (for testing)
});
});