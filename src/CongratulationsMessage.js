import React from 'react';

export default function CongratulationsMessage(props) {
    const { numberOfClicks, threshold } = props;

    return numberOfClicks >= threshold
        ? <h1>Congratulations!! You've reached {threshold} number of Clicks</h1>
        : null;
}
