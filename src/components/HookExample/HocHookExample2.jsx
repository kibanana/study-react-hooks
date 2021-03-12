import React, {} from 'react';
import withCharacterList from './HocHookExample';

function BoxListWithCharacterList(props) {
    const { data, handleCharacterItemClick } = props;

    return (
        <div onClick={handleCharacterItemClick}>
            {
                data && data.map(chracter => (
                    <div style={{ display: 'inline-block', width: '30%', height: '30%', border: `solid 3px ${chracter.color}` }}>
                        {chracter.name}
                    </div>
                ))
            }
        </div>
    )
}

export default withCharacterList(BoxListWithCharacterList);