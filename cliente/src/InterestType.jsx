import React from 'react';

function InterestType({ interest }) {
    return (
        <div className='badge text-bg-secondary' style={{padding: '5px', margin: '5px', display: 'inline-block' }}>
            <p style={{ margin: '0' }}>{interest}</p>
        </div>
    );
}

export default InterestType;