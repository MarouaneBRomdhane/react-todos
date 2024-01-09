import React from "react";
import { useDispatch } from "react-redux";
import { deletetask, edittask } from "../../redux/Action";

const Task = ({ task }) => {
  const { id, taskName, isDone } = task;
  const dispatch = useDispatch();
  const onComplete = (event) =>
    edittask((prev) =>
      prev.map((element) =>
        element.id === id ? { ...element, isDone: !element.isDone } : element
      )
    );
  return (
    <li>
      <span className={isDone === true ? "completed" : ""} onClick={onComplete}>
        {taskName}
      </span>
      <i
        className="fa-solid fa-trash-can"
        onClick={() => dispatch(deletetask(id))}
      ></i>
    </li>
  );
};

export default Task;
