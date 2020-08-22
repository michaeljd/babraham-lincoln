import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Answers from "../components/answers"
import Question from "../components/question"
import TeamName from "../components/team-name"
import { Form, Button } from "../components/widgets"

import { saveGame, loadGame } from "../utils/memory"
import QuizData from "../../content/questions.json"

const Wrapper = styled('div')`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const Heading = styled('h2')`
    text-align: center;
    font-size: 48px;
    padding: 24px;
    color: #084B83;
`

const ROUND_LENGTH = 20

const EndOfRound = ({ roundNumber, nextRound }) => {
    const submitForm = (evt) => {
        evt.preventDefault();
        nextRound();
    }

    return <Form onSubmit={submitForm}>
        <Heading>End of round {roundNumber}</Heading>

        <Button>Start round {roundNumber + 1}</Button>
    </Form>
}

const Quiz = () => {
    const storedGame = loadGame()
    const [teamName, setTeamName] = useState(storedGame.teamName || "")
    const [answers, setAnswers] = useState(storedGame.answers || [])
    const [questionNumber, setQuestionNumber] = useState(answers.length)
    const [roundNumber, setRoundNumber] = useState(Math.ceil((questionNumber + 1) / ROUND_LENGTH))
    const endOfRound = (questionNumber + 1) > roundNumber * ROUND_LENGTH

    const currentQuestion = QuizData[questionNumber]
    const answerQuestion = (answer) => {
        const newAnswers = [...answers]
        newAnswers.splice(questionNumber, 1, { answer, question: currentQuestion.question })
        setAnswers(newAnswers)
    }

    useEffect(() => {
        saveGame({ teamName, answers })
        setQuestionNumber(answers.length)
    }, [teamName, answers])

    const nextRound = () => {
        setRoundNumber(roundNumber + 1)
    }

    return (
        <Layout>
            <SEO title={`Question ${questionNumber + 1}`} />

            {
                teamName.length === 0 ?
                    <TeamName value={teamName} update={setTeamName} />
                    :
                    <Wrapper>
                        { endOfRound ? <EndOfRound roundNumber={roundNumber} nextRound={nextRound} /> :
                            <Question questionNumber={questionNumber} question={currentQuestion} submit={answerQuestion} />
                        }
                        <Answers teamName={teamName} answers={answers} changeQuestion={setQuestionNumber} />
                    </Wrapper>
            }
        </Layout>
    )
}

export default Quiz
