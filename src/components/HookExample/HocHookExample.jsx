import React, { useState, useEffect } from 'react';

const preCharacterList = [ // deep copy / 하드코딩 필요
    {
        name: 'A',
        color: 'red'
    },
    {
        name: 'B',
        color: 'orange'
    },
    {
        name: 'C',
        color: 'yellow'
    },
    {
        name: 'D',
        color: 'green'
    },
    {
        name: 'E',
        color: 'blue'
    },
    {
        name: 'F',
        color: 'magenta'
    }
]

export default function withCharacterList (WrappedComponent) {
    const Component = props => {
        const [characterList, setChracterList] = useState(null);
        
        useEffect(() => {
            setChracterList(JSON.parse(JSON.stringify(preCharacterList))); // deep copy
        }, [])

        const handleCharacterItemClick = (e) => {
            const popedItem = characterList.pop();
            setChracterList([popedItem, ...characterList]);
        }

        return <WrappedComponent
            {...props}
            data={characterList}
            handleCharacterItemClick={handleCharacterItemClick}
        />;
    }

    return Component;
}