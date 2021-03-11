import React, { useContext } from 'react';
import { ReducerContext } from '../../context';
import { TODO, TODOCOUNT, HOBBY, HOBBYCOUNT } from '../../action';

const todoList = ['Running', 'Have a time with a cat', 'Walk the riverside'];
const hobbyList = ['Painting', 'Drawing', 'Shopping'];

export default function Todos() {
    const [state, dispatch] = useContext(ReducerContext);
    const { todos, todoCount, hobbies, hobbyCount } = state;

    function handleAddClick(key, text) {
        const countKey = key === TODO ? TODOCOUNT : HOBBYCOUNT;
        dispatch({ type: 'add', key, value: [...state[key], text] });
        dispatch({ type: 'add', key: countKey, value: state[countKey] + 1 });
    }

    function handleDeleteClick(key) {
        const countKey = key === TODO ? TODOCOUNT : HOBBYCOUNT;

        dispatch({ type: 'delete', key, value: state[key].splice(0, state[key].length -1) });
        if (state[countKey] >= 0) {
            dispatch({ type: 'delete', key: countKey, value: state[countKey] - 1 });
        }
        
    }

    return (
        <div>
            <button onClick={() => handleAddClick(TODO, todoList[(todoCount + 1) % todoList.length])} >
                Add To-Do Item
            </button>

            <button onClick={() => handleDeleteClick(TODO)}>
                Delete To-Do Item
            </button>

            <div style={{ width: '30%', margin: 'auto' }}>
                {
                    <ul>
                        {todos && todos.map(todo => (<li>{todo}</li>))}
                    </ul>
                }
            </div>

            <button onClick={() => handleAddClick(HOBBY, hobbyList[(hobbyCount + 1) % hobbyList.length])}>
                Add To-Do Item
            </button>

            <button onClick={() => handleDeleteClick(HOBBY)}>
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