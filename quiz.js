const questions=[
    {
        question:"who is president of India?",
        answers:[
            {text:"pranab mukarjee" , correct:false},
            {text:"Narendra Modi" , correct:false},
            {text:"Pawan Kalyan" , correct:false},
            {text:"Drawpathi murmu" , correct:true}
        ]
    },
    {
    question:"which is the largest continent?",
        answers:[
            {text:"Africa" , correct:false},
            {text:"Asia" , correct:true},
            {text:"Europe" , correct:false},
            {text:"Antartica" , correct:false}
        ]
    },
    {
        question:"who found sea route to India?",
            answers:[
                {text:"Coloumbus" , correct:true},
                {text:"Ramya" , correct:false},
                {text:"Leonadro Da vinci" , correct:false},
                {text:"None of the above" , correct:false}
            ]
    },
    {
            question:"who is the first prime minister of pakisthan?",
                answers:[
                    {text:"Ankitha" , correct:false},
                    {text:"Sweety" , correct:false},
                    {text:"Aparanji" , correct:false},
                    {text:"None of the above" , correct:true}
                ]
    }
]

let questionele=document.getElementById("question");
let ans_butt=document.getElementById("ans_button");
let next=document.getElementById("nxt_button");

let curr_ques=0;
let score=0;

function startQuiz(){
    curr_ques=0;
    score=0;
    next.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let current_question=questions[curr_ques];
    let q_no=curr_ques+1;
    questionele.innerHTML=q_no+"."+ current_question.question;

    current_question.answers.forEach(answer=>{
        const  button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        ans_butt.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);


    });
} 
function resetState(){
     next.style.display="none";
    while(ans_butt.firstChild)
    {
        ans_butt.removeChild(ans_butt.firstChild);
    }
}
function selectAnswer(e){
   const selection=e.target;
   const isCorrect=selection.dataset.correct==="true";
   if(isCorrect){
    selection.classList.add("correct");
    score++;
   }
   else{
    selection.classList.add("incorrect");
   }
   Array.from(ans_butt.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
    button.disabled=true;
   });
   next.style.display="block";
}

function showScore(){
    resetState();
    questionele.innerHTML=`your score ${score} out of ${questions.length}!`;
    next.innerHTML="Play Again";
    next.style.display="block";
}
function  handleNextButton(){
    curr_ques++;
    if(curr_ques<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
next.addEventListener("click",()=>{
    if(curr_ques<questions.length){
       handleNextButton();
    }
    else{
        startQuiz();
    }
});
 startQuiz();