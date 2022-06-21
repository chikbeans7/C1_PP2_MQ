const txt1 = document.getElementById('uname')
const btn1 = document.getElementById('cont')
const out1 = document.getElementById('output1')

function getUserName(){
    out1.innerHTML = txt1.value;
}

btn1.addEventListener('click', getUserName)