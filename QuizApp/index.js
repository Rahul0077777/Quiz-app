const quizData = [{
    question: "Which of the following is a client site language?",
    'a': "Java",
    'b': "C",
    'c': "Python",
    'd': "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];
 let index=0;
 const quesBox= document.getElementById("quesBox");
 const optionInput = document.querySelectorAll(".option");
const loadQuestion = ()=>{
     const data =quizData[index];
    //  console.log(data);
     quesBox.innerText= `${index+1}) ${data.question}`;
     optionInput[0].nextElementSibling.innerText=data.a;
     optionInput[1].nextElementSibling.innerText=data.b;

     optionInput[2].nextElementSibling.innerText=data.c;
     optionInput[3].nextElementSibling.innerText=data.d;
 const submitQuiz = ()=>{
    const ans=getnswe();
 }

 const getnswe=()=>{
    optionInput.forEach
 }
}

loadQuestion();