import React from 'react'

export default function PeopleListItem({ person }) {
    return (
        <div>
            <h3>{person.name}</h3>
            <p>Age: {person.age}</p>
            <p>Eye Color: {person.eyeColor}</p>
        </div>
    )
}
