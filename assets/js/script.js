//For the getUsername function
const txt1 = document.getElementById('uname');
const btn1 = document.getElementById('cont');
const out1 = document.getElementById('output1');

//Collects all the data from the question radio buttons
const totalScore = document.getElementById('score');
const btn2 = document.getElementById('finish');

let counter = 0;

// Button event listener for the 2 buttons
btn1.addEventListener('click', getUserName);
btn2.addEventListener('click', testFun);

function testFun(){
    let score = 0;
    const questions = document.querySelectorAll('.question-area');
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

/* function getScore(){
    
    let score = 0;
    //Loops through each questions array of radio buttons and sees if they are checked and if it is the correct answer
    for(let i=0; i < questions.length; i++){
        const current = questions[i];
        const answers = current.querySelectorAll('.inline');
        for(let i of answers){
            let answer = answers.querySelectorAll
            if(answer.checked){
                if(button[1].value === 'correct'){
                    score++;
                    break;
                }
            }
        }
    } */

   /*  // Displays the score and adds a well done image to the bottom of the screen
    
    let img = document.createElement("img");
    img.src = "assets/images/welldone.png";

    if(counter < 1){
        let div = document.getElementById("img-container");
        div.appendChild(img);
    }
    counter++;
} */
