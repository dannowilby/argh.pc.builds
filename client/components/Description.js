import React from 'react';

import Products from './Products.js';

import styles from './styles/Description.scss';

export default class Description extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title} id='products'>Our Products</h2>
        </div>
        <Products />
      </div>
    );
  }
}
