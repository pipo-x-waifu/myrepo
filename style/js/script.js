var navbar_button = document.getElementsByClassName("navbar-toggler-icon");
var navbar_brand = document.getElementsByClassName("navbar-brand");
var profile = document.getElementsByClassName("profile");
var user = "";
var n = 0;

// untuk mengisi variabel user
function save_username() {
    user = prompt("Masukan nama anda!")
}

function confirm_keluar() {
    if(confirm("Ulangi tekan oke")){
        home();
    } else {
        window.close();
    }
}

// Memanggil Memanggil fungsi home()
// Mengecek apakah variabel user sudah ter isi atau belum jika sudah akan mengarah ke halaman index
// Jika belum ada isi maka akan keluar dari halaman

function home() {
    save_username()
    if ( user ) {
        alert("Welcome to my page " + user);
        // menulis ke element p dengan id welcomeUser
        document.getElementById("welcomeUser").innerText ="Selamat datang " + user + " semoga harimu baik baik saja";
        // menambahkan dan menghapus class pada element
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
    } else {
        setTimeout(() => {
            confirm_keluar()
        }, 500);
        alert("Nama diperlukan!");
    }
}
home()