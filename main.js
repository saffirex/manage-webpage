const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav= document.querySelector(".primary-navigation");

const primaryHeader = document.querySelector(".primary-header");
// navToggle.addEventListener('click', ()=>{
//     primaryNav.classList.toggle('opened');
// })

// primaryNav ko classlist ma opened bhanni class thapdinxa so the opened property of css applies there. would work with around line 365 ko .opened property in css file

navToggle.addEventListener('click', ()=>{
    primaryNav.toggleAttribute("toggled-as-visible");
    primaryNav.hasAttribute("toggled-as-visible")? navToggle.setAttribute("aria-expanded", true) : navToggle.setAttribute("aria-expanded",false);
    primaryHeader.toggleAttribute('fullpage-gradient-overlay');
})