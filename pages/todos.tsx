import React, { useEffect, useState } from 'react'

interface Todo {
  id: number;
  title: string;
}


function Todos() {

  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data:Todo[] = await response.json();
        setTodos(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Without SSR Example(Todo List)</h1>
      {todos.length>0 ? todos.map((todo)=>(
        <p key={todo.id} >{todo.id} : {todo.title}</p>
      )) : (
        <p>Loading data...</p>
      )}
    </div>
  )
}

export default Todos