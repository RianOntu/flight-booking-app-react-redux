import { BOOK } from "./actionTypes";

export const book = (bookObj) => {
  const action={
    type: BOOK,
    payload: { ...bookObj, id: Date.now() },
  
  };
  console.log('action',action);
  
  return action
};

