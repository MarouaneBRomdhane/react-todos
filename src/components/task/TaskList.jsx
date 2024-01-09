import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";
const TaskList = () => {
  var todos = useSelector((state) => state.list);

  return (
    <ul className="todo-list">
      {/* Task Component */}
      {todos.map((element) => (
        <Task task={element} key={element.id} />
      ))}
    </ul>
  );
};

export default TaskList;
