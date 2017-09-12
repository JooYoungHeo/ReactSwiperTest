import React from 'react';
import Swiper from 'react-id-swiper';
import styles from './App.css';

class TestSwiper2 extends React.Component {
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
          <div style={divStyle}><img width="200px" height="200px" src="https://dsh602wr9lxr7.cloudfront.net/suzy3.jpg"/></div>
          <div style={divStyle}><img width="200px" height="200px" src="https://dsh602wr9lxr7.cloudfront.net/suzy4.jpg"/></div>
          <div style={divStyle}><img width="200px" height="200px" src="https://dsh602wr9lxr7.cloudfront.net/suzy5.jpg"/></div>
          <div style={divStyle}><img width="200px" height="200px" src="https://dsh602wr9lxr7.cloudfront.net/suzy.jpg"/></div>
          <div style={divStyle}><img width="180px" height="200px" src="https://dsh602wr9lxr7.cloudfront.net/suzy2.jpg"/></div>
        </Swiper>
      </div>
    );
  }
}

export default TestSwiper2;
