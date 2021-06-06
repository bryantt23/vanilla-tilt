import logo from './logo.svg';
import './App.css';
import Tilt from 'react-vanilla-tilt';
import React, { useRef, useEffect, useState } from 'react';

function App() {
  const ref = useRef(null);
  const [xPos, setXPos] = useState('test');

  function handleMouseOverHandler(e) {
    // console.log('🚀 ~ file: App.js ~ line 10 ~ handleMouseOverHandler ~ e', e);
    console.log(e.clientX);
    // console.log('handleMouseOver');
    // console.log(
    //   '🚀 ~ file: App.js ~ line 11 ~ handleMouseOverHandler ~ ref.current.src',
    //   ref.current
    // );
    setXPos(e.clientX);
  }

  // console.log('🚀 ~ file: App.js ~ line 8 ~ App ~ ref', ref);
  // useEffect(() => {
  //   const node = ref.current;

  //   if (node) {
  //     console.log('🚀 ~ file: App.js ~ line 15 ~ useEffect ~ node', node);
  //   }
  // }, [ref.current]);

  return (
    <div className='App'>
      <Tilt ref={ref} onMouseOver={e => handleMouseOverHandler(e)}>
        <div>You can put whatever you want inside this</div> {xPos}
      </Tilt>
    </div>
  );
}

export default App;
