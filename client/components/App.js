import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header.js';
import Landing from './Landing.js';
import Description from './Description.js';
import Mission from './Mission.js';
import Legal from './Legal.js';

import styles from './styles/App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goToAbout: 0
    };
    this.handleCustomClick = this.handleCustomClick.bind(this);
    this.handleSecondCustomClick = this.handleSecondCustomClick.bind(this);
  }
  handleCustomClick() {
    this.setState({ goToAbout: 2 });
  }
  handleSecondCustomClick() {
    this.setState({ goToAbout: 0 });
  }
  render() {
    return (
      <div className={styles.content}>
        <Header fir={this.handleSecondCustomClick} onCC={this.handleCustomClick} />
        <Landing />
        <Description />
        <Mission go={this.state.goToAbout} />
        <Legal />
      </div>
    );
  }
}
