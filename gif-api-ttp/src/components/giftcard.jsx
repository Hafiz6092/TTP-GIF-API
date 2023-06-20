import React from 'react';

const GifCard = ({ gif }) => (
    <div className="gif-card">
        <h2>{gif.title}</h2>
        <img src={gif.images.original.url} alt="Gif" />
    </div>
);

export default GifCard;