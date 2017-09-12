import React from 'react';
import Swiper from 'react-id-swiper';
import styles from './App.css';

class App extends React.Component {
  render() {

    const params = {
      pagination: '.swiper-pagination',
      paginationCustomizedClass: styles.customizeSwiperPagination,
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 30,
      slidePerView: 1,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      nextButtonCustomizedClass: styles.customizeSwiperButton,
      prevButtonCustomizedClass: styles.customizeSwiperButton
    };

    const divStyle = {
      height: '200px',
      textAlign: 'center'
    };

    return (
      <div className={styles.container}>
        <Swiper {...params}>
          <div style={divStyle}><img src="https://dsh602wr9lxr7.cloudfront.net/product/thumbs/9/87.jpg"/></div>
          <div style={divStyle}><img src="https://dsh602wr9lxr7.cloudfront.net/product/thumbs/9/90.jpg"/></div>
          <div style={divStyle}><img src="https://dsh602wr9lxr7.cloudfront.net/product/thumbs/9/91.jpg"/></div>
          <div style={divStyle}><img src="https://dsh602wr9lxr7.cloudfront.net/product/thumbs/9/92.jpg"/></div>
          <div style={divStyle}><img src="https://dsh602wr9lxr7.cloudfront.net/product/thumbs/9/94.jpg"/></div>
        </Swiper>
      </div>
    );
  }
}

export default App;
