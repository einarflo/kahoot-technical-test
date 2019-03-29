import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import style from './style.module.scss';
import Item from '../../components/Item';
import { itemClicked } from '../../actions/actions'

class GameView extends Component {

  render() {
    const { availableItems } = this.props;
    return (
      <div className={style.background}>
        <div className={style.iconBox}>
            {
                availableItems.map((color, index) => {
                    return(<Item key={index} type={color} buttonClicked={this.props.itemClicked}/>)
                })
            }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    availableItems: state.availableItems
  });
  
  const mapDispatchToProps = dispatch => (
    bindActionCreators({
        itemClicked,
      }, dispatch)
  );

export default connect(mapStateToProps, mapDispatchToProps)(GameView);
