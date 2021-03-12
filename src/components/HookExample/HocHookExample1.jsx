import React, { useState } from 'react';
import withCharacterList from './HocHookExample';

function ListWithCharacterList(props) {
    const [name, setName] = useState('');
    const [color, setColor] = useState('#000000');
    const { data, handleCharacterItemClick, handleChracterItemAddButtonClick } = props;

    return (
        <>
            <div>
                <label>
                    name
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    color
                    <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                </label>
                <button
                    type="button"
                    onClick={() => {
                        handleChracterItemAddButtonClick(name, color);
                        setName('');
                    }}
                >
                    추가
                </button>
            </div>
            <div onClick={handleCharacterItemClick}>
                {
                    data && data.map(chracter => (
                        <div style={{ background: chracter.color }}>
                            {chracter.name}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default withCharacterList(ListWithCharacterList);