import React, {} from 'react';
import withCharacterList from './HocHookExample';

function OrderedListWithCharacterList(props) {
    const { data, handleCharacterItemClick } = props;

    return (
        <div onClick={handleCharacterItemClick} style={{ fontSize: '30px' }}>
            <ol>
            {
                data && data.map(chracter => (
                    <li style={{ color: chracter.color }}>{chracter.name}</li>
                ))
            }
            </ol>
        </div>
    )
}

export default withCharacterList(OrderedListWithCharacterList);