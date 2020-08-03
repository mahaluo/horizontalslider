import React from 'react';
import {HorizontalScroll} from './components/horizontalscroll';
import './app.scss';

function App() {
  return (
    <div className="container">
        <p>scroller below</p>
        
        <div className="scroll-container">
        <HorizontalScroll />
        </div>
    </div>
  );
}

export default App;
