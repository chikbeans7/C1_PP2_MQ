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
    let answer;
    let score = 0;
    for(let i=0; i < q1.length; i++){
        if(q1[i].checked){
            answer = q1[i].value;
            break;
        }
    }
    totalScore.innerHTML = answer; 
}

btn1.addEventListener('click', getUserName);
btn2.addEventListener('click', getScore);
