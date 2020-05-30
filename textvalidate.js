var rr,hr,sp;
var dd,cpk,crp,ldh,tr,fr,alc;

function checkRR(){
    rr = document.getElementById("rr").value;
    console.log("respiratory rate check:" + rr);
    if(rr > 25){
        document.getElementById("rr").style.borderColor = "red";
    }
}
function checkHR(){
    hr = document.getElementById("hr").value;
    if(hr > 125){
        document.getElementById("hr").style.borderColor = "red";
    }
}
function checkSP(){
    sp = document.getElementById("sp").value;
    if(sp > 90){
        document.getElementById("sp").style.borderColor = "red";
    }
}
function checkDD(){
    dd = document.getElementById("dd").value;
    if(dd > 1000){
        document.getElementById("dd").style.borderColor = "red";
    }
}
function checkCPK(){
    cpk = document.getElementById("cpk").value;
    if(cpk > 400){
        document.getElementById("cpk").style.borderColor = "red";
    }
}
function checkCRP(){
    crp = document.getElementById("crp").value;
    if(crp > 100){
        document.getElementById("crp").style.borderColor = "red";
    }
}
function checkLDH(){
    ldh = document.getElementById("ldh").value;
    if(ldh > 245){
        document.getElementById("ldh").style.borderColor = "red";
    }
}
function checkTR(){
    tr = document.getElementById("tr").value;
    if(tr > 0.1){
        document.getElementById("tr").style.borderColor = "red";
    }
}
function checkFR(){
    fr = document.getElementById("fr").value;
    if(fr > 500){
        document.getElementById("fr").style.borderColor = "red";
    }
}
function checkALC(){
    alc = document.getElementById("alc").value;
    if(alc < 0.8){
        document.getElementById("alc").style.borderColor = "red";
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
    }
}
function newpage(){
    window.location = "index.html";
}