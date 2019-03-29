import React, { Component } from 'react';
import style from './style.module.scss';

class Navigation extends Component {
  render() {
    return (
      <div className={style.navbar}>
        <div className={style.brand}>K!</div>
        <div className={style.hamburger} onClick={() => this.props.showScore()}>☰</div>
      </div>
    );
  }
}

export default Navigation;
