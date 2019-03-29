import React, { Component } from 'react';
import style from './style.module.scss';
import Navigation from '../components/Navigation';
import GameView from './GameView';
import ScoreView from './ScoreView';

class View extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showScore: false
        }
    }

  render() {
    return (
      <div className={style.content}>
        <Navigation showScore={() => this.setState({ showScore: !this.state.showScore })} />
        <div className={style.wrapper}>
            <div className={style.game}>
                <GameView />
            </div>
            <div data-singleline={this.state.showScore} className={style.score}>
                <ScoreView />
            </div>
        </div>
      </div>
    );
  }
}

export default View;
