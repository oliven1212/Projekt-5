let gallerylist = ["elkon","jyskebank","vindmøller","vr"];
let position = 0;
function forward (){
    if(position<gallerylist.length-1){
        position++;    
        document.getElementById("gallery").style.backgroundImage = "url(pictures/index/"+gallerylist[position]+".jpg)";
    }else{
        position = 0;
        document.getElementById("gallery").style.backgroundImage = "url(pictures/index/"+gallerylist[position]+".jpg)";
    }
}
function backward (){
    if(position>0){
        position--;    
        document.getElementById("gallery").style.backgroundImage = "url(pictures/index/"+gallerylist[position]+".jpg)";
    }else{
        position = gallerylist.length-1;
        document.getElementById("gallery").style.backgroundImage = "url(pictures/index/"+gallerylist[position]+".jpg)";
    }
    }