//For the getUsername function
const txt1 = document.getElementById('uname');
const btn1 = document.getElementById('cont');
const out1 = document.getElementById('output1');

//Collects all the data from the question radio buttons
const questions = document.getElementsByClassName("question-area");
const answers = document.getElementsByClassName("inline");
const totalScore = document.getElementById('score');
const btn2 = document.getElementById('finish');

let counter = 0;

//displays username on button click event
function getUserName(){
    document.getElementById("displayuname").innerHTML = '<h2>Welcome '+uname.value+'!</h2>';
    uname.value = "";    
}


function getScore(){
    let score = 0;

    //Loops through each questions array of radio buttons and sees if they are checked and if it is the correct answer
    for(let i=0; i < questions.length; i++){
        for(let i of answers){
            let button = answers[i].childen;
            if(button[1].checked){
                if(button[1].value === 'correct'){
                    score++;
                    break;
                }
            }
        }
    }

    // Displays the score and adds a well done image to the bottom of the screen
    totalScore.innerHTML = score; 
    let img = document.createElement("img");
    img.src = "assets/images/welldone.png";

    if(counter < 1){
        let div = document.getElementById("img-container");
        div.appendChild(img);
    }
    counter++;
}

// Button event listener for the 2 buttons
btn1.addEventListener('click', getUserName);
btn2.addEventListener('click', getScore);
