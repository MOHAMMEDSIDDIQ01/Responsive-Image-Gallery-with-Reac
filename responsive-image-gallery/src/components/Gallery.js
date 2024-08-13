import React from 'react';
import ImageCard from './ImageCard';
import './Gallery.css';

function generateRandomTitle() {
  const titles = ['Sunset', 'Mountain', 'Forest', 'River', 'Cityscape'];
  return titles[Math.floor(Math.random() * titles.length)];
}

function generateRandomPrice() {
  return (Math.random() * 100).toFixed(2);
}

function Gallery() {
  return (
    <div className="gallery">
      {[...Array(10)].map((_, index) => (
        <ImageCard
          key={index}
          title={generateRandomTitle()}
          price={generateRandomPrice()}
        />
      ))}
    </div>
  );
}

export default Gallery;
