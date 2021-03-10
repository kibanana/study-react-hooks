import React, { useState, useReducer } from 'react';
import reducer from './reducer';

const todoList = ['Running', 'Have a time with a cat', 'Walk the riverside'];
const hobbyList = ['Painting', 'Drawing', 'Shopping'];
const initialState = { todos: [todoList[0]], hobbies: [hobbyList[0]] };
const TODO = 'todos';
const HOBBY = 'hobbies';

export default function Todos() {
    const [todoCount, setTodoCount] = useState(0);
    const [hobbyCount, setHobbyCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { todos, hobbies } = state

    function handleAddClick(key, text) {
        dispatch({ type: 'add', key, value: text });
    }

    function handleDeleteClick(key) {
        dispatch({ type: 'delete', key });
    }

    return (
        <div>
            <button
                onClick={() => {
                    handleAddClick(TODO, todoList[(todoCount + 1) % todoList.length]);
                    setTodoCount(todoCount + 1);
                }}
            >
                Add To-Do Item
            </button>

            <button
                onClick={() => {
                    handleDeleteClick(TODO);
                    if (todoCount >= 0) setTodoCount(todoCount - 1);
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

            <button
                onClick={() => {
                    handleAddClick(HOBBY, hobbyList[(hobbyCount + 1) % hobbyList.length]);
                    setHobbyCount(hobbyCount + 1);
                }}
            >
                Add To-Do Item
            </button>

            <button
                onClick={() => {
                    handleDeleteClick(HOBBY);
                    if (hobbyCount >= 0) setHobbyCount(hobbyCount - 1);
                }}
            >
                Delete To-Do Item
            </button>

            <div style={{ width: '30%', margin: 'auto' }}>
                {
                    <ul>
                        {hobbies && hobbies.map(hobby => (<li>{hobby}</li>))}
                    </ul>
                }
            </div>
        </div>
    )
}