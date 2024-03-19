import React from "react";
import "./cards.css";

interface CardsProps {
  imageUrl: string;
  imageAlt: string;
  description: string;
  title: string;
}

function Cards({ imageUrl, imageAlt, title, description }: CardsProps) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={imageUrl} alt={imageAlt} />
            </div>
            <div className="card-text">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Cards;
