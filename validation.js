function Result_High(count_epidem,count_vital,count_lab){
    var total = count_epidem+count_lab+count_vital;
    var modal = document.getElementById("myModal");
    document.getElementById("span1").innerHTML = count_epidem +" "+" "+ "Parameters Crossed Limit";
    document.getElementById("span2").innerHTML = count_vital +" "+" "+ "Parameters Crossed Limit";
    document.getElementById("span3").innerHTML = count_lab +" "+" "+ "Parameters Crossed Limit";
    console.log("The total number of parameters are high risk:" + total);
    document.getElementById("risk_fact").innerHTML = "Risk Factor is " + total + " "+"out of" +" "+ "17";
    modal.style.display = "block";
    var sspan = document.getElementsByClassName("close")[0];
    sspan.onclick = function(){
        modal.style.display = "none";
    }
    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = "none";
        }
    }
}
function Result_Moderate(count_epidem,count_vital,count_lab){
    var total = count_epidem+count_lab+count_vital;
    var modal = document.getElementById("myModal2");
    document.getElementById("smspan1").innerHTML = count_epidem +" "+" "+ "Parameters Crossed Limit";
    document.getElementById("smspan2").innerHTML = count_vital +" "+" "+ "Parameters Crossed Limit";
    document.getElementById("smspan3").innerHTML = count_lab +" "+" "+ "Parameters Crossed Limit";
    console.log("The total number of parameters are Moderate Risk:" + total);
    document.getElementById("rismsk_fact").innerHTML = "Risk Factor is " + total +" "+ "out of" +" "+ "17";
    modal.style.display = "block";
    var smspan = document.getElementsByClassName("close2")[0];
    smspan.onclick = function(){
        modal.style.display = "none";
    }
    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = "none";
        }
    }
}
function Result_Low(count_epidem,count_vital,count_lab){
    var total = count_epidem+count_lab+count_vital;
    var modal1 = document.getElementById("myModal1");
    document.getElementById("sspan1").innerHTML = count_epidem + " "+" "+"Parameters Crossed Limit";
    document.getElementById("sspan2").innerHTML = count_vital +" "+" " +"Parameters Crossed Limit";
    document.getElementById("sspan3").innerHTML = count_lab +" "+ " "+ "Parameters Crossed Limit";
    console.log("The total number of parameters are low risk:" + total);
    document.getElementById("rissk_fact").innerHTML = "Risk Factor is " + total +" "+ "out of" +" "+ "17";
    modal1.style.display = "block";
    var sspan1 = document.getElementsByClassName("close1")[0];
    sspan1.onclick = function(){
        modal1.style.display = "none";
    }
    window.onclick = function(event){
        if(event.target == modal1){
            modal1.style.display = "none";
        }
    }
}

function checkParam(){
    var count_epidem = 0,count_vital = 0,count_lab = 0;
    console.log("AGE:" + age);
    console.log("respiratory rate:"+ rr);
    console.log("heart rate" + hr)
    console.log("supply of o2" + sp);
    console.log("D Dimer:" + dd);
    console.log("CPK:" + cpk);
    console.log("CRP:" + crp);
    console.log("LDH:" + ldh);
    console.log("TROPOPIN:" + tr);
    console.log("FERRITIN:" + fr);
    console.log("alc" + alc);
    if (age == null){
        var z = document.getElementById("sage");
        console.log(z.value);
        document.getElementById("sage").style.visibility = "visible";
    }
    else if(age > 55){
        document.getElementById("ag3").style.borderColor = "red";
        count_epidem+=1;
    }
    if(pd == -1){
        document.getElementById("spul").style.visibility = "visible";
    }
    else if(pd == 1){
        count_epidem+=1;
    }
    if(ckd == -1){
        document.getElementById("sckd").style.visibility = "visible";
    }
    else if(ckd == 1){
        count_epidem+=1;
    }
    if(dm == -1){
        document.getElementById("sdm").style.visibility = "visible";
    }
    else if(dm == 1){
        count_epidem+=1;
    }
    if(htn == -1){
        document.getElementById("shtn").style.visibility = "visible";
    }
    else if(htn == 1){
        count_epidem+=1;
    }
    if(hiv == -1){
        document.getElementById("shiv").style.visibility = "visible";
    }
    else if(hiv == 1){
        count_epidem+=1;
    }
    if(imt == -1){
        document.getElementById("simt").style.visibility = "visible";
    }
    else if(imt == 1){
        count_epidem+=1;
    }
    console.log("Parameters in epidem" + count_epidem);
    if(rr == null){
        document.getElementById("srr").style.visibility = "visible";
    }
    else if(rr > 24){
        count_vital+=1;
    }
    if(hr == null){
        document.getElementById("shr").style.visibility = "visible";
    }
    else if(hr > 125){
        count_vital+=1;
    }
    if(sp == null){
        document.getElementById("sspo").style.visibility = "visible";
    }
    else if(sp < 94){
        count_vital+=1;
    }
    console.log("Parameters in vitals" + count_vital);
    if(dd == null && dd_btn == 0){
        document.getElementById("sdd").style.visibility = "visible";
    }
    else if(dd > 1){
        count_lab+=1;
    }
    if(cpk == null){
        document.getElementById("scpk").style.visibility = "visible";
    }
    else if(cpk > 400){
        count_lab+=1;
    }
    if(crp == null){
        document.getElementById("scrp").style.visibility = "visible";
    }
    else if(crp > 100){
        count_lab+=1;
    }
    if(ldh == null){
        document.getElementById("sldh").style.visibility = "visible";
    }
    else if(ldh > 245){
        count_lab+=1;
    }
    if(tr == null){
        document.getElementById("str").style.visibility = "visible";
    }
    else if(tr > 0.1){
        count_lab+=1;
    }
    if(fr == null){
        document.getElementById("sfr").style.visibility = "visible";
    }
    else if(fr > 500){
        count_lab+=1;
    }
    if(alc == null){
        document.getElementById("salc").style.visibility = "visible";
    }
    else if(alc < 0.8){
        count_lab+=1;
    }
    console.log("Parameters in lab findings:" + count_lab);
    var total = count_epidem+count_vital+count_lab;
    var tot_vl = count_lab+count_vital;
    if(age != null && pd != -1 && ckd != -1 && dm != -1 && htn != -1 && hiv != -1 && imt != -1 && rr != null && hr != null && sp != null && dd != null && cpk != null && crp != null && ldh != null && tr != null && fr != null && alc != null){
        if(count_epidem > 0 && count_vital > 0 && count_lab > 0){
            Result_High(count_epidem,count_vital,count_lab);
        }else if(tot_vl == 2 && count_lab != 0 && count_vital != 0){
            Result_Moderate(count_epidem,count_vital,count_lab);
        }else if (tot_vl >= 2){
            Result_High(count_epidem,count_vital,count_lab);
        }else if(count_epidem > 0 && (count_lab == 1 || count_vital == 1)){
            Result_Moderate(count_epidem,count_vital,count_lab);
        }
        else if (total < 2 || (count_epidem > 0 && count_lab == 0 && count_vital == 0)){
            Result_Low(count_epidem,count_vital,count_lab);
        }
    }else{
        window.alert("Please Enter complete details for the calculation")
    }
}
function newpage(){
    window.location = "index.html";
}
