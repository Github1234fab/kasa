import React from 'react';

const Card = ({title}) => {
    return (
        <div className='Card'>
            <div className = "card_title">{title}</div>
        </div>
    );
};

export default Card;