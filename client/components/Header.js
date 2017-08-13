import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/Header.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.content}>
        <div className={styles.inner}>
          <a href='' className={styles.title}>argh pcs</a>

          <a href='#mission' onClick={this.props.onCC} className={styles.right}>about</a>
          <a href='#products' className={styles.right}>products</a>
          <a href='#mission' onClick={this.props.fir} className={styles.right}>our mission</a>
        </div>
      </div>
    );
  }
}

Header.PropTypes = {
  onCC: PropTypes.func,
  fir: PropTypes.func,
}
