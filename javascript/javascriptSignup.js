const text = ["nametext","mobiltext"];
const error = ["errorName","errorPhone"];
let errorCount = 0;

function confirmation() {
    
    errorCount = 0;     //sætter errorCount til 0

    for (let i = 0; i < text.length; i = i+1) 
    {
        if(document.getElementById(text[i]).value == "")
        {
            errorCount++;
            document.getElementById(error[i]).style.display="block";
        }else
        {
            document.getElementById(error[i]).style.display="none";
        }
    }

    if(errorCount == 0){
        document.getElementById("succesbox").style.display="block";
        
        const ids = ["nametext","emailtext","mobiltext","firmatext"];
        for (let i = 0; i < ids.length; i++) {
            document.getElementById(ids[i]).disabled = true;
        }
    }
}
