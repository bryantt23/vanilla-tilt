import logo from './logo.svg';
import './App.css';
import Tilt from 'react-vanilla-tilt';
import React, { useRef, useEffect, useState } from 'react';

function App() {
  const ref = useRef(null);
  const [xPos, setXPos] = useState('test');
  const [dataTilt, setDataTilt] = useState('50');

  useEffect(() => {
    // This is ok
    if (ref && ref.current) {
      ref.current.addEventListener('tiltChange', function (event) {
        console.log('🚀 ~ file: App.js ~ line 13 ~ event', event);
      });
    }

    // Passing a function that calls your function
    return () => {
      ref.current.addEventListener('tiltChange');
    };
  }, []);

  function handleMouseOverHandler(e) {
    // console.log('🚀 ~ file: App.js ~ line 10 ~ handleMouseOverHandler ~ e', e);
    console.log(e.clientX);
    // console.log('handleMouseOver');
    // console.log(
    //   '🚀 ~ file: App.js ~ line 11 ~ handleMouseOverHandler ~ ref.current.src',
    //   ref.current
    // );
    setXPos(e.clientX);
    setDataTilt(e.clientX * 10 + '');
    console.log(e.detail);
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
      <Tilt>
        <div>You can put whatever you want inside this</div> {xPos}
      </Tilt>

      <div
        ref={ref}
        onMouseOver={e => handleMouseOverHandler(e)}
        className='your-element'
        data-tilt
        data-tilt-max='5000'
        data-tilt-speed='400'
        style={{ width: 300, height: 300, margin: 10 }}
        data-tilt-perspective={dataTilt}
        perspective='5'
      >
        testing
      </div>
    </div>
  );
}

export default App;
