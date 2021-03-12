import React, {} from 'react';
import withCharacterList from './HocHookExample';

function ListWithCharacterList(props) {
    const { data, handleCharacterItemClick } = props;

    return (
        <div onClick={handleCharacterItemClick}>
            {
                data && data.map(chracter => (
                    <div style={{ background: chracter.color }}>
                        {chracter.name}
                    </div>
                ))
            }
        </div>
    )
}

export default withCharacterList(ListWithCharacterList);