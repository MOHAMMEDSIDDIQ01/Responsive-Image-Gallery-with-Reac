import React from 'react';
import './ImageCard.css';

function ImageCard({ title, price }) {
  return (
    <div className="image-card">
      <img src={`https://via.placeholder.com/150`} alt="placeholder" />
      <div className="image-card-content">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default ImageCard;
