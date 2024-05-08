import React from 'react';

function ListGroup() {
    let items = [
        'New York',
        'Tokyo',
        'Paris'
    ];
    //items = [];
    
    return (
        <>
            <h1>List Group</h1>
            {items.length === 0 && <p>no item found </p>}
            <ul className="list-group">
                {items.map(item => (
                    <li className = "list-group-item" key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
