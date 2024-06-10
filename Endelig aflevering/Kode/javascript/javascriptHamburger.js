const names = ["Forside","Tilmeld","Aktiviteter","Kontakt"];
const links = ["index","signup","activities","contact"];

for (let i = 0; i <names.length; i++){
    document.getElementById("myLinks").innerHTML += '<a href="'+links[i]+'.html"><p>'+names[i]+'</p></a>';
}
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
