import React, { useState } from "react"
import styled from "styled-components"
import { Form, Label, Input, Button } from "./widgets"

const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
`

const TeamName = ({ value, update }) => {
    const [teamName, setTeamName] = useState(value)

    const onSubmit = (evt) => {
        evt.preventDefault()
        update(teamName)
    }
    
    return (
        <Wrapper>
            <Form onSubmit={onSubmit}>
                <Label htmlFor="teamName">What's your team name?</Label>
                <Input id="teamName" autoFocus value={teamName} onChange={(evt) => setTeamName(evt.target.value)} />
                <Button>YES that's us</Button>
            </Form>
        </Wrapper>
    )
}

export default TeamName
