var age,pd = -1,ckd = -1,dm = -1,htn = -1,hiv = -1,imt = -1;

var rr,hr,sp;

var dd,cpk,crp,ldh,tr,fr,alc;

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

function checkParam(){
    var count_epidem = 0,count_vital = 0,count_lab = 0;
    age = document.getElementById("ag3").value;
    console.log("AGE:" + age);
    rr = document.getElementById("rr").value;
    console.log("respiratory rate:"+ rr);
    hr = document.getElementById("hr").value;
    console.log("heart rate" + hr)
    sp = document.getElementById("sp").value;
    console.log("supply of o2" + sp);
    dd = document.getElementById("dd").value;
    console.log("D Dimer:" + dd);
    cpk = document.getElementById("cpk").value;
    console.log("CPK:" + cpk);
    crp = document.getElementById("crp").value;
    console.log("CRP:" + crp);
    ldh = document.getElementById("ldh").value;
    console.log("LDH:" + ldh);
    tr = document.getElementById("tr").value;
    console.log("TROPOPIN:" + tr);
    fr = document.getElementById("fr").value;
    console.log("FERRITIN:" + fr);
    alc = document.getElementById("alc").value;
    console.log("alc" + alc);
    if (age.length == 0){
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
    if(rr.length == 0){
        document.getElementById("srr").style.visibility = "visible";
    }
    else if(rr > 24){
        count_vital+=1;
    }
    if(hr.length == 0){
        document.getElementById("shr").style.visibility = "visible";
    }
    else if(hr > 125){
        count_vital+=1;
    }
    if(sp.length == 0){
        document.getElementById("sspo").style.visibility = "visible";
    }
    else if(sp > 90){
        count_vital+=1;
    }
    console.log("Parameters in vitals" + count_vital);
    if(dd.length == 0){
        document.getElementById("sdd").style.visibility = "visible";
    }
    else if(dd > 1000){
        count_lab+=1;
    }
    if(cpk.length == 0){
        document.getElementById("scpk").style.visibility = "visible";
    }
    else if(cpk > 400){
        count_lab+=1;
    }
    if(crp.length == 0){
        document.getElementById("scrp").style.visibility = "visible";
    }
    else if(crp > 100){
        count_lab+=1;
    }
    if(ldh.length == 0){
        document.getElementById("sldh").style.visibility = "visible";
    }
    else if(ldh > 245){
        count_lab+=1;
    }
    if(tr.length == 0){
        document.getElementById("str").style.visibility = "visible";
    }
    else if(tr > 0.1){
        count_lab+=1;
    }
    if(fr.length == 0){
        document.getElementById("sfr").style.visibility = "visible";
    }
    else if(fr > 500){
        count_lab+=1;
    }
    if(alc.length == 0){
        document.getElementById("salc").style.visibility = "visible";
    }
    else if(alc < 0.8){
        count_lab+=1;
    }
    console.log("Parameters in lab findings:" + count_lab);
    var total = count_epidem+count_vital+count_lab;
    var tot_vl = count_lab+count_vital;
    if(age.length != 0 && pd != -1 && ckd != -1 && dm != -1 && htn != -1 && hiv != -1 && imt != -1 && rr.length != 0 && hr.length != 0 && sp.length != 0 && dd.length != 0 && cpk.length != 0 && crp.length != 0 && ldh.length != 0 && tr.length != 0 && fr.length != 0 && alc.length != 0){
        if(count_epidem > 0 && count_vital > 0 && count_lab > 0){
           var modal = document.getElementById("myModal");
           document.getElementById("span1").innerHTML = count_epidem +" "+" "+ "Parameters Crossed Limit";
           document.getElementById("span2").innerHTML = count_vital +" "+" "+ "Parameters Crossed Limit";
           document.getElementById("span3").innerHTML = count_lab +" "+" "+ "Parameters Crossed Limit";
           console.log("The total number of parameters are high risk:" + total);
           document.getElementById("risk_fact").innerHTML = "Risk Factor is " + total + "/" + "17";
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
        }else if(tot_vl == 2 && count_lab != 0 && count_vital != 0){
            var modal = document.getElementById("myModal2");
            document.getElementById("smspan1").innerHTML = count_epidem +" "+" "+ "Parameters Crossed Limit";
            document.getElementById("smspan2").innerHTML = count_vital +" "+" "+ "Parameters Crossed Limit";
            document.getElementById("smspan3").innerHTML = count_lab +" "+" "+ "Parameters Crossed Limit";
            console.log("The total number of parameters are high risk:" + total);
            document.getElementById("rismsk_fact").innerHTML = "Risk Factor is " + total + "/" + "17";
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
        }else if (tot_vl >= 2 || tot_vl >= 2 && (count_lab == 0 || count_vital == 0)){
            var modal = document.getElementById("myModal");
            document.getElementById("span1").innerHTML = count_epidem +" "+" "+ "Parameters Crossed Limit";
            document.getElementById("span2").innerHTML = count_vital +" "+" "+ "Parameters Crossed Limit";
            document.getElementById("span3").innerHTML = count_lab +" "+" "+ "Parameters Crossed Limit";
            console.log("The total number of parameters are high risk:" + total);
            document.getElementById("risk_fact").innerHTML = "Risk Factor is " + total + "/" + "17";
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
        else if (total < 2){
            var modal1 = document.getElementById("myModal1");
            document.getElementById("sspan1").innerHTML = count_epidem + " "+" "+"Parameters Crossed Limit";
            document.getElementById("sspan2").innerHTML = count_vital +" "+" " +"Parameters Crossed Limit";
            document.getElementById("sspan3").innerHTML = count_lab +" "+ " "+ "Parameters Crossed Limit";
            console.log("The total number of parameters are low risk:" + total);
            document.getElementById("rissk_fact").innerHTML = "Risk Factor is " + total + "/" + "17";
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
    }else{
        window.alert("Please Enter complete details for the calculation")
    }
}
function newpage(){
    window.location = "index.html";
}
