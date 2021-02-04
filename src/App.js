import React, {useState} from 'react';
import Hero from './component/Hero'

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="app">
			<h1>ReactHook - Memo</h1>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>Nhấn đi</button>
			<Hero name="Thientrung"/>
		</div>
	);
};

export default App;