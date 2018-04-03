// CONSTANTS || ACTION TYPES
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const UNDO = "UNDO";
const REDO = "REDO";

// ACTION CREATORS
export function increment(amt) {
  return {
    type: INCREMENT,
    payload: amt
  };
}

export function decrement(amt) {
  return {
    type: DECREMENT,
    payload: amt
  };
}

export function undo() {
  return { type: UNDO };
}

export function redo() {
  return { type: REDO };
}

// INITIAL STATE

const initialState = {
  currentValue: 0,
  futureValues: [],
  previousValues: []
};

// REDUCER

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        currentValue: state.currentValue + action.payload,
        futureValues: [],
        previousValues: [state.currentValue, ...state.previousValues]
      };
    case DECREMENT:
      return {
        currentValue: state.currentValue - action.payload,
        futureValues: [],
        previousValues: [state.currentValue, ...state.previousValues]
      };
    case UNDO:
      return {
        currentValue: state.previousValues[0],
        futureValues: [state.currentValue, ...state.futureValues],
        previousValues: state.previousValues.slice(
          1,
          state.previousValues.length
        )
      };
    case REDO:
      return {
        currentValue: state.futureValues[0],
        futureValues: state.futureValues.slice(1, state.futureValues.length),
        previousValues: [state.currentValue, ...state.previousValues]
      };
    default:
      return state;
  }
}
