//For the getUsername function
const txt1 = document.getElementById('uname');
const btn1 = document.getElementById('cont');
const out1 = document.getElementById('output1');

//Collects all the data from the question radio buttons
const totalScore = document.getElementById('score');
const btn2 = document.getElementById('finish');
const questions = document.querySelectorAll('.question-area');

let counter = 0;
let green = false;

// Button event listener for the 2 buttons
btn1.addEventListener('click', getUserName);
btn2.addEventListener('click', testFun);

for(let i = 0; i < questions.length; i++){
    const hoverDiv = questions[i].querySelectorAll('.inline');
    for(let i = 0; i < hoverDiv.length; i++){
        hoverDiv[i].addEventListener('mouseover',changeColor);
        hoverDiv[i].addEventListener('mouseleave',changeColor);
        hoverDiv[i].addEventListener('click',changeColor);
    }
}

function changeColor(event){
    if(event.type === 'mouseover'){
        this.style.backgroundColor = "white";
        this.style.color = "black";
    }
    else if(event.type === 'mouseleave'){
        if(this.className !== "select"){
            this.style.backgroundColor = "initial";
            this.style.color = "white";
        }
    }
    else if(event.type === 'click'){
        let it = 0;
        let x = 0;
        let currentQuestion = this.parentElement;
        let options = currentQuestion.children;
        for(let i = 0; i < options.length; i++){
            if(options[i].style.backgroundColor !== "green"){
                continue;
            } else{
                it = i;
                x = 1;
                break;
            }
        }
        if(x !== 1){
            this.classList.add = "select";
        } else{
            options[it].style.backgroundColor = "initial"
            options[it].style.color = "white"
            this.style.backgroundColor = "select";
        }
        
    }
    
}

function testFun(){
    let score = 0;
    for(let i = 0; i < questions.length; i++){
        const answers = questions[i].querySelectorAll('.inline');
        for(let i = 0; i < answers.length; i++){
            let answer = answers[i].firstElementChild;
            if((answers[i].style.backgroundColor === "green") && (answer.className === "correct")){
                score++;
                break;
            }
        }
    }
    totalScore.innerHTML = score; 
}

//displays username on button click event
function getUserName(){
    document.getElementById("displayuname").innerHTML = '<h2>Welcome '+uname.value+'!</h2>';
    uname.value = "";    
}
