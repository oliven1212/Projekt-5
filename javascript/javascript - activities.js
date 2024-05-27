const activities = ["Nye produkter","Kabel lab","Installations ræs","Power flow","Smart Kabelføring", "Effektoptimering"];
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
    document.getElementById("activitycardlist").innerHTML += '<div id="card"><div><img src="pictures/activities/'+picture[i]+'.jpg" alt="billed af '+activities[i]+'"></div><h2>'+activities[i]+'</h2></div>';
}