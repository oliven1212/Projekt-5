const activities = ["Nye produkter","Kabel lab","Installations ræs","Power flow","Smart Kabelføring", "Effektoptimering"];
const beskrivelser = ["Oplev nyeste innovationer og løsninger. Få førstehåndsinformation, deltag i demonstrationer og stil spørgsmål til vores eksperter.","Udforsk de nyeste fremskridt i kabelteknologi. Se live demonstrationer, få indsigt fra eksperter og bliv inspireret af de seneste innovationer.","Deltag i vores konkurrence og test dine installationsfærdigheder. Hurtighed, præcision og teknik sættes på prøve med fantastiske præmier på spil. Kom og vis, hvad du kan!","Udforsk de nyeste trends inden for energistrøm og effektstyring. Se live demonstrationer, få indsigt fra eksperter og bliv inspireret af fremtidens energiløsninger","Her kan du opdage de nyeste løsninger inden for intelligent kabelføring og installation. Se banebrydende produkter i aktion, deltag i live demonstrationer, og få ekspertråd om optimering af dine installationer.","Oplev nye teknologier og strategier til at maksimere energieffektivitet. Deltag i interaktive sessioner, få indsigt fra specialister, og lær at optimere effektstyring i dine projekter."];
const picture = ["præsentation","installationras","installationrass","præsentationr","installation","workshope"];

let column = 1;
for (let i = 0; i < activities.length; i++) {
    document.getElementById("column"+column).innerHTML += '<input type="checkbox" onclick="update('+i+')" id="checkbox0"><label>'+activities[i]+'</label><br>';
    document.getElementById("innermap").innerHTML += '<div id="highlight'+i+'" style="grid-area: A'+i+';"></div>';
    document.getElementById("highlight"+i).style.display = "none";
        if(column == 1){
            column = 2;
        }else {
            column = 1;
        }
}
function update (id){
    if(document.getElementById("highlight"+id).style.display == "none"){
        document.getElementById("highlight"+id).style.display = "block";
    }else {
        document.getElementById("highlight"+id).style.display = "none";
    }
}

for (let i = 0; i < activities.length; i++) {
    document.getElementById("activitycardlist").innerHTML += '<div id="card"><div><img src="pictures/activities/'+picture[i]+'.jpg" alt="billed af '+activities[i]+'"></div><div id="text"><h2>'+activities[i]+'</h2><p>'+beskrivelser[i]+'<p><div></div>';
}