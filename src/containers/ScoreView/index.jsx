import React, { Component } from 'react';
import style from './style.module.scss';
import ScoreBox from '../../components/ScoreBox';
import ListItem from '../../components/ListItem';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { resetGame } from '../../actions/actions';

class ScoreView extends Component {

    getScore = () => {
        let score = 0;
        Object.keys(this.props.itemsClicked).map((item, index) => {
            score += this.props.itemsClicked[item].clicks * this.props.itemValues[item];
        });
        score += this.getBonus();
        return score;
    }

    getBonus = () => {
        let bonus = 0;
        // All items that have been clicked
        Object.keys(this.props.itemsClicked).map((item, index) => {
            // If tcurrent item has bonus
            if(this.props.itemBonus[item]) {
                // if current item has sufficient number of cliks
                if (this.props.itemsClicked[item].clicks >= this.props.bonusAtClick[item]){
                    bonus += (this.props.itemBonus[item] * Math.floor(this.props.itemsClicked[item].clicks / this.props.bonusAtClick[item]));
                }
            }
        });
        return bonus;
    }

    getRowScore = (item) => {
        let score = 0;
        score += this.props.itemsClicked[item].clicks * this.props.itemValues[item];
        if(this.props.itemBonus[item]) {
            // if current item has sufficient number of cliks
            if (this.props.itemsClicked[item].clicks >= this.props.bonusAtClick[item]){
                score += (this.props.itemBonus[item] * Math.floor(this.props.itemsClicked[item].clicks / this.props.bonusAtClick[item]));
            }
        }
        return score;
    }

    render() {
        const { itemsClicked } = this.props;
        return (
            <div className={style.content}>
                
                <div className={style.scoreTable}>
                    {
                        Object.keys(itemsClicked).map((item, index) => {
                            return(
                                <div key={index} className={style.scoreRow}>
                                  <ListItem type={item}/>
                                  <div className={style.clickCount}>x{itemsClicked[item].clicks}</div>
                                  <div className={style.rowScore}>$ {this.getRowScore(item)}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={style.backgroundCircle}></div>
                <ScoreBox scoreCount={this.getScore()} bonusCount={this.getBonus()} resetGame={this.props.resetGame}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    itemsClicked: state.itemsClicked,
    itemValues: state.itemValues,
    itemBonus: state.itemBonus,
    bonusAtClick: state.bonusAtClick
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    resetGame,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ScoreView);
