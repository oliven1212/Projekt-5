const activities = ["Nye produkter","Kabel lab","Installations ræs","Power flow","Smart Kabelføring", "Effektoptimering", "Teknologisk Skattejagt","Den lille elektriker"];
const beskrivelser = ["Oplev nyeste innovationer og løsninger. Få førstehåndsinformation, deltag i demonstrationer og stil spørgsmål til vores eksperter.","Udforsk de nyeste fremskridt i kabelteknologi. Se live demonstrationer, få indsigt fra eksperter og bliv inspireret af de seneste innovationer.","Deltag i vores konkurrence og test dine installationsfærdigheder. Hurtighed, præcision og teknik sættes på prøve med fantastiske præmier på spil. Kom og vis, hvad du kan!","Udforsk de nyeste trends inden for energistrøm og effektstyring. Se live demonstrationer, få indsigt fra eksperter og bliv inspireret af fremtidens energiløsninger","Her kan du opdage de nyeste løsninger inden for intelligent kabelføring og installation. Se banebrydende produkter i aktion, deltag i live demonstrationer, og få ekspertråd om optimering af dine installationer.","Oplev nye teknologier og strategier til at maksimere energieffektivitet. Deltag i interaktive sessioner, få indsigt fra specialister, og lær at optimere effektstyring i dine projekter.","Tag dine børn med på en spændende teknologisk skattejagt, hvor de samler stempler ved hver bod. Når alle stempler er samlet, får de en præmie. En sjov og lærerig måde at introducere dem til teknologi og ingeniørarbejde.","Børnene lærer om elektriske kredsløb ved at bygge simple lyskredsløb og små elektroniske enheder. ELKONs eksperter guider dem gennem projekterne og giver indblik i elektrikerens arbejde i hverdagen."];
const picture = ["præsentation","installationras","installationrass","præsentationr","installation","workshope","jagt","lilleElektriker"];

let column = 1;
for (let i = 0; i < activities.length; i++) {
    document.getElementById("column"+column).innerHTML += '<input type="checkbox" onclick="update('+i+')" id="checkbox'+i+'"><label>'+activities[i]+'</label><br>';
    document.getElementById("innermap").innerHTML += '<a id="highlight'+i+'" onclick="update('+i+')" class="stand" style="grid-area: A'+i+';"><p>A'+i+'</p></a>';
    document.getElementById("highlight"+i).style.boxShadow = "none";

        if(column == 1){
            column = 2;
        }else {
            column = 1;
        }
}
function update (id){
    if(document.getElementById("highlight"+id).style.boxShadow == "none"){
        document.getElementById("highlight"+id).style.boxShadow = "0px 0px 10px #30b3eb";
        document.getElementById("checkbox"+id).checked = true;
        document.getElementById("card"+id).style.boxShadow = "0px 0px 40px #008cff"
    }else {
        document.getElementById("highlight"+id).style.boxShadow = "none";
        document.getElementById("checkbox"+id).checked = false;
        document.getElementById("card"+id).style.boxShadow = "none";
    }
}

for (let i = 0; i < activities.length; i++) {
    document.getElementById("activitycardlist").innerHTML += '<div id="card'+i+'" class="card"><div><img src="pictures/activities/'+picture[i]+'.jpg" alt="billed af '+activities[i]+'"></div><div id="text"><h2>'+activities[i]+'</h2><p>'+beskrivelser[i]+'<p><div></div>';
    document.getElementById("card"+i).style.boxShadow = "none";
}