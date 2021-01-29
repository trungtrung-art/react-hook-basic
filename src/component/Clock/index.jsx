import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useClock from '../../hooks/useClock';

function Clock(props) {
    const {timeString} = useClock()
    
    return (
        <div className="Clock">
            <p>{timeString}</p>
        </div>
    );
}

export default Clock;