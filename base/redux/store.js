import { createStore } from 'redux';

const initState = {
  mealList: [
    { name: 'MEAL 1 ', ingredients: ['Ing 12 ', 'Ing 12 ', 'Ing 13'] },
    { name: 'MEAL 2 ', ingredients: ['Ing 12 ', 'Ing 22 ', 'Ing 23'] },
    { name: 'MEAL 3 ', ingredients: ['Ing 13 ', 'Ing 23 ', 'Ing 33'] }
  ]
};

function mealListReducer(state = initState, action) {
  let tempArray = [];
  switch (action.type) {
    case 'SET_STATE_FROM_STORAGE':
      return {
        ...state,
        mealList: action.payload
      };
    case 'ADD_MEAL':
      return {
        ...state,
        mealList: state.mealList.concat(action.payload)
      };
    case 'DELETE_MEAL':
      // Copying, removing element, setting new array
      tempArray = Object.assign([], state.mealList);
      tempArray.splice(state.mealList.indexOf(action.payload), 1);
      return {
        ...state,
        mealList: tempArray
      };
    default:
      return state;
  }
}

const store = createStore(mealListReducer);
export default store;
