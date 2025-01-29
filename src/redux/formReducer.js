import { BOOK } from "./actionTypes";

const initialState = {
  from: "",
  to: "",
  date: "",
  guests: 0,
  ticketClass: "",
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default formReducer;
