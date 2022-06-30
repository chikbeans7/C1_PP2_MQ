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

function getUserName(){
    out1.innerHTML = txt1.value;
}

function getScore(){
    let score = 0;
    for(let i=0; i < q1.length; i++){
        if(q1[i].checked && q1[i].value == 'correct'){
            score++;
            break;
        }
    }
    for(let i=0; i < q2.length; i++){
        if(q2[i].checked && q2[i].value == 'correct'){
            score++;
            break;
        }
    }
    for(let i=0; i < q3.length; i++){
        if(q3[i].checked && q3[i].value == 'correct'){
            score++;
            break;
        }
    }
    for(let i=0; i < q4.length; i++){
        if(q4[i].checked && q4[i].value == 'correct'){
            score++;
            break;
        }
    }
    for(let i=0; i < q5.length; i++){
        if(q5[i].checked && q5[i].value == 'correct'){
            score++;
            break;
        }
    }
    for(let i=0; i < q6.length; i++){
        if(q6[i].checked && q6[i].value == 'correct'){
            score++;
            break;
        }
    }
    for(let i=0; i < q7.length; i++){
        if(q7[i].checked && q7[i].value == 'correct'){
            score++;
            break;
        }
    }
    for(let i=0; i < q8.length; i++){
        if(q8[i].checked && q8[i].value == 'correct'){
            score++;
            break;
        }
    }
    for(let i=0; i < q9.length; i++){
        if(q9[i].checked && q9[i].value == 'correct'){
            score++;
            break;
        }
    }
    for(let i=0; i < q10.length; i++){
        if(q10[i].checked && q10[i].value == 'correct'){
            score++;
            break;
        }
    }
    totalScore.innerHTML = score; 
}

btn1.addEventListener('click', getUserName);
btn2.addEventListener('click', getScore);
