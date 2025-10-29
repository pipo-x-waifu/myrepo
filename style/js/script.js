var navbar_button = document.getElementsByClassName("navbar-toggler-icon");
var navbar_brand = document.getElementsByClassName("navbar-brand");
var profile = document.getElementsByClassName("profile");
var n = 0;

navbar_button[0].addEventListener('click', () => {
    n+=1;
    if ( n == 1 ){
        navbar_brand[0].classList.remove("act")
        navbar_brand[0].classList.toggle("none");
        profile[0].style.display = "block";
    } else if ( n == 2 ) {
        navbar_brand[0].classList.remove("none");
        navbar_brand[0].classList.toggle("act");
        profile[0].style.display = "none";
        n = 0;
    }
});