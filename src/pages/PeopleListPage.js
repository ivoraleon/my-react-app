import React from 'react';
import PeopleList from '../PeopleList';

const people = [{
    name: 'John',
    age: 40,
    eyeColor: 'brown'
}, {
    name: 'Helga',
    age: 25,
    eyeColor: 'blue'
}, {
    name: 'Dwayne',
    age: 55,
    eyeColor: 'green'
}];

export const PeopleListPage = () => (
        <>
            <h1>The People List Page</h1>
            <PeopleList people={people} />
        </>
);