/** @format */

import { useState } from 'react';
import './App.css';
import BigCats from './BigCats';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BigCats />
    </>
  );
}

export default App;
