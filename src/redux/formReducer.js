import { BOOK, DELETE_ROW } from "./actionTypes";

const initialState = [];

const formReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case BOOK:
      return [...state, action.payload];
    case DELETE_ROW:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default formReducer;
