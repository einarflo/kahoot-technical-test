import React, { Component } from 'react';
import style from './style.module.scss';

class Item extends Component { 


    getStyle = (type) => {
        switch(true) {
            case type === 'green':
                return style.green;
            case type === 'red':
                return style.red;
            case type === 'blue':
                return style.blue;
            case type === 'yellow':
                return style.yellow;
            default:
                return style.red;
        }
    }

    getIcon = (type) => {
        switch(true) {
            case type === 'green':
                return style.square;
            case type === 'red':
                return style.triangle;
            case type === 'blue':
                return style.diamond;
            case type === 'yellow':
                return style.circle;
            default:
                return style.triangle;
        }
    }

  render() {
    const { type } = this.props;
    return (
      <div className={this.getStyle(type)} onClick={() => this.props.buttonClicked(type)}>
        <div className={this.getIcon(type)}></div>
      </div>
    );
  }
}

export default Item;
