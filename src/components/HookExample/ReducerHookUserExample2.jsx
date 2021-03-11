import React, { useContext } from 'react';
import { ReducerContext } from '../../context';
import { CURRENT_USER, TODO, HOBBY } from '../../action';

export default function ReducerHookUserExample2() {
    const [state, dispatch] = useContext(ReducerContext);

    return (
        <div>
            {
                state[CURRENT_USER] ?
                (
                    <div style={{ width: '30%', margin: 'auto' }}>
                        {
                            <>
                                <h3>To-Do List</h3>
                                <ul>
                                    {state[TODO] && state[TODO].map(todo => (<li>{todo}</li>))}
                                </ul>
                                <h3>Hobby List</h3>
                                <ul>
                                    {state[HOBBY] && state[HOBBY].map(hobby => (<li>{hobby}</li>))}
                                </ul>
                            </>
                        }
                    </div>
                ) : 
                (
                    <div>
                        <span>로그인해주세요!</span>
                    </div>
                )
            }
        </div>
    );
}