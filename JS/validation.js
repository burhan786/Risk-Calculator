function Result_High(count_epidem,count_vital,count_lab){
    var total = count_epidem+count_lab+count_vital;
    var res = (total/total_param)*10;
    res = res.toFixed(1);
    var modal = document.getElementsByClassName("modal")[0];
    document.getElementById("span1").innerHTML = count_epidem +" "+" "+ "Parameters Out Of Normal Range";
    document.getElementById("span2").innerHTML = count_vital +" "+" "+ "Parameters Out Of Normal Range";
    document.getElementById("span3").innerHTML = count_lab +" "+" "+ "Parameters Out Of Normal Range";
    console.log("The total number of parameters are high risk:" + total);
    document.getElementById("risk_fact").innerHTML = "Risk Factor is " +" "+res+" "+"on a scale of 1-10";
    document.getElementsByClassName("modal-header")[0].style.backgroundColor = "red";
    document.getElementsByClassName("modal-footer")[0].style.backgroundColor = "red";
    document.getElementById("md").innerHTML = "Patient is at High Risk";
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
    var res = (total/total_param)*10;
    res = res.toFixed(1);
    var modal = document.getElementsByClassName("modal")[0];
    document.getElementById("span1").innerHTML = count_epidem +" "+" "+ "Parameters Out Of Normal Range";
    document.getElementById("span2").innerHTML = count_vital +" "+" "+ "Parameters Out Of Normal Range";
    document.getElementById("span3").innerHTML = count_lab +" "+" "+ "Parameters Out Of Normal Range";
    console.log("The total number of parameters are moderate risk:" + total);
    document.getElementById("risk_fact").innerHTML = "Risk Factor is " +" "+res+" "+"on a scale of 1-10";
    document.getElementsByClassName("modal-header")[0].style.backgroundColor = "orange";
    document.getElementsByClassName("modal-footer")[0].style.backgroundColor = "orange";
    document.getElementById("md").innerHTML = "Patient is at Moderate Risk";
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
function Result_Low(count_epidem,count_vital,count_lab){
    var total = count_epidem+count_lab+count_vital;
    var res = (total/total_param)*10;
    res = res.toFixed(1);
    var modal = document.getElementsByClassName("modal")[0];
    document.getElementById("span1").innerHTML = count_epidem +" "+" "+ "Parameters Out Of Normal Range";
    document.getElementById("span2").innerHTML = count_vital +" "+" "+ "Parameters Out Of Normal Range";
    document.getElementById("span3").innerHTML = count_lab +" "+" "+ "Parameters Out Of Normal Range";
    console.log("The total number of parameters are low risk:" + total);
    document.getElementById("risk_fact").innerHTML = "Risk Factor is " +" "+res+" "+"on a scale of 1-10";
    document.getElementsByClassName("modal-header")[0].style.backgroundColor = "green";
    document.getElementsByClassName("modal-footer")[0].style.backgroundColor = "green";
    document.getElementById("md").innerHTML = "Patient is at Low Risk";
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
    console.log("ct" + ct);
    console.log("apg" + apg);
    if (age == null){
        var z = document.getElementById("sage");
        console.log(z.value);
        document.getElementById("sage").style.visibility = "visible";
    }
    else if(age > 55){
        document.getElementById("ag3").style.borderColor = "red";
        count_epidem+=1;
    }
    if(pd == 1){
        count_epidem+=1;
    }
    if(ckd == 1){
        count_epidem+=1;
    }
    if(dm == 1){
        count_epidem+=1;
    }
    if(htn == 1){
        count_epidem+=1;
    }
    if(hiv == 1){
        count_epidem+=1;
    }
    if(imt == 1){
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
        document.getElementById("sdd").innerHTML = "D Dimer is needed or press N/A";
        document.getElementById("sdd").style.visibility = "visible";
    }
    else if( dd != null && dd > 1){
        count_lab+=1;
    }
    if(cpk == null && cpk_btn == 0){
        document.getElementById("scpk").innerHTML = "CPK is needed or press N/A";
        document.getElementById("scpk").style.visibility = "visible";
    }
    else if(cpk != null && cpk > 400){
        count_lab+=1;
    }
    if(crp == null && crp_btn == 0){
        document.getElementById("scrp").innerHTML = "CRP is needed or press N/A";
        document.getElementById("scrp").style.visibility = "visible";
    }
    else if( crp != null && crp > 100){
        count_lab+=1;
    }
    if(ldh == null && ldh_btn == 0){
        document.getElementById("sldh").innerHTML = "LDH is needed or press N/A";
        document.getElementById("sldh").style.visibility = "visible";
    }
    else if(ldh != null && ldh > 245){
        count_lab+=1;
    }
    if(tr == null && tr_btn == 0){
        document.getElementById("str").innerHTML = "Tropopin is needed or press N/A";
        document.getElementById("str").style.visibility = "visible";
    }
    else if( tr != null && tr > 0.1){
        count_lab+=1;
    }
    if(fr == null && fr_btn == 0){
        document.getElementById("sfr").innerHTML = "Ferritin is needed or press N/A";
        document.getElementById("sfr").style.visibility = "visible";
    }
    else if(fr != null && fr > 500){
        count_lab+=1;
    }
    if(alc == null && alc_btn == 0){
        document.getElementById("salc").innerHTML = "Absolute Lymphocyte Count is needed or press N/A";
        document.getElementById("salc").style.visibility = "visible";
    }
    else if( alc != null && alc < 0.8){
        count_lab+=1;
    }
    if(ct == null && ct_btn == 0){
        document.getElementById("sct").innerHTML = "CT(Corad Score) Count is needed or press N/A";
        document.getElementById("sct").style.visibility = "visible";
    }
    else if( ct != null && ct > 4){
        count_lab+=1;
    }
    if(apg == null && apg_btn == 0){
        document.getElementById("sapg").innerHTML = "APG(P/F Ratio) Count is needed or press N/A";
        document.getElementById("sapg").style.visibility = "visible";
    }
    else if( apg != null && apg < 150){
        count_lab+=1;
    }
    console.log("Parameters in lab findings:" + count_lab);
    var total = count_epidem+count_vital+count_lab;
    console.log("Total Parameters out of Range:" + total);
    console.log("Total Parameters considered : " + total_param);
    var tot_vl = count_lab+count_vital;
    if(age != null){
        if(rr != null){
            if(hr != null){
                if(sp != null){
                    if(dd != null || (dd == null && dd_btn == 1)){
                        if(cpk != null || (cpk == null && cpk_btn == 1)){
                            if(crp != null || (crp == null && crp_btn == 1)){
                                if(ldh != null || (ldh == null && ldh_btn == 1)){
                                    if(tr != null || (tr == null && tr_btn == 1)){
                                        if(fr != null || (fr == null && fr_btn == 1)){
                                            if(alc != null || (alc == null && alc_btn == 1)){
                                                if(ct != null || (ct == null && ct_btn == 1)){
                                                    if(apg != null || (apg == null && apg_btn == 1)){
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
                                                        window.alert("Please Provide APG(P/F) ratio or Press NA");
                                                    }
                                                }else{
                                                    window.alert("Please Provise CT(Corad Score) or Press NA");
                                                }
                                            }else{
                                                window.alert("Plear Provide ALC value or Press NA");
                                            }
                                        }else{
                                            window.alert("Please Provide Ferritin value or Press NA");
                                        }
                                    }else{
                                        window.alert("Please Provide Tropopin value or Press NA");
                                    }
                                }else{
                                    window.alert("Please Provide LDH value or Press NA");
                                }
                            }else{
                                window.alert("Please Provide CRP value or Press NA");
                            }
                        }else{
                            window.alert("Please Provide CPK value or Press NA");
                        }
                    }else{
                        window.alert("Please Provide D Dimer value or Press NA");
                    }
                }else{
                    window.alert("Please Provide Oxygen Saturation value");
                }
            }else{
                window.alert("Please Provide Heart Rate value");
            }
        }else{
            window.alert("Please Provide Respiratory Rate value");
        }
    }else{
        window.alert("Please Provide Age");
    }
}


function newpage(){
    window.location = "index.html";
}
