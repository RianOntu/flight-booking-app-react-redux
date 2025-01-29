import { BOOK } from "./actionTypes";

export const book = (bookObj) => {
  return {
    type: BOOK,
    action: bookObj,
  };
};
