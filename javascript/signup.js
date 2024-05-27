const text = ["nametext","mobiltext"];
const error = ["errorName","errorPhone"];
let errorCount = 0;

function confirmation() {
    
    errorCount = 0;

    for (let i = 0; i < text.length; i++) 
    {
        if(document.getElementById(text[i]).value=="")
        {
            errorCount++;
            console.log(document.getElementById(error[i]).style.display="block");
        }else
        {
            console.log(document.getElementById(error[i]).style.display="none");
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
