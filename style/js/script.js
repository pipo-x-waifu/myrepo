const test = async () => {
  let welcomeUser = document.getElementById('welcomeUser');
  try {
    const response = await fetch("http://127.0.0.1:7777/");
    const result = await response.json();
    
    welcomeUser.classList.toggle("d-none");
    result.text.map(v => {
      welcomeUser.innerHTML += v;
      setTimeout(() => {
        // 
        }, 500);
    });
  } catch(err) {
    welcomeUser.classList.toggle("d-none");
    welcomeUser.innerHTML = err;
  }
}

const indeks = () => {
  let n = 0;
  let navbar_button = document.getElementsByClassName("navbar-toggler-icon");
  let navbar_brand = document.getElementsByClassName("navbar-brand");
  let profile = document.getElementsByClassName("profile");
  
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
}
