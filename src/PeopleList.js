import React from 'react';
import PeopleListItem from './PeopleListItem';

export default function PeopleList({ people }) {
    return (
        <>
            {people.map(person => (
                <PeopleListItem person={person} key={person.name} />
            ))}
        </>
    )
}
