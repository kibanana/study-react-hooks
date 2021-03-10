import React, { useState, useReducer } from 'react';

const todoList = ['Running', 'Have a time with a cat', 'Walk the riverside'];
const initialState = [todoList[0]];

function todoReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.text];
    case 'delete':
      state.pop();
      return state;
    default:
      throw new Error();
  }
}

export default function Todos() {
    const [count, setCount] = useState(0);
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    function handleAddClick(text) {
      dispatch({ type: 'add', text });
    }

    function handleDeleteClick() {
        dispatch({ type: 'delete' });
    }

    return (
        <div>
            <button
                onClick={() => {
                    handleAddClick(todoList[(count + 1) % todoList.length]);
                    setCount(count + 1);
                }}
            >
                Add To-Do Item
            </button>

            <button
                onClick={() => {
                    handleDeleteClick();
                    if (count >= 0) setCount(count - 1);
                }}
            >
                Delete To-Do Item
            </button>

            <div style={{ width: '30%', margin: 'auto' }}>
                {
                    <ul>
                        {todos && todos.map(todo => (<li>{todo}</li>))}
                    </ul>
                }
            </div>
        </div>
    )
}