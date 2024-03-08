/** @format */
import React from 'react';

function SingleCat({ cat, imageUrl }) {
  return (
    <li>
      <h3>{cat.name}</h3>
      <p>Latin name: {cat.scientificName}</p>
      <div>
        <img src={imageUrl} alt="" />
      </div>
    </li>
  );
}

export default SingleCat;
