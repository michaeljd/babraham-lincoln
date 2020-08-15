import React, { useState } from "react"
import { Form, Label, Input, Button } from "./widgets"

const TeamName = ({ value, update }) => {
    const [teamName, setTeamName] = useState(value)

    const onSubmit = (evt) => {
        evt.preventDefault()
        update(teamName)
    }
    return (<Form onSubmit={onSubmit}>
        <Label htmlFor="teamName">What's your team name?</Label>
        <Input id="teamName" autofocus value={teamName} onChange={(evt) => setTeamName(evt.target.value)} />
        <Button>YES that's us</Button>
    </Form>)
}

export default TeamName
