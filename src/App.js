import React, { useState } from 'react';
import './style.css';
import NumberDisplay from './NumberDisplay';

export default function App() {
  const [isShow, setIsShow] = useState(true);

  return (
    <div>
      {isShow && <NumberDisplay />}
      <button onClick={() => setIsShow(false)}>UNMOUNT</button>
    </div>
  );
}
