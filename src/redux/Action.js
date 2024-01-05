import { ADDTASK } from "./Actiontype";
export const addtask = (data) => {
  return {
    type: ADDTASK,
    payload: data,
  };
};
