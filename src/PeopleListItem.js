import React from 'react';
import './PeopleListItem.css';

export default function PeopleListItem({ person }) {
    return (
        <div className="list-item-container">
            <h3>{person.name}</h3>
            <p>Age: {person.age}</p>
            <p>Eye Color: {person.eyeColor}</p>
        </div>
    )
}
