import React from "react"
import styled from "styled-components"

const Layout = styled('div')`
    display: flex;
    flex-direction: column;

    background-color: #BBE6E4;
    color: #084B83;
    padding: 24px;
`

const TeamName = styled("h2")`
    text-align: center;
    font-size: 48px;
`

const ChangeButton = styled("button")`
    text-decoration: underline;
    background-color: transparent;
    border: 0;
    cursor: pointer;
`

const ListItem = styled("li")`
    list-style: decimal;
    font-size: 24px;
    margin: 24px;
`

const ListItemLayout = styled("div")`
    display: flex;
`

const ListItemQuestion = styled("span")`
    font-style: italic;
    flex: 1;
`

const ListItemAnswer = styled("span")`
    font-weight: bold;
`

const Answer = ({ question, answer, onClick }) => {
    return (
        <ListItem>
            <ListItemLayout>
                <ListItemQuestion>{question}</ListItemQuestion>
                <ListItemAnswer>{answer}</ListItemAnswer>
                <ChangeButton onClick={onClick}>(change)</ChangeButton>
            </ListItemLayout>
        </ListItem>
    )
}

const Answers = ({ teamName, answers, changeQuestion }) => {
    return (
          <Layout>
            <TeamName>{teamName}</TeamName>
            <ol>
                {answers.map((answer, ix) => <Answer key={ix} {...answer} onClick={() => changeQuestion(ix)} />)}
            </ol>
          </Layout>
    )
}

export default Answers