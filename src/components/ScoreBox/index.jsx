import React, { Component } from 'react';
import style from './style.module.scss';

class ScoreBox extends Component {
  render() {
    return (
        <div className={style.skewBox}>
            <div className={style.unskew}>
                <div className={style.bonus}>Bonus</div>
                <div className={style.bonusCount}>$ {this.props.bonusCount}</div>
                <div className={style.scoreBox}>
                    <div className={style.score}>Score</div>
                    <div className={style.scoreCount}>$ {this.props.scoreCount}</div>
                    <div className={style.resetButton} onClick={() => this.props.resetGame()}>
                        <div className={style.unskew}>
                            <div className={style.buttonText}>reset & try again</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default ScoreBox;
