import React, { useState, useEffect } from 'react';
import './App.scss';
import Clock from './component/Clock';

function App() {
	const [showClock, setShowClock] = useState(true)
	return (
		<div className="app">
			<h1>React Hook - Clock</h1>
			{showClock && <Clock/>}
			<button onClick={() => setShowClock(false)}>show CLock</button>
		</div>
	);
}

export default App;
