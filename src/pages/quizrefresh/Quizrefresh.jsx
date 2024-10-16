
import { useState } from "react"
import "./Quizrefresh.css"
function Quizrefresh() {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [userAnswer, setUserAnswers] = useState([])
    console.log(userAnswer)
    const questions = [
        {
            id: 1,
            question: "What is React JS used for?",
            choices: ["Building User Interfaces", "Managing Databases", "Styling Web Pages"],
            answer: "Building User Interfaces"
        },
        {
            id: 2,
            question: "What does HTML stand for?",
            choices: ["HyperText Markup Language", "HighText Machine Language", "Hyperlinking Text Method Language"],
            answer: "HyperText Markup Language"
        },
        {
            id: 3,
            question: "Which of the following is a backend language?",
            choices: ["Python", "CSS", "HTML"],
            answer: "Python"
        },
        {
            id: 4,
            question: "What is the purpose of CSS?",
            choices: ["Styling web pages", "Building a backend", "Creating databases"],
            answer: "Styling web pages"
        },
        {
            id: 5,
            question: "Which of these is a JavaScript framework?",
            choices: ["React", "Django", "Flask"],
            answer: "React"
        },
        {
            id: 6,
            question: "What does SQL stand for?",
            choices: ["Structured Query Language", "Sequential Query Language", "Server Query Language"],
            answer: "Structured Query Language"
        },
        {
            id: 7,
            question: "Which of these is a NoSQL database?",
            choices: ["MongoDB", "MySQL", "PostgreSQL"],
            answer: "MongoDB"
        }
    ];


    const handleChoice = (questionId,selected) => {
        console.log("SElected Answer", selected)
        console.log("SElected Answer", questionId)  


        setUserAnswers(prev=>{ 
            
            
            
              return [...prev, { questionId, selectedAnswer: selected }];
    })}

    const handlePrev = () => {
        setCurrentQuestion(prev => {
            if (prev > 0) {
                return prev - 1
            }

            return prev
        })
    }
    const handleNext = () => {

        setCurrentQuestion(prev => {
            if (prev < questions.length - 1) {
                return prev + 1
            }
            return prev
        })

    }


    return (
        <div className="quiz-refresh">

            <h1>Quiz Questions</h1>
            <div className="quiz-div">
                <h1>{questions[currentQuestion].question}</h1>

                <div className="choices">
                    {questions[currentQuestion].choices.map((option, index) => {
                        return <button key={index} onClick={() => handleChoice(questions[currentQuestion].id, option)}>{option}</button>
                    })}
                </div>

                <div>

                    <button onClick={handlePrev} disabled={currentQuestion === 0}>Prev</button>
                    <button onClick={handleNext} disabled={currentQuestion === questions.length - 1}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Quizrefresh