import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import LeftArrow from './styles/arrowLeft.png';
import RightArrow from './styles/arrowRight.png';

import styles from './styles/Mission.scss';

export default class Mission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.go == 2) {
      this.refs.slider.slickGoTo(2);
    }
    if(nextProps.go == 0) {
      this.refs.slider.slickGoTo(0);
    }
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
      return(
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title} id='mission'>Our Mission</h2>
          </div>
          <Slider ref='slider' className={styles.statement} {...settings}>
            <div>
                <img className={styles.image} src='https://ak9.picdn.net/shutterstock/videos/2729978/thumb/2.jpg' />
                <h3 className={styles.sectionTitle}>How we work</h3>
                <p className={styles.intro2}>Argh pcs was formed to give people on a budget the alternative they have been looking for: pcs that squeeze as much power as possible out of every dollar spent.</p>
                <p className={styles.intro}>We have a team of veteran builders that research and test our builds for quality and performance. This experience is something you will definitely notice.</p>
            </div>
            <div>
                <img className={styles.image} src='https://ak3.picdn.net/shutterstock/videos/3584774/thumb/1.jpg?i10c=img.resize(height:160)' />
                <h3 className={styles.sectionTitle}>Why we work</h3>
                <p className={styles.intro2}>We believe that the use of computers is invaluable in the development of a better society, so every time someone buys from us, we will donate a portion of the profits to the <a href='https://cdt.org/'>Centre of Democracy and Technology</a>.</p>
                <p className={styles.intro}>If you choose you may pick a different charity, but we chose <a href='https://cdt.org/'>Centre of Democracy and Technology</a> for its far-reaching effects.</p>
            </div>
            <div>
                <h3 className={styles.sectionTitle}>About us</h3>
                <p className={styles.intro2}>Argh pcs was concieved of after we felt that the computers we were buying from the store were extorting people out of their money; people shouldn&#39;t have to pay the seemingly artificially inflated prices which stores charge.</p>
                <h3 className={styles.sectionTitle}>Contact Us</h3>
                <p className={styles.contact}>Email</p>
                <p className={styles.contact}>daniel@arghpcs.com</p>
                <h3 className={styles.sectionTitle}>Leave a Comment</h3>
            </div>
          </Slider>
        </div>);
  }
}

Mission.PropTypes = {
  go: PropTypes.number
};
