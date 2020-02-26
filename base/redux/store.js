import { createStore } from 'redux'

const initState={
  mealList:['MEAL 1',
   'MEAL 2',
   'MEAL 3',
   'MEAL 4',
  //  'MEAL 5',
  //  'MEAL 6',
  //  'MEAL 7',
  //  'MEAL 8',
  //  'MEAL 9',
  //  'MEAL 10',
  //  'MEAL 11',
  //  'MEAL 12',
  //  'MEAL 13',
  //  'MEAL 14',
  //  'MEAL 15',
  //  'MEAL 16',
  //  'MEAL 17',
  //  'MEAL 18',
  //  'MEAL 19',
  //  'MEAL 20',
  //  'MEAL 21',
  //  'MEAL 22',
  //  'MEAL 23',
  //  'MEAL 24',
  //  'MEAL 25',
  //  'MEAL 26',
  //  'MEAL 27',
  //  'MEAL 28',
  ]
}

function mealListReducer(state = initState , action) {
  let tempArray=[];
  switch (action.type) {
   case 'SET_STATE_FROM_STORAGE':
        return { 
        ...state,
        mealList: action.payload
    }
       case 'ADD_MEAL':
        return { 
        ...state,
        mealList: state.mealList.concat(action.payload)
    }
    case 'DELETE_MEAL':
    // Copying, removing element, setting new array
     tempArray = Object.assign([],state.mealList)
     tempArray.splice(state.mealList.indexOf(action.payload),1)
     return { 
        ...state,
        mealList: tempArray
    }
    default:
      return state
  }
}


const store = createStore(mealListReducer)
export default store