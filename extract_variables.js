var age,pd = -1,ckd = -1,dm = -1,htn = -1,hiv = -1,imt = -1;

var rr,hr,sp;

var dd,cpk,crp,ldh,tr,fr,alc;

var dd_btn = 0,cpk_btn = 0,crp_btn = 0,ldh_btn = 0,tr_btn = 0,fr_btn = 0,alc_btn = 0;
var total_param = 17;

function NA_DD(){
    dd_btn = 1;
    total_param-=1;
    document.getElementById("btn_dd").style.backgroundColor = 'yellow';
}
function NA_CRP(){
    crp_btn = 1;
    total_param-=1;
    document.getElementById("btn_crp").style.backgroundColor = 'yellow';
}
function NA_CPK(){
    cpk_btn = 1;
    total_param-=1;
    document.getElementById("btn_cpk").style.backgroundColor = 'yellow';
}
function NA_LDH(){
    ldh_btn = 1;
    total_param-=1;
    document.getElementById("btn_ldh").style.backgroundColor = 'yellow';
}
function NA_TR(){
    tr_btn = 1;
    total_param-=1;
    document.getElementById("btn_tr").style.backgroundColor = 'yellow';
}
function NA_FR(){
    fr_btn = 1;
    total_param-=1;
    document.getElementById("btn_fr").style.backgroundColor = 'yellow';
}
function NA_ALC(){
    alc_btn = 1;
    total_param-=1;
    document.getElementById("btn_alc").style.backgroundColor = 'yellow';
}
function yesPulmo() {
    pd = 1;
    document.getElementById("btn1").style.backgroundColor = "red";
    document.getElementById("btn2").style.backgroundColor = "#e7e7e7";
    console.log(pd);
}
function noPulmo(){
    pd = 0;
    document.getElementById("btn2").style.backgroundColor = "green";
    document.getElementById("btn1").style.backgroundColor = "#e7e7e7";
    console.log(pd);
}
function yesCKD(){
    ckd = 1;
    document.getElementById("btn4").style.backgroundColor = "#e7e7e7";
    document.getElementById("btn3").style.backgroundColor = "red";
    console.log(ckd);
}
function noCKD(){
    ckd = 0;
    document.getElementById("btn3").style.backgroundColor = "#e7e7e7";
    document.getElementById("btn4").style.backgroundColor = "green";
    console.log(ckd);
}
function yesDM() {
    dm = 1;
    document.getElementById("btn5").style.backgroundColor = "red";
    document.getElementById("btn6").style.backgroundColor = "#e7e7e7";
    console.log(dm);
}
function noDM(){
    dm = 0;
    document.getElementById("btn5").style.backgroundColor = "#e7e7e7";
    document.getElementById("btn6").style.backgroundColor = "green";
    console.log(dm);
}
function yesHTN(){
    htn = 1;
    document.getElementById("btn7").style.backgroundColor = "red";
    document.getElementById("btn8").style.backgroundColor = "#e7e7e7";
    console.log(htn);
}
function noHTN(){
    htn = 0;
    document.getElementById("btn7").style.backgroundColor = "#e7e7e7";
    document.getElementById("btn8").style.backgroundColor = "green";
    console.log(htn);
}
function yesHIV(){
    hiv = 1;
    document.getElementById("btn9").style.backgroundColor = "red";
    document.getElementById("btn10").style.backgroundColor = "#e7e7e7";
    console.log(hiv);
}
function noHIV(){
    hiv = 0;
    document.getElementById("btn10").style.backgroundColor = "green";
    document.getElementById("btn9").style.backgroundColor = "#e7e7e7";
    console.log(hiv);
}
function yesImt(){
    imt = 1;
    document.getElementById("btn11").style.backgroundColor = "red";
    document.getElementById("btn12").style.backgroundColor = "#e7e7e7";
    console.log(imt);
}
function noImt(){
    imt = 0;
    document.getElementById("btn12").style.backgroundColor = "green";
    document.getElementById("btn11").style.backgroundColor = "#e7e7e7";
    console.log(imt);
}
function checkRR(){
    rr = document.getElementById("rr").value;
    console.log("respiratory rate check:" + rr);
    if(rr > 24){
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
    if(dd > 1){
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
    age = document.getElementById("ag3").value;
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
    window.location = "Calculator.html";
}