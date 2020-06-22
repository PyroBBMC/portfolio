const form = document.getElementById('contact-form');
const contact = document.querySelector('.contact-link');
const hideForm = document.querySelector('.close');

document.addEventListener("click", function(e){
    if (e.target === contact) {
        form.style.visibility = "visible";
    } else if(e.target === hideForm ){
        form.style.visibility = "hidden";
    }
});
