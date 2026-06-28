const LineRegisterButton = document.querySelector("#js-line-register");
window.addEventListener("scroll", function () {
    if (100 < window.scrollY) {
        LineRegisterButton.classList.add("is-show");
    }else{
        LineRegisterButton.classList.remove("is-show");
    }
});