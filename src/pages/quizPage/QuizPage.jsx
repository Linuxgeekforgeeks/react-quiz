import { useState } from "react"
import "./QuizPage.css"

function QuizPage() {

    const [currentQuestion,setCurrentQuestion]=useState(0)

    const questions = [
        {
            id: 1,
            question: "What is React JS mainly used for?",
            choice: ["Building User Interfaces", "Managing Databases", "Server-side Rendering"],
            answer: "Building User Interfaces"
        },
        {
            id: 2,
            question: "Which of the following is a JavaScript framework?",
            choice: ["React", "Laravel", "Django"],
            answer: "React"
        },
        {
            id: 3,
            question: "What does CSS stand for?",
            choice: ["Cascading Style Sheets", "Central Style Syntax", "Creative Style Setup"],
            answer: "Cascading Style Sheets"
        },
        {
            id: 4,
            question: "Which language is primarily used for backend development?",
            choice: ["Python", "HTML", "CSS"],
            answer: "Python"
        },
        {
            id: 5,
            question: "What is Git used for?",
            choice: ["Version Control", "Image Editing", "Web Hosting"],
            answer: "Version Control"
        }
    ];
    

const handleNext=()=>{

    setCurrentQuestion((prev)=>{
        if(prev<questions.length-1){
            return prev+1
        }

        return prev
    }
    )
}

    return (
        <div className="quiz-page">
            <div className="quiz-container">
            
            
            <h1>QuizPage</h1>
           <div className="question">
            <h1>{questions[currentQuestion].question}</h1>

            <button disabled={currentQuestion===0}>Prev</button> <button onClick={handleNext} disabled={currentQuestion===questions.length-1} >Next</button>
           </div>
            </div>

        </div>
    )
}

export default QuizPage