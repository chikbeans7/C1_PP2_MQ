const txt1 = document.getElementById('uname');
const btn1 = document.getElementById('cont');
const out1 = document.getElementById('output1');

const q1 = document.querySelectorAll('input=[name="direcstar"]');
const q2 = document.querySelectorAll('input=[name="jord"]');
const q3 = document.querySelectorAll('input=[name="toy"]');
const q4 = document.querySelectorAll('input=[name="rocky"]');
const q5 = document.querySelectorAll('input=[name="djan"]');
const q6 = document.querySelectorAll('input=[name="term"]');
const q7 = document.querySelectorAll('input=[name="vilstar"]');
const q8 = document.querySelectorAll('input=[name="pot1"]');
const q9 = document.querySelectorAll('input=[name="pot2"]');
const q10 = document.querySelectorAll('input=[name="iron"]');

function getUserName(){
    out1.innerHTML = txt1.value;
}

btn1.addEventListener('click', getUserName);

