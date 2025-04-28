// 1) Bring in Toggle Buttons using query selector all property
// 2)Loop through node list (forEach)
// 3)Add Click event (AddEventListener)
// 4)Toggle the active class on the parent node
// (parent node & classList.toggle())


const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(ele => {
    ele.addEventListener('click', () => {
    ele.parentNode.classList.toggle('active')
    })
})