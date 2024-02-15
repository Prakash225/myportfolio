$(document).ready(function () {

    // on click add/remove active class on navigation
    $('#header li a').click(function () {
        $('#header li').removeClass("active");
        $(this).parent().addClass("active");
        $('li a').removeClass("active");
        $(this).addClass("active");

        // if ($(window).width() <= 767) {
        //     $("header ul").slideToggle();
        // }
    });


});



// Top Navigation Code

function toggleMenu() {
    let menuIcon = document.getElementById('toggleIcon');
    menuIcon.classList.toggle('active');
    // alert('toggleMenu');
}


// Top Navigation Hover Code
// const marker = document.querySelector('#marker');
// const item = document.querySelectorAll('#toggleIcon ul li a');

// function indicator(e) {
//     marker.style.left = e.offsetLeft + 'px';
//     marker.style.width = e.offsetWidth + 'px';
// }
// item.forEach(link => {
//     link.addEventListener('mousemove', (e) => {
//         indicator(e.target);
//     })
// });



// menu
// alert('test');
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

[openMenuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
        menu.classList.toggle("open");
        menu.style.transition = "transform 0.5s ease";
    });
});

menu.addEventListener("transitionend", function(){
    this.removeAttribute("style");
});

menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
    arrow.addEventListener("click", function(){
        this.closest(".dropdown").classList.toggle("active");
    });
});