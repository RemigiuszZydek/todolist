import React, { useState } from "react";

function TodoForm(props) {
	const [input, setInput] = useState("");

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 1000),
			text: input,
		});
		setInput("");
	};

	return (
		<form className="Todo-form" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Add a todo"
				value={input}
				name="text"
				className="Todo-input"
				onChange={handleChange}
			/>
			<button className="Todo-button">Add</button>
		</form>
	);
}

export default TodoForm;
