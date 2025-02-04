import { ADDTASK, DELETETASK, EDITTASK } from "./Actiontype";
const datalist = JSON.parse(localStorage.getItem("data"));

const initialState = {
  list: [
    { id: 1, taskName: "learn react", isDone: false },
    { id: 2, taskName: "learn react hooks", isDone: true },
  ],
};
if (Array.isArray(datalist)) {
  initialState.list = datalist;
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDTASK:
      localStorage.setItem("data", JSON.stringify([...state.list, payload]));

      return { ...state, list: [...state.list, payload] };
    case DELETETASK:
      localStorage.setItem(
        "data",
        JSON.stringify(state.list.filter((e) => e.id !== payload))
      );

      return { ...state, list: state.list.filter((e) => e.id !== payload) };
    case EDITTASK:
      return {
        ...state,
        list: state.list.map((e) =>
          e.id === payload.id ? (e = payload.data) : e
        ),
      };
    default:
      return state;
  }
};
