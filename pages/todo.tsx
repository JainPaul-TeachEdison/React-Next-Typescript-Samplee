import React, { useState } from 'react';


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([]);


  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };


  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">To-Do List</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`cursor-pointer ${todo.completed ? 'line-through' : 'none'}`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        className="border rounded py-2 px-3 w-full mb-4"
        placeholder="Add a new To-Do"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
            addTodo(e.currentTarget.value);
            e.currentTarget.value = '';
          }
        }}
      />
    </div>
  );
};

export default App;
