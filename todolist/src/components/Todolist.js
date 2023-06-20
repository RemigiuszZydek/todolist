import React, { useState } from "react";
import TodoForm from "./Todoform";

function Todolist() {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}

		const newTodos = [todo, ...todos];
		setTodos(newTodos);
	};

	return (
		<div>
			<h1>Your plans</h1>
			<TodoForm onSubmit={addTodo} />
		</div>
	);
}

export default Todolist;
