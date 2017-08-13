import React from 'react';

import ProductCard from './ProductCard.js';

import styles from './styles/Products.scss';
import Image1 from './styles/ppc1.jpg';
import Image2 from './styles/ppc2.png';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const longjump = {
      cpu: 'AMD FX-8350',
      cpuf: 'Waterwash Power',
      gpu: 'AMD R9 270',
      mb: 'MSI Military-Grade Motherboard',
      psu: '700W Corsair Gold Certified PSU'
    };
    return (
      <div className={styles.content}>
        <ProductCard name='Longjump' imageLocation={Image2} price='599.99' specifications={longjump} />
        <ProductCard name='Highjump' imageLocation={Image1} price='899.99' />
      </div>
    );
  }
}
