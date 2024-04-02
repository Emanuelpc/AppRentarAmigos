import React from 'react';

function InterestType({ interest }) {
    return (
        <div style={{ border: '2px solid black', padding: '5px', margin: '5px', display: 'inline-block' }}>
            <p style={{ margin: '0' }}>{interest}</p>
        </div>
    );
}

export default InterestType;