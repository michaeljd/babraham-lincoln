import React from "react"
import styled from "styled-components"

import { Form, Button } from "../components/widgets"

const Heading = styled('h2')`
    text-align: center;
    font-size: 42px;
    padding: 24px;
    color: #084B83;
`

const List = styled('ol')`
    list-style: decimal;
    color: #084B83;
`
const ListItem = styled('li')`
    font-size: 24px;

    margin: 24px;

    strong {
        font-weight: bold;
    }
`

const EndOfRound = ({ answers, roundNumber, nextRound }) => {
    const submitForm = (evt) => {
        evt.preventDefault();
        nextRound();
    }

    return <Form onSubmit={submitForm}>
        <Heading>End of round {roundNumber}</Heading>

        <List>
            {answers.map(({question, answer}) => <ListItem>
                <p>{question}</p>
                <p><strong>{answer}</strong></p>
            </ListItem>)}
        </List>

        <Button>Start round {roundNumber + 1}</Button>
    </Form>
}

export default EndOfRound
