import React from 'react'

export default function Greeting(props) {
    const { name, numberOfMessages } = props;

    if(!name) {
        return null;
    }

    let isMorning = (new Date()).getHours() < 12;
    let greetingHeader = isMorning
        ? <h3>Good Morning, {name}! </h3>
        : <h3>Good Evening, {name}! </h3>

    return (
        <>
            {greetingHeader}
            {numberOfMessages === 0
                ? null
                : <p>You have {numberOfMessages} new messages</p>}
        </>
    )
};