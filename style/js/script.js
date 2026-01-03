const test = () => {
  let welcomeUser = document.getElementById('welcomeUser');
  fetch("http://127.0.0.1:7777/test", {method: "GET", header: {"Content-Type":"application/json"} })
    .then(response => {
      alert(response.status);
      return response.json()
      })
    .then(response => {
      welcomeUser.classList.toggle("d-none");
      response.text.map(v => {
        welcomeUser.innerHTML += v;
        setTimeout(() => {
        console.log(" ");
        }, 500);
      });
    })
    .catch(err => {
      welcomeUser.classList.toggle("d-none");
      welcomeUser.innerHTML = err;
    });
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

