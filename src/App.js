import React, { useState, useEffect } from 'react';
import './App.scss';
import PostList from './component/PostList';

function App() {
	const {postList, setPostList} = useState([])

	useEffect(() => {
		async function fetchPostList() {
			try {
				const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1'
				const reponse = await fetch(requestUrl);
				const reponseJSON = await reponse.json();
				const {data} = reponseJSON
				
				setPostList(data)
			} catch (error) {
				console.log("Failed to fetch postlist: ", error.message);
			}
		}

		fetchPostList()
	},[]);

	return (
		<div className="app">
			<h1>React Hook - Post List</h1>
			<PostList posts={postList}/>
		</div>
	);
}

export default App;
