import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Answers from "../components/answers"
import Question from "../components/question"
import TeamName from "../components/team-name"

import { saveGame, loadGame } from "../utils/memory"
import QuizData from "../../content/questions.json"

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
    }
    useEffect(() => {
        saveGame({ teamName, answers })
        setQuestionNumber(answers.length)
    }, [teamName, answers])

    return (
        <Layout>
            <SEO title={`Question ${questionNumber + 1}`} />

            {
                teamName.length === 0 ?
                    <TeamName value={teamName} update={setTeamName} />
                    :
                    <div>
                        <Question questionNumber={questionNumber} question={currentQuestion.question} submit={answerQuestion} />
                        <Answers teamName={teamName} answers={answers} changeQuestion={setQuestionNumber} />
                    </div>
            }
        </Layout>
    )
}

export default Quiz
