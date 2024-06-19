import React from 'react';
import "../style/CardDesign.css";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.val.image} alt={props.val.title} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{props.val.title}</h3>
                <div className="price-size">
                    <p className="price">Price: ${props.val.price}</p>
                    <p className="size">Size: {props.val.size}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
