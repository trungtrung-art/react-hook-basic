import React, {useEffect, useRef, useState} from 'react';
import Hero from './component/Hero'

function App() {
	const [count, setCount] = useState(0);
	const countRef = useRef(count)

	useEffect(() => {
		countRef.current = count
		console.log("chay lai ne");
	},[count])

	return (
		<div className="app">
			<h1>ReactHook - Memo</h1>
			<p>{countRef.current}</p>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>Nhấn đi</button>
			<Hero name="Thientrung"/>
		</div>
	);
};

export default App;