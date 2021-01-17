import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {};

function formatDate(date) {
    if(!date) return '';

	const hours = `0${date.getHours()}`.slice(-2);
	const minutes = `0${date.getMinutes()}`.slice(-2);
	const seconds = `0${date.getSeconds()}`.slice(-2);

	return`${hours}:${minutes}:${seconds}`
}

function Clock(props) {

    const [timeString, setTimeString] = useState('')

	useEffect(() => {
		const clockInterval = setInterval(() => {
			const now = new Date();
			//HH:mm:SS
			const newTimeString = formatDate(now)

			setTimeString(newTimeString)
        })
        
        return () => {
            clearInterval(clockInterval)
        }
    },[])
    
    return (
        <div>
            <p>{timeString}</p>
        </div>
    );
}

export default Clock;