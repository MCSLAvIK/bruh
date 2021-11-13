$(window).on('scroll', (e) => {
    if (window.scrollY > 50) {
        document.getElementsByClassName("header")[0].classList.add("downed");
    } else {
        document.getElementsByClassName("header")[0].classList.remove("downed");
    }
})