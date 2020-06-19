import React from 'react';

const StartButton = ({onStart, isActive}) => {

    return(
        <button onClick = {onStart} >{isActive? 'Pause' : 'Start'}</button>
    );
}

export default StartButton;