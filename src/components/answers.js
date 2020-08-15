import React from "react"

import { resetGame } from "../utils/memory"

const Answer = ({ question, answer, onClick }) => {
    return (
        <li>{question} <strong>{answer}</strong> <button onClick={onClick}>change</button></li>
    )
}

const Answers = ({ teamName, answers, changeQuestion }) => {
    return (
          <div>
            <strong>{teamName}</strong>
            <ol>
                {Object.keys(answers).map((id) => <Answer key={id} {...answers[id]} onClick={() => changeQuestion(id)} />)}
            </ol>
            <button onClick={resetGame}>Reset</button>
          </div>
    )
}

export default Answers