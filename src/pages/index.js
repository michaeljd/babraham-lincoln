import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Answers from "../components/answers"
import Question from "../components/question"
import TeamName from "../components/team-name"
import EndOfRound from "../components/end-of-round"

import { saveGame, loadGame } from "../utils/memory"
import QuizData from "../../content/questions.json"
import isBrowser from "../utils/is-browser"

const QuizWrapper = styled('div')`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const ROUND_LENGTH = 20

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
        setQuestionNumber(questionNumber + 1)
    }

    useEffect(() => {
        saveGame({ teamName, answers })
    }, [teamName, answers])

    useEffect(() => {
        if (isBrowser()) window.scrollTo(0, 0)
    }, [questionNumber])

    const nextRound = () => setRoundNumber(roundNumber + 1)

    return (
        <Layout>
            <SEO title={`Question ${questionNumber + 1}`} />

            {
                teamName.length === 0 ?
                    <TeamName value={teamName} update={setTeamName} />
                    :
                endOfRound ?
                    <EndOfRound answers={answers.slice((roundNumber-1) * ROUND_LENGTH)} roundNumber={roundNumber} nextRound={nextRound} />
                    :
                    <QuizWrapper>
                        <Question questionNumber={questionNumber} question={currentQuestion} submit={answerQuestion} />
                        <Answers teamName={teamName} answers={answers} changeAnswer={setQuestionNumber} />
                    </QuizWrapper>
            }
        </Layout>
    )
}

export default Quiz
