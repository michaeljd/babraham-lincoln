import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { Form, Label, Input, Button } from "./widgets"

const QuestionNumber = styled("h1")`
    color: #084B83;
`

const Question = ({ questionNumber, question, submit }) => {
    const [answer, updateAnswer] = useState("")
    const questionText = question.question;
    useEffect(() => updateAnswer(""), [questionText])

    const onChange = (evt) => updateAnswer(evt.target.value)
    const onSubmit = (evt) => {
        evt.preventDefault()
        submit(answer)
    }

    return <Form onSubmit={onSubmit}>
        <QuestionNumber>Question {questionNumber + 1}</QuestionNumber>
        <Label>{questionText}</Label>
        <Input value={answer} onChange={onChange} />
        <Button disabled={answer.length === 0}>That's my answer!</Button>
    </Form>
}

export default Question
