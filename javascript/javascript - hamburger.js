function burgerShow() {
    let x = document.getElementById("myLinks");
    let hamburger = document.querySelector('.hamburger');
    if (x.style.display === "block") {
        x.style.display = "none";
        hamburger.classList.remove('show-menu');
    } else {
        x.style.display = "block";
        hamburger.classList.add('show-menu');
    }
}