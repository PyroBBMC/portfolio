document.querySelector('.contact-link').addEventListener("click", function(){
    document.getElementById('contact-form').style.visibility = "visible";
});

document.querySelector('.close').addEventListener("click", function(){
    document.getElementById('contact-form').style.visibility = "hidden";
});
