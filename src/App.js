import logo from './logo.svg';
import './App.css';
import Tilt from 'react-vanilla-tilt';
import React, { useRef, useEffect } from 'react';

function App() {
  const ref = useRef(null);

  function handleMouseOverHandler() {
    console.log('handleMouseOver');
    console.log(
      '🚀 ~ file: App.js ~ line 11 ~ handleMouseOverHandler ~ ref.current.src',
      ref.current
    );
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
      <Tilt ref={ref} onMouseOver={handleMouseOverHandler}>
        <div>You can put whatever you want inside this</div>
      </Tilt>
    </div>
  );
}

export default App;
