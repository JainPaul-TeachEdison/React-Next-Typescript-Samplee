import React from 'react';

interface Todo {
  id: number;
  title: string;
}

function Todos({ todos }: { todos: Todo[] }) {
  return (
    <div>
      <h1>SSR Example (Todo List)</h1>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <p key={todo.id}>{todo.id} : {todo.title}</p>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}


export async function getServerSideProps() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data: Todo[] = await response.json();
      return {
        props: {
          todos: data,
        },
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        props: {
          todos: [],
        },
      };
    }
  }

export default Todos;