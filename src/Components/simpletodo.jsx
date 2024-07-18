import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo, deleteTodo } from '../freatures/todo/todoSlice';

export default function SimpleTodo() {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  const handleUpdate = (id) => {
    const newText = prompt("Enter new text:");
    if (newText) {
      dispatch(updateTodo({ id, text: newText }));
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Todo List</h2>
        {todos.length > 0 ? (
          todos.map(todo => (
            <div key={todo.id} className="flex items-center justify-between bg-gray-50 p-2 mb-2 rounded shadow">
              <span className="text-lg">{todo.text}</span>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleUpdate(todo.id)} 
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300"
                >
                  Update
                </button>
                <button 
                  onClick={() => handleDelete(todo.id)} 
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No todos available</p>
        )}
      </div>
    </div>
  );
}
