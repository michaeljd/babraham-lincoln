import React, { useState } from "react"

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

export default TeamName
