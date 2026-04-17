var navbar_button = document.getElementsByClassName("navbar-toggler-icon");
var navbar_brand = document.getElementsByClassName("navbar-brand");
var nav_link = document.getElementsByClassName("nav-link");
let popup_text_yes = document.querySelector(".popup-text-yes");
let popup_text_no = document.querySelector(".popup-text-no");
let popup = document.querySelector(".popup");
var n = 0;
l

navbar_button[0].addEventListener('click', () => {
    n+=1;
    if ( n == 1 ){
        navbar_brand[0].classList.remove("act")
        navbar_brand[0].classList.toggle("none");
    } else if ( n == 2 ) {
        navbar_brand[0].classList.remove("none");
        navbar_brand[0].classList.toggle("act");
        n = 0;
    }
});

function navHover(n) {
    if (n == nav_link.length) return
    nav_link[n].addEventListener('mouseover', () => {
        let res = nav_link[n].innerText;
        console.log(res)
        if (res != "About") {
            document.getElementsByClassName("nav-item")[1].classList.remove("active");
            nav_link[n].addEventListener("mouseout", () => {
                
                document.getElementsByClassName("nav-item")[1].classList.toggle("active");
            });
        }
        
        return navHover(n + 1)
    });
}
navHover(0);


popup_text_yes.addEventListener("click", function(){
     document.querySelector("container").style.display = "block";
});

popup_text_no.addEventListener("click", function(){
    window.close();
});

