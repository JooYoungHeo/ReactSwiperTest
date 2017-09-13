import React from 'react';
import Swiper from 'react-id-swiper';
import styles from './App.css';
import axios from 'axios';

class TestSwiper1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imgList: []
    };

    this.setImgList();
  }

  setImgList() {
    axios.get('http://example.com/').then(result => {
      this.setState({
        imgList: result.data
      });
    });
  }

  render() {
    let imgList = this.state.imgList;
    let divList = [];
    let url = "http://example.com/";

    for (let i = 0 ; i < imgList.length ; i++) {
      let src = url + imgList[i];
      divList.push(
        <div key={i} style={divStyle}><img width="200px" height="200px" src={src} /></div>
      )
    }

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

    return (divList.length > 0)? (
      <div className={styles.container}>
        <Swiper {...params}>
          {divList}
        </Swiper>
      </div>
    ): (<div></div>);
  }
}

export default TestSwiper1;
