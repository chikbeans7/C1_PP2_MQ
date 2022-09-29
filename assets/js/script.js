//For the getUsername function
const txt1 = document.getElementById('uname');
const btn1 = document.getElementById('cont');
const out1 = document.getElementById('output1');

//For the checkScore function
const totalScore = document.getElementById('score');
const btn2 = document.getElementById('finish');
const questions = document.querySelectorAll('.question-area');

//For the changeColor function
let green;
let red;

// Adding event listeners to buttons and quesiton options
btn1.addEventListener('click', getUserName);
btn2.addEventListener('click', checkScore);
for(let i = 0; i < questions.length; i++){
    const hoverDiv = document.querySelectorAll('.inline');
    for(let i = 0; i < hoverDiv.length; i++){
        hoverDiv[i].addEventListener('mouseover',changeColor, true);
        hoverDiv[i].addEventListener('mouseleave',changeColor, true);
        hoverDiv[i].addEventListener('click',changeColor);
    }
}

function changeColor(event){
    //This only executes when the parent element triggers an event
    if(event.target !== event.currentTarget){
        if(event.type === 'mouseover'){
            this.style.backgroundColor === "green" ? green = true: green = false;
            this.style.backgroundColor === "red" ? red = true: red = false;
            this.style.backgroundColor = "white";
            this.style.color = "black";
        }
        else if(event.type === 'mouseleave'){
            if(this.style.backgroundColor === "green"){
            } else if(green === true){
                this.style.backgroundColor = "green";
            } else if(red === true){
                this.style.backgroundColor = "red";
            } else{
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
                this.style.backgroundColor = "green";
            } else{
                options[it].style.backgroundColor = "initial";
                options[it].style.color = "white";
                this.style.backgroundColor = "green";
            }
        }
    }
}

function checkScore(){
    let score = 0;
    for(let i = 0; i < questions.length; i++){
        const answers = questions[i].querySelectorAll('.inline');
        for(let i = 0; i < answers.length; i++){
            let answer = answers[i].firstElementChild;
            if(answers[i].style.backgroundColor === "green"){
                if(answer.className === "correct"){
                    score++;
                    break;
                } else{
                    console.log("incorrect");
                    answers[i].style.backgroundColor = "red";
                }
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
