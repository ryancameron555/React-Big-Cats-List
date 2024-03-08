/** @format */

import React, { useState } from 'react';
import SingleCat from './SingleCat';
const initialCats = [
  {
    name: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    imageUrl: 'https://source.unsplash.com/200x200/?cheetah',
  },
  {
    name: 'Cougar',
    scientificName: 'Puma concolor',
    imageUrl: 'https://source.unsplash.com/200x200/?cougar',
  },
  {
    name: 'Tiger',
    scientificName: 'Panthera tigris',
    imageUrl: 'https://source.unsplash.com/200x200/?tiger',
  },
  {
    name: 'Lion',
    scientificName: 'Panthera leo',
    imageUrl: 'https://source.unsplash.com/200x200/?lion',
  },
  {
    name: 'Jaguar',
    scientificName: 'Panthera onca',
    imageUrl: 'https://source.unsplash.com/200x200/?jaguar',
  },
  {
    name: 'Leopard',
    scientificName: 'Panthera pardus',
    imageUrl: 'https://source.unsplash.com/200x200/?leopard',
  },
  {
    name: 'Snow Leopard',
    scientificName: 'Panthera uncia',
    imageUrl: 'https://source.unsplash.com/200x200/?snow%20leopard',
  },
];
function BigCats() {
  const [cats, setCats] = useState(initialCats);
  const [filteredCats, setFilteredCats] = useState(initialCats);
  const handleReverse = () => {
    setFilteredCats([...filteredCats].reverse());
  };

  //  completion receipt for exercise 4
  const handleSortAlphabetically = () => {
    setFilteredCats(
      [...filteredCats].sort((a, b) => a.name.localeCompare(b.name))
    );
  };
  const handleFilterPanthera = () => {
    const pantheraCats = cats.filter((cat) =>
      cat.scientificName.startsWith('Panthera')
    );
    setFilteredCats(pantheraCats);
  };
  const handleResetFilter = () => {
    setFilteredCats(cats);
  };
  return (
    <div>
      <h1>Big Cats</h1>
      <ul>
        {filteredCats.map((cat, index) => (
          <SingleCat key={index} cat={cat} imageUrl={cat.imageUrl}></SingleCat>
        ))}
      </ul>
      <button onClick={handleReverse}>Reverse Order</button>
      <button onClick={handleSortAlphabetically}>Sort Alphabetically</button>
      <button onClick={handleFilterPanthera}>Filter Panthera</button>
      <button onClick={handleResetFilter}>Reset Filter</button>
    </div>
  );
}
export default BigCats;
