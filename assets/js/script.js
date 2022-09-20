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
        if(this.style.backgroundColor === "green"){
            green = true;
        } else{
            green = false;
        }
        this.style.backgroundColor = "white";
        this.style.color = "black";
    }
    else if(event.type === 'mouseleave'){
        if(this.style.backgroundColor === "green"){
            green = true;
            this.style.backgroundColor = "green";
        }else if(green === true){
            this.style.backgroundColor = "green";
        }else{
            this.style.backgroundColor = "initial";
            this.style.color = "white";
        }
    }
    else if(event.type === 'click'){
        if(this.style.backgroundColor !== "green"){
            for(let i = 0; i < questions.length; i++){
                const answers = questions[i].querySelectorAll('.inline');
                for(let i = 0; i < answers.length; i++){
                    let box = answers[i];
                    if(box.style.backgroundColor === "green"){
                        let x = 1;
                        break;
                    }
                }
            }
        }
    }
}

function testFun(){
    let score = 0;
    for(let i = 0; i < questions.length; i++){
        const answers = questions[i].querySelectorAll('.inline');
        for(let i = 0; i < answers.length; i++){
            let box = answers[i].children;
            if(box[1].checked && (box[1].value === "correct")){
                score++;
                console.log(box[1].value);
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
