function lvalidate(){
    var pnm = document.getElementById("pname").value;
    console.log("Patient Name:" + pnm);
    var paid = document.getElementById("pid").value;
    console.log("Patient Id" + paid);
    if(pnm.length  == 0){
        document.getElementById("spnm").style.visibility = "visible";
        window.alert("Please Enter the patient name");
    }
    if(paid.length == 0){
        document.getElementById("ptid").style.visibility = "visible";
        window.alert("Please Enter the patient id");
    } 
    if(pnm.length != 0 && paid.length != 0){
        window.location = "Calculator.html";
    }
}