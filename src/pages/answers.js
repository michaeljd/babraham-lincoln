import React from "react"

import isBrowser from "../utils/is-browser"
import QuizData from "../../content/questions.json"

const AnswersPage = () => {
    const urlParams = new URLSearchParams(isBrowser() ? window.location.search : "");
    const round = Number(urlParams.get("round")) || 1
    const answers = QuizData.slice(20 * (round - 1), 20 * round)

    return <div>
        <ol>
            {answers.map((answer) => {
                return <li key={answer._id}>{answer.question} <strong>{answer.answer}</strong></li>
            })}
        </ol>
    </div>
}

export default AnswersPage