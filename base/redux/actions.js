export const setStateFromStorage = state => ({
  type: 'SET_STATE_FROM_STORAGE',
  payload: state,
});

export const addMeal = meal => ({
  type: 'ADD_MEAL',
  payload: meal,
});

export const deleteMeal = meal => ({
  type: 'DELETE_MEAL',
  payload: meal,
});
