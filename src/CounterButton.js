import React, { useState } from 'react';

export default function CounterButton() {
    const [numberOfClicks, setNumberOfClicks] = useState(0);

    const increment = () => setNumberOfClicks(numberOfClicks + 1);

    return (
        <>
            <p>You've clicked the button {numberOfClicks} times</p>
            <button onClick={ increment }>Click Me!</button>
        </>
    )
}
