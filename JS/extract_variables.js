var age,pd = 0,ckd = 0,dm = 0,htn = 0,hiv = 0,imt = 0,cpd = 1,cckd = 1,cdm = 1,chtn = 1,chiv = 1,cimt = 1;

var rr,hr,sp;

var dd,cpk,crp,ldh,tr,fr,alc,ct,apg;

var dd_btn = 0,cpk_btn = 0,crp_btn = 0,ldh_btn = 0,tr_btn = 0,fr_btn = 0,alc_btn = 0,ct_btn = 0,apg_btn = 0;
var total_param = 19;

var count_dd=1,count_crp=1,count_cpk=1,count_ldh=1,count_tr=1,count_fr=1,count_alc=1,count_ct = 1,count_apg = 1;

function NA_DD(){
    if(count_dd<2){
        count_dd++;
        dd_btn = 1;
        total_param-=1;
        document.getElementById("btn_dd").style.backgroundColor = 'yellow';
    }else{
        count_dd = 1;
        total_param++;
        dd_btn = 0;
        document.getElementById("btn_dd").style.backgroundColor = '#e7e7e7';
    }
}
function NA_CRP(){
    if(count_crp<2){
        count_crp++;
        crp_btn = 1;
        total_param-=1;
        document.getElementById("btn_crp").style.backgroundColor = 'yellow';
    }else{
        count_crp = 1;
        total_param++;
        crp_btn = 0;
        document.getElementById("btn_crp").style.backgroundColor = '#e7e7e7';
    }
}
function NA_CPK(){
    if(count_cpk<2){
        count_cpk++;
        cpk_btn = 1;
        total_param-=1;
        document.getElementById("btn_cpk").style.backgroundColor = 'yellow';
    }else{
        count_cpk = 1;
        total_param++;
        cpk_btn = 0;
        document.getElementById("btn_cpk").style.backgroundColor = '#e7e7e7';
    }
}
function NA_LDH(){
    if(count_ldh<2){
        count_ldh++;
        ldh_btn = 1;
        total_param-=1;
        document.getElementById("btn_ldh").style.backgroundColor = 'yellow';
    }else{
        count_ldh = 0;
        total_param++;
        ldh_btn = 0;
        document.getElementById("btn_ldh").style.backgroundColor = '#e7e7e7';
    }
}
function NA_TR(){
    if(count_tr<2){
        count_tr++;
        tr_btn = 1;
        total_param-=1;
        document.getElementById("btn_tr").style.backgroundColor = 'yellow';
    }else{
        count_tr = 1;
        total_param++;
        tr_btn = 0;
        document.getElementById("btn_tr").style.backgroundColor = '#e7e7e7';
    }
}
function NA_FR(){
    if(count_fr<2){
        count_fr++;
        fr_btn = 1;
        total_param-=1;
        document.getElementById("btn_fr").style.backgroundColor = 'yellow';
    }else{
        count_fr = 1;
        total_param++;
        fr_btn = 0;
        document.getElementById("btn_fr").style.backgroundColor = '#e7e7e7';
    }
}
function NA_ALC(){
    if(count_alc<2){
        count_alc++;
        alc_btn = 1;
        total_param-=1;
        document.getElementById("btn_alc").style.backgroundColor = 'yellow';
    }else{
        count_alc = 1;
        total_param++;
        alc_btn = 0;
        document.getElementById("btn_alc").style.backgroundColor = '#e7e7e7';
    }
  
}
function NA_CT(){
    if(count_ct<2){
        count_ct++;
        ct_btn = 1;
        total_param-=1;
        document.getElementById("btn_ct").style.backgroundColor = 'yellow';
    }else{
        count_ct = 1;
        total_param++;
        ct_btn = 0;
        document.getElementById("btn_ct").style.backgroundColor = '#e7e7e7';
    }
  
}
function NA_APG(){
    if(count_apg<2){
        count_apg++;
        apg_btn = 1;
        total_param-=1;
        document.getElementById("btn_apg").style.backgroundColor = 'yellow';
    }else{
        count_apg = 1;
        total_param++;
        apg_btn = 0;
        document.getElementById("btn_apg").style.backgroundColor = '#e7e7e7';
    }
  
}
function checkPD(){
    if(cpd < 2){
        cpd++;
        pd = 1;
    }else{
        cpd = 1;
        pd = 0;
    }
    console.log("pd: " + pd);
}
function checkCKD(){
    if(cckd < 2){
        cckd++;
        ckd = 1;
    }else{
        cckd = 1;
        ckd = 0;
    }
    console.log("ckd: " + ckd);
}
function checkDM(){
    if(cdm < 2){
        cdm++;
        dm = 1;
    }else{
        cdm = 1;
        dm = 0;
    }
    console.log("dm: " + dm);
}
function checkHTN(){
    if(chtn < 2){
        chtn++;
        htn = 1;
    }else{
        chtn = 1;
        htn = 0;
    }
    console.log("htn: " + htn);
}
function checkHIV(){
    if(chiv < 2){
        chiv++;
        hiv = 1;
    }else{
        chiv = 1;
        hiv = 0;
    }
    console.log("hiv: " + hiv);
}
function checkIMT(){
    if(cimt < 2){
        cimt++;
        imt = 1;
    }else{
        cimt = 1;
        imt = 0;
    }
    console.log("imt: " + imt);
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
function checkCT(){
    ct = document.getElementById("ct").value;
    if(ct > 4){
        document.getElementById("ct").style.borderColor = "red";
    }else{
        document.getElementById("ct").style.borderColor = "black";
    }
}
function checkAPG(){
    apg = document.getElementById("apg").value;
    if(apg < 150){
        document.getElementById("apg").style.borderColor = "red";
    }else{
        document.getElementById("apg").style.borderColor = "black";
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
    window.location = "index.html";
}