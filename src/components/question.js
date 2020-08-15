import React, { useState, useEffect } from "react"

const Question = ({ questionNumber, question, submit }) => {
    const [answer, updateAnswer] = useState("")
    useEffect(() => updateAnswer(""), [question])

    const onChange = (evt) => updateAnswer(evt.target.value)
    const onSubmit = (evt) => {
        evt.preventDefault()
        submit(answer)
    }

    return <form onSubmit={onSubmit}>
        <h1>Question {questionNumber + 1}</h1>
        <label>
            {question}
            <input value={answer} onChange={onChange} />
        </label>
        <button>That's my answer!</button>
    </form>
}

export default Question