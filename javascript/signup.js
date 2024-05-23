function confirmation() {
if(document.getElementById("nametext").value==""){
    console.log(document.getElementById("errorName").style.display="block");
} else{
    console.log(document.getElementById("errorName").style.display="none");
}

if(document.getElementById("mobiltext").value=="")
    {console.log(document.getElementById("mobiltext").value);
    console.log(document.getElementById("errorPhone").style.display="block");
} else{
    console.log(document.getElementById("errorPhone").style.display="none");
}
if(document.getElementById("firmatext").value=="")
    {console.log(document.getElementById("emailtext").value);
}

}
