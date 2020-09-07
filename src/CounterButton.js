import React, { useState } from 'react';

export default function CounterButton({ onIncrement, numberOfClicks }) {
    return (
        <>
            <p>You've clicked the button {numberOfClicks} times</p>
            <button onClick={ onIncrement }>Click Me!</button>
        </>
    )
}
