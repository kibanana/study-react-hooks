import React, { useState, useEffect } from 'react';

export default function HookExample() {
    const fruits = ['apple', 'banana', 'kiwi', 'strawberry', 'grape', 'cherry']
    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState(fruits[0]);

    useEffect(() => {
        document.title = `Clicked ${count} times`

        return 
    })

    return (
        <div>
            <button
                onClick={() => {
                    setCount(count + 1)
                    setFruit(fruits[(count + 1) % fruits.length])
                }}
            >
                Clicked {count} times (selected fruit: {fruit})
            </button>
        </div>
    )
}