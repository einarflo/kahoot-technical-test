import { createStore } from 'redux';
import { ITEM_CLICKED, RESET_GAME } from '../actions/actions';

const initialState = {
    itemsClicked: {},
    itemValues: {
        "red": 50,
        "blue": 30,
        "yellow": 20,
        "green": 15
    },
    itemBonus: {
        "red": 50,
        "blue": 30,
    },
    bonusAtClick: {
        "red": 3,
        "blue": 2,
    },
    availableItems: ["red", "blue", "yellow", "green"]
}

function scoreStore(state = initialState, action) {
    switch (action.type) {
      case ITEM_CLICKED:
        const { itemType } = action;
        return {
            ...state,
            itemsClicked: {
              ...state.itemsClicked,
              [itemType]: {
                ...state.itemsClicked[itemType],
                clicks: state.itemsClicked[itemType] ? state.itemsClicked[itemType].clicks + 1 : 1,
              },
            },
          };
      case RESET_GAME:
        return initialState;
      default:
        return state;
    }
}

export default () => {
    const store = createStore(scoreStore);
    return store;
  };