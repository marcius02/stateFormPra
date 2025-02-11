import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ text: "", category: "personal" });

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { ...newTodo, completed: false }]);
    setNewTodo({ text: "", category: "personal" });
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <>
      <h3>Todo List</h3>
      <div>
        <form onSubmit={addTodo}>
          <input
            type="text"
            value={newTodo.text}
            onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
            placeholder="New todo"
            required
          />
          <select
            value={newTodo.category}
            onChange={(e) =>
              setNewTodo({ ...newTodo, category: e.target.value })
            }
          >
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="shopping">Shopping</option>
          </select>
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(index)}
              />
              {todo.text} - {todo.category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
