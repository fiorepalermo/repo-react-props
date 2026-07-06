import { useState } from 'react';

export default function Esercizio10() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Fare la spesa', completed: false },
    { id: 2, text: 'Studiare React', completed: false },
    { id: 3, text: 'Lezione con Loris', completed: false },
  ]);

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
      <h2>Todo list interattiva</h2>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleComplete(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
