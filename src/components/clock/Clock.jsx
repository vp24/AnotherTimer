import React from 'react';
import './Clock.css';

const Clock = ({timer}) =>{
    return(
        <div>
          <h1 className = 'clock'>{timer}</h1>
        </div>
    );

}

export default Clock;