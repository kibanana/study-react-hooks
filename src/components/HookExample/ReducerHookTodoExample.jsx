import React, { useContext } from 'react';
import { ReducerContext } from '../../context';
import { TODO, TODOCOUNT, HOBBY, HOBBYCOUNT } from '../../action';

const todoList = ['Running', 'Have a time with a cat', 'Walk the riverside'];
const hobbyList = ['Painting', 'Drawing', 'Shopping'];

export default function Todos() {
    const [state, dispatch] = useContext(ReducerContext);
    const { todoCount, hobbyCount, currentUser } = state;

    function handleAddClick(key, text) {
        const countKey = key === TODO ? TODOCOUNT : HOBBYCOUNT;
        dispatch({ type: key, key, value: [...state[key], text] });
        dispatch({ type: key, key: countKey, value: state[countKey] + 1 });
    }

    function handleDeleteClick(key) {
        const countKey = key === TODO ? TODOCOUNT : HOBBYCOUNT;
        dispatch({ type: key, key, value: state[key].splice(0, state[key].length -1) });
        if (state[countKey] >= 0) {
            dispatch({ type: key, key: countKey, value: state[countKey] - 1 });
        }
    }

    return (
        <div>
            <button
                disabled={!currentUser}
                onClick={() => handleAddClick(TODO, todoList[(todoCount + 1) % todoList.length])}
            >
                Add To-Do Item
            </button>

            <button
                disabled={!currentUser}
                onClick={() => handleDeleteClick(TODO)}
            >
                Delete To-Do Item
            </button>

            <br />

            <button
                disabled={!currentUser}
                onClick={() => handleAddClick(HOBBY, hobbyList[(hobbyCount + 1) % hobbyList.length])}
            >
                Add Hobby Item
            </button>

            <button
                disabled={!currentUser}
                onClick={() => handleDeleteClick(HOBBY)}
            >
                Delete Hobby Item
            </button>
        </div>
    )
}