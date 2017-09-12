import React from 'react';
import Swiper from 'react-id-swiper';
import TestSwiper1 from './TestSwiper1';
import TestSwiper2 from './TestSwiper2';
import TestSwiper3 from './TestSwiper3';

class App extends React.Component {
  render() {
    return (
      <div>
        <TestSwiper1/>
        <hr/>
        <TestSwiper2/>
        <hr/>
        <TestSwiper3/>
      </div>
    );
  }
}

export default App;
