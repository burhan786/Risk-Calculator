var rr,hr,sp;
var dd,cpk,crp,ldh,tr,fr,alc;

function checkRR(){
    rr = document.getElementById("rr").value;
    console.log("respiratory rate check:" + rr);
    if(rr > 25){
        document.getElementById("rr").style.borderColor = "red";
    }else{
        document.getElementById("rr").style.borderColor = "black";
    }
}
function checkHR(){
    hr = document.getElementById("hr").value;
    if(hr > 125){
        document.getElementById("hr").style.borderColor = "red";
    }else{
        document.getElementById("hr").style.borderColor = "black";
    }
}
function checkSP(){
    sp = document.getElementById("sp").value;
    if(sp < 94){
        document.getElementById("sp").style.borderColor = "red";
    }else{
        document.getElementById("sp").style.borderColor = "black";        
    }
}
function checkDD(){
    dd = document.getElementById("dd").value;
    if(dd > 1000){
        document.getElementById("dd").style.borderColor = "red";
    }else{
        document.getElementById("dd").style.borderColor = "black";
    }
}
function checkCPK(){
    cpk = document.getElementById("cpk").value;
    if(cpk > 400){
        document.getElementById("cpk").style.borderColor = "red";
    }else{
        document.getElementById("cpk").style.borderColor = "black";
    }
}
function checkCRP(){
    crp = document.getElementById("crp").value;
    if(crp > 100){
        document.getElementById("crp").style.borderColor = "red";
    }else{
        document.getElementById("crp").style.borderColor = "black";
    }
}
function checkLDH(){
    ldh = document.getElementById("ldh").value;
    if(ldh > 245){
        document.getElementById("ldh").style.borderColor = "red";
    }else{
        document.getElementById("ldh").style.borderColor = "black";
    }
}
function checkTR(){
    tr = document.getElementById("tr").value;
    if(tr > 0.1){
        document.getElementById("tr").style.borderColor = "red";
    }else{
        document.getElementById("tr").style.borderColor = "black";
    }
}
function checkFR(){
    fr = document.getElementById("fr").value;
    if(fr > 500){
        document.getElementById("fr").style.borderColor = "red";
    }else{
        document.getElementById("fr").style.borderColor = "black";
    }
}
function checkALC(){
    alc = document.getElementById("alc").value;
    if(alc < 0.8){
        document.getElementById("alc").style.borderColor = "red";
    }else{
        document.getElementById("alc").style.borderColor = "black";
    }
}
function checkAGE(){
    var age = document.getElementById("ag3").value;
    console.log("age check parameters:" + age);
    if(age.length < 1){
        document.getElementById("ag3").style.borderColor = "blue";
    } 
    if(age > 55){
        document.getElementById("ag3").style.borderColor = "red";
    }else{
        document.getElementById("ag3").style.borderColor = "black";    
    }
}
function newpage(){
    window.location = "index.html";
}