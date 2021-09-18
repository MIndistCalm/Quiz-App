const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '14',
        c: '20',
        d: '26',
        correct: 'b'
    },{
        question: 'What my favorite programming language?',
        a: 'Java',
        b: 'C++',
        c: 'JS',
        d: 'Python',
        correct: 'c'
    },{
        question: 'Who is the president of USA?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Vladimir Putin',
        correct: 'b'
    },{
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Application Terminals',
        correct: 'a'
    },{
        question: 'What year was JS launched?',
        a: '1996',
        b: '1997',
        c: '1998',
        d: 'none of the above',
        correct: 'd'
    },
];


const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');



let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerHTML = currentQuizData.question;
    
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener('click', () => {
    currentQuiz++;

    currentQuiz < quizData.length ? loadQuiz() : alert("Congratulation!");

    loadQuiz();
})