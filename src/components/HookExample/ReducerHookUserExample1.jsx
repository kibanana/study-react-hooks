import React, { useContext } from 'react';
import { ReducerContext } from '../../context';
import { CURRENT_USER } from '../../action';

export default function ReducerHookUserExample1() {
    const [state, dispatch] = useContext(ReducerContext);

    return (
        <div>
            {
                state[CURRENT_USER] ?
                (
                    <button
                        onClick={() => dispatch({ type: CURRENT_USER, key: CURRENT_USER, value: null })}
                    >
                        로그아웃하기
                    </button>
                ) : 
                (
                    <button
                        onClick={() => dispatch({ type: CURRENT_USER, key: CURRENT_USER, value: { name: 'Yewon Kim', age: 20 } })}
                    >
                        로그인하기
                    </button>
                )
            }
        </div>
    );
}