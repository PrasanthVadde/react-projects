export const initialState = {
  count: 0,
};

const INCREMENT_AGE = "INCREMENT_AGE";
const DECREMENT_AGE = "DECREMENT_AGE";
const RESET = "RESET";

export const incrementAction = {
  type: INCREMENT_AGE,
};
export const decrementAction = {
  type: DECREMENT_AGE,
};
export const resetAction = {
  type: RESET,
};

export const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_AGE:
      return { ...state, count: state.count + 1 };
    case DECREMENT_AGE:
        if(state.count>0) return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };

    default:
      return state;
  }
};
