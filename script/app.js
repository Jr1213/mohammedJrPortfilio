// vars
const links = document.querySelectorAll('[href="/"]');
let linkValue = null
const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-items')
// navgtion links
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()
        // @ts-ignore
        linkValue = e.target.getAttribute('data-link')
        clickedSection(linkValue)
        if(navMenu.classList.contains('active')){
            navMenu.classList.remove('active')
        }
    })
})

// go to clicked section
function clickedSection(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    section.scrollIntoView()
}

// open close nav links
menu.addEventListener('click', e => {
    navMenu.classList.add('active')
})