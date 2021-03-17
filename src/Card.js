import React from 'react';
import './Card.css';

const Card = ({year, name, color, pantoneValue}) => {
    return (
        <div className="card" style={{ background: color }}>
            <p >{year}</p>
            <p className="text-center">{name}</p>
            <p className="text-center">{color}</p>
            <p className="text-end">{pantoneValue}</p>
        </div>
    )
}

export default Card
