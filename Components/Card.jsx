import React from 'react';
import './Card.css';

const Card = ({ title, content, onClick }) => (
    <button className="card-button" onClick={onClick}>
        <div className="card">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    </button>
);

export default Card;