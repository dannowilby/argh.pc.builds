import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/Products.scss';

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpecs: false,
    };
    this.changeSpecs = this.changeSpecs.bind(this);
  }
  changeSpecs() {
    if(this.state.showSpecs) {
      this.setState({ showSpecs: false });
    } else {
      this.setState({ showSpecs: true });
    }
  }
  render() {
      if(this.state.showSpecs) {
        return(
        <div className={styles.end}>
          <h2 className={styles.title}>{this.props.name}</h2>
          <h3 className={styles.lowerTitle}>Specifications</h3>
          <div className={styles.specifications}>
            <p>CPU: {this.props.specifications.cpu}</p>
            <p>CPU Fan: {this.props.specifications.cpuf}</p>
            <p>Graphics Card: {this.props.specifications.gpu}</p>
            <p>Motherboard: {this.props.specifications.mb}</p>
            <p>Power Supply: {this.props.specifications.psu}</p>
          </div>
          <h3 className={styles.lowerTitle}>Benchmarks</h3>
          <div className={styles.specifications}>
            <p></p>
          </div>
          <div className={styles.proscontent}>
            <a className={styles.pros} onClick={this.changeSpecs}>Go back</a>
          </div>
          <div className={styles.button}>
            <h3 className={styles.buttontext}>Order</h3>
          </div>
        </div>
      );
      } else {
      return (
        <div className={styles.end}>
          <h2 className={styles.title}>{this.props.name}</h2>
          <img className={styles.highend} src={this.props.imageLocation} />
          <h2 className={styles.price}>$ {this.props.price}</h2>
          <div className={styles.proscontent}>
            <a className={styles.pros} onClick={this.changeSpecs}>See benchmarks and specifications</a>
          </div>
          <div className={styles.button}>
            <h3 className={styles.buttontext}>Order</h3>
          </div>
        </div>
      );
    }
  }
}

ProductCard.PropTypes = {
  name: PropTypes.string,
  imageLocation: PropTypes.object,
  price: PropTypes.number,
  specifications: PropTypes.object,
  benchmarks: PropTypes.object
};
