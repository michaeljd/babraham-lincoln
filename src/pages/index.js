import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import QuizData from "../../content/questions.json"

const Question = ({ question, submitAnswer, ...props }) => {
  const [answer, updateAnswer] = useState(props.answer || "")
  useEffect(() => updateAnswer(""), [question])

  const onChange = (evt) => updateAnswer(evt.target.value)
  const onSubmit = (evt) => {
    evt.preventDefault()
    submitAnswer(answer)
  }

  return <form onSubmit={onSubmit}>
    <div>
      <label>{question}</label>
    </div>

    <div>
      <input value={answer} onChange={onChange} />
      <button>That's my answer!</button>
    </div>
  </form>
}

const Answer = ({ question, answer, onClick }) => (
  <li>
    {question} <strong>{answer}</strong> <button onClick={onClick}>change</button>
  </li>
)

const TeamName = ({ value, update }) => {
  const [teamName, setTeamName] = useState(value)

  const onSubmit = (evt) => {
    evt.preventDefault()
    update(teamName)
  }
  return (<form onSubmit={onSubmit}>
    <label>What's your team name?!?</label>
    <input value={teamName} onChange={(evt) => setTeamName(evt.target.value)} />
    <button>YES that's us</button>
  </form>)
}

const isBrowser = () => (typeof window !== 'undefined')
const loadGame = () => isBrowser() ? JSON.parse(localStorage.getItem("game") ?? "{}") : {}
const saveGame = (gameState) => {
  if (isBrowser()) localStorage.setItem("game", JSON.stringify(gameState))
}
const reset = () => {
  if (isBrowser()) {
    localStorage.clear()
    window.location.reload()
  }
}

const Quiz = () => {
  const storedGame = loadGame()
  const [teamName, setTeamName] = useState(storedGame.teamName || "")
  const [answers, setAnswers] = useState(storedGame.answers || {})
  const [questionId, setQuestionId] = useState(Object.keys(answers).length)

  const currentQuestion = QuizData[questionId]
  const answerQuestion = (answer) => {
    setAnswers({ [questionId]: { answer, question: currentQuestion.question }, ...answers })
    setQuestionId(questionId + 1)
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
            <Question question={currentQuestion.question} answer={answers[currentQuestionId].answer} submitAnswer={answerQuestion} />

            <strong>{teamName}</strong>
            <ol>
              {Object.keys(answers).map((id) => <Answer key={id} {...answers[id]} onClick={() => setQuestionId(id)} /> )}
            </ol>
            <button onClick={reset}>Reset</button>
          </div>
      }
    </Layout>
  )
}

export default Quiz
