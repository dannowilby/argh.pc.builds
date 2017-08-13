import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/Legal.scss';

export default class Legal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.content}>
        Copyright (c) 2017 Argh pcs All Rights Reserved.
      </div>
    );
  }
}
