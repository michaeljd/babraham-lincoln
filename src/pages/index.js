import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Answers from "../components/answers"

import { saveGame, loadGame } from "../utils/memory"
import QuizData from "../../content/questions.json"

const TeamName = ({ value, update }) => {
    const [teamName, setTeamName] = useState(value)

    const onSubmit = (evt) => {
        evt.preventDefault()
        update(teamName)
    }
    return (<form onSubmit={onSubmit}>
        <label>
            What's your team name?!?
            <input value={teamName} onChange={(evt) => setTeamName(evt.target.value)} />
        </label>
        <button>YES that's us</button>
    </form>)
}

const Question = ({ question, submit }) => {
    const [answer, updateAnswer] = useState("")
    useEffect(() => updateAnswer(""), [question])

    const onChange = (evt) => updateAnswer(evt.target.value)
    const onSubmit = (evt) => {
        evt.preventDefault()
        submit(answer)
    }

    return <form onSubmit={onSubmit}>
        <div>
            <label>
                {question}
                <input value={answer} onChange={onChange} />
            </label>
            <button>That's my answer!</button>
        </div>
    </form>
}

const Quiz = () => {
    const storedGame = loadGame()
    const [teamName, setTeamName] = useState(storedGame.teamName || "")
    const [answers, setAnswers] = useState(storedGame.answers || [])
    const [questionNumber, setQuestionNumber] = useState(answers.length)

    const currentQuestion = QuizData[questionNumber]
    const answerQuestion = (answer) => {
        const newAnswers = [...answers]
        newAnswers.splice(questionNumber, 1, { answer, question: currentQuestion.question })
        setAnswers(newAnswers)
        setQuestionNumber(newAnswers.length)
    }
    useEffect(() => {
        saveGame({ teamName, answers })
    }, [teamName, answers])

    return (
        <Layout>
            <SEO title="Quiz" />

            {
                teamName.length === 0 ?
                    <TeamName value={teamName} update={setTeamName} />
                    :
                    <div>
                        <Question question={currentQuestion.question} submit={answerQuestion} />
                        <Answers teamName={teamName} answers={answers} changeQuestion={setQuestionNumber} />
                    </div>
            }
        </Layout>
    )
}

export default Quiz
