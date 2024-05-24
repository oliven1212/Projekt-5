const activities = ["Nye produkter","Kabel lab","Installitions ræs","Power flow","Smart Kabelføring", "Effektoptimering"];
const Beskrivelser = ['Her kan du opleve de nyeste innovationer og løsninger inden for branchen. Kom og få førstehåndsinformation, deltag i spændende demonstrationer og stil spørgsmål direkte til vores eksperter.','Her kan du udforske de nyeste fremskridt inden for kabelteknologi. Oplev vores avancerede løsninger, se live demonstrationer, og få indsigt fra vores dygtige eksperter. Kom og bliv inspireret af de seneste innovationer!','Deltag i vores spændende konkurrence og test dine installationsfærdigheder mod andre. Hurtighed, præcision og teknik bliver sat på prøve, og der er fantastiske præmier på spil. Kom og vær med i konkurrencen, og vis hvad du kan!','Udforsk de nyeste trends og teknologier inden for energistrøm og effektstyring. Oplev vores avancerede løsninger, se live demonstrationer, og få værdifuld indsigt fra vores eksperter. Kom og bliv inspireret af fremtidens energiløsninger!','Her kan du opdage de nyeste løsninger inden for intelligent kabelføring og installation. Se banebrydende produkter i aktion, deltag i live demonstrationer, og få ekspertråd om optimering af dine installationer.','Oplev de nyeste teknologier og strategier til at maksimere energieffektivitet og ydeevne. Deltag i interaktive sessioner, få indsigt fra førende specialister, og lær hvordan du kan optimere effektstyringen i dine projekter.'];
const picture = ["installation","installationras","installationrass","præsentation","præsentationr","workshope"];

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
    document.getElementById("activitycardlist").innerHTML += '<div id="card"><img src="pictures/activities/'+picture[i]+'.jpg" alt="billed af '+activities[i]+'"><div><h3>'+activities[i]+'</h3></div><p>'+Beskrivelser[i]+'</p></div>';
}