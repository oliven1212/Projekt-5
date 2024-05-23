let errorCount = 0;

function confirmation() {
    errorCount = 0;
    if(document.getElementById("nametext").value==""){
        errorCount++;
        console.log(document.getElementById("errorName").style.display="block");
    } else{
        console.log(document.getElementById("errorName").style.display="none");
    }

    if(document.getElementById("mobiltext").value==""){
        errorCount++;
        console.log(document.getElementById("errorPhone").style.display="block");
    } else{
        console.log(document.getElementById("errorPhone").style.display="none");
    }

    if(errorCount == 0){
        document.getElementById("succesbox").style.display="block";
        document.getElementById("nametext").disabled = true;
        document.getElementById("emailtext").disabled = true;
        document.getElementById("mobiltext").disabled = true;
        document.getElementById("firmatext").disabled = true;
        }
}
