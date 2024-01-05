import { ADDTASK } from "./Actiontype";

const initialState = {
  list: [
    { id: 1, taskName: "learn react", isDone: false },
    { id: 2, taskName: "learn react hooks", isDone: true },
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDTASK:
      return { ...state, list: [...state.list, payload] };

    default:
      return state;
  }
};
