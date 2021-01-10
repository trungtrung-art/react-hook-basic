import { useState } from 'react';
import './App.scss';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

function App() {
	const [todoList, setTodoList] = useState([
		{id: 1,title: "Mình là Thiện Trung"},
		{id: 2,title: "Rất vui được học hỏi"},
		{id: 3,title: "Mong mọi người giúp đỡ"}
	])

	function handleTodoClick(todo) {
		console.log(todo);
		const index = todoList.findIndex(x => x.id == todo.id)
		if(index < 0) return 

		// xóa todo trên App
		const newTodoList = [...todoList];
		newTodoList.splice(index,1);
		// cập nhật lại TodoList
		setTodoList(newTodoList)
	}
	
	function handleTodoFormSubmit(formValues){
		console.log('Add :',formValues.title);
		//thêm todo mới

		const newTodo = {
			id: todoList.length + 1,
			...formValues
		}
		const newTodoList = [...todoList]
		newTodoList.push(newTodo);
		setTodoList(newTodoList)
	}

	return (
		<div className="app">
			<h1>React Hook - Todo List</h1>
			<TodoForm onSubmit={handleTodoFormSubmit}/>
			<TodoList 
			todos = {todoList}
			onTodoClick = {handleTodoClick}/>
		</div>
	);
}

export default App;
