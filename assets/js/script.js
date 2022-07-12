const txt1 = document.getElementById('uname');
const btn1 = document.getElementById('cont');
const out1 = document.getElementById('output1');

const q1 = document.querySelectorAll('input[name="direcstar"]');
const q2 = document.querySelectorAll('input[name="jord"]');
const q3 = document.querySelectorAll('input[name="toy"]');
const q4 = document.querySelectorAll('input[name="rocky"]');
const q5 = document.querySelectorAll('input[name="djan"]');
const q6 = document.querySelectorAll('input[name="term"]');
const q7 = document.querySelectorAll('input[name="vilstar"]');
const q8 = document.querySelectorAll('input[name="pot1"]');
const q9 = document.querySelectorAll('input[name="pot2"]');
const q10 = document.querySelectorAll('input[name="iron"]');
const totalScore = document.getElementById('score');
const btn2 = document.getElementById('finish');

let counter = 0;

function getUserName(){
    document.getElementById("displayuname").innerHTML = '<h2>Welcome '+uname.value+'!</h2>';
    uname.value = "";    
}

function getScore(){
    let score = 0;
    for(let i=0; i < q1.length; i++){
        if(q1[i].checked){
            if(q1[i].value == 'correct'){
                score++;
            }
            q1[i].checked = false;
            break;
        }
    }
    for(let i=0; i < q2.length; i++){
        if(q2[i].checked){
            if(q2[i].value == 'correct'){
                score++;
            }
            q2[i].checked = false;
            break;
        }
    }
    for(let i=0; i < q3.length; i++){
        if(q3[i].checked){
            if(q3[i].value == 'correct'){
                score++;
            }
            q3[i].checked = false;
            break;
        }
    }
    for(let i=0; i < q4.length; i++){
        if(q4[i].checked){
            if(q4[i].value == 'correct'){
                score++;
            }
            q4[i].checked = false;
            break;
        }
    }
    for(let i=0; i < q5.length; i++){
        if(q5[i].checked){
            if(q5[i].value == 'correct'){
                score++;
            }
            q5[i].checked = false;
            break;
        }
    }
    for(let i=0; i < q6.length; i++){
        if(q6[i].checked){
            if(q6[i].value == 'correct'){
                score++;
            }
            q6[i].checked = false;
            break;
        }
    }
    for(let i=0; i < q7.length; i++){
        if(q7[i].checked){
            if(q7[i].value == 'correct'){
                score++;
            }
            q7[i].checked = false;
            break;
        }
    }
    for(let i=0; i < q8.length; i++){
        if(q8[i].checked){
            if(q8[i].value == 'correct'){
                score++;
            }
            q8[i].checked = false;
            break;
        }
    }
    for(let i=0; i < q9.length; i++){
        if(q9[i].checked){
            if(q9[i].value == 'correct'){
                score++;
            }
            q9[i].checked = false;
            break;
        }
    }
    for(let i=0; i < q10.length; i++){
        if(q10[i].checked){
            if(q10[i].value == 'correct'){
                score++;
            }
            q10[i].checked = false;
            break;
        }
    }
    totalScore.innerHTML = score; 
    let img = document.createElement("img");
    img.src = "assets/images/welldone.png";

    let div = document.getElementById("img-container");
    div.appendChild(img);
}

btn1.addEventListener('click', getUserName);
btn2.addEventListener('click', getScore);
