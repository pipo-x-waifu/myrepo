var navbar_button = document.getElementsByClassName("navbar-toggler-icon");
var navbar_brand = document.getElementsByClassName("navbar-brand");
var profile = document.getElementsByClassName("profile");
var user = "";
var n = 0;

//jika fungsi dipanggip maka variabel user akan ter isi
function save_username() {
    user = prompt("Masukan nama anda!");
}

//jika anda menekan oke maka akan otomatis keluar dari peramban
function keluar() {
    var con = confirm("Apakah kamu ingin keluar?.\nJika jika iya tekan oke");
    var result = (con == true) ? window.close() : save_username();
    return result
}

// mengecek apakah variabel user sudah ter isi atau belum jika sudah akan mengarah ke halaman
// Dan jika belum terisi maka function keluar dipanggil, function tersebut berisi confirmasi apakah user ingin keluar
// atau lanjut jika lanjut maka username harus diisi
if ( user.length < 0 ) {
    keluar()
} else {
    alert("Welcome to my page " + user);
}

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