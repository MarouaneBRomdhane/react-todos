import React from "react";
import AddTask from "./AddTask";

const Header = () => {
  return (
    <header className="my-todos">
      <h1 className="title">My Todo List</h1>
      {/* AddTask Component */}
      <AddTask />
    </header>
  );
};

export default Header;
