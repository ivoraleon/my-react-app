import React from 'react';

export default function CongratulationsMessage(props) {
    const { numberOfClicks, threshold, onHide } = props;

    return numberOfClicks >= threshold
        ? <>
            <h1>Congratulations!! You've reached {threshold} number of Clicks</h1>
            <button onClick={onHide}>Hide</button>
          </>
        : null;
}
