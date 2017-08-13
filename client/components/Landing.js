import React from 'react';

import Image from './styles/pc.png';

import styles from './styles/Landing.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <h1 className={styles.hook}>Powerful PC builds at affordable prices.</h1>
            <h3 className={styles.catch}>Expertly picked components assembled for high gaming performance. Get the Longjump for a tight budget or the Highjump if you want more power but are still on a budget.</h3>
          </div>
          <div className={styles.right}>
            <div className={styles.image} />
          </div>
        </div>
      </div>
    );
  }
}
