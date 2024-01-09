import { ADDTASK, DELETETASK, EDITTASK } from "./Actiontype";
export const addtask = (data) => {
  // localStorage.setItem("data", JSON.stringify([...state.list, payload]));
  return {
    type: ADDTASK,
    payload: data,
  };
};
export const deletetask = (id) => {
  return { type: DELETETASK, payload: id };
};
export const edittask = (id) => {
  return { type: EDITTASK, payload: id - 1 };
};
