import { Fragment } from "react";
import Header from "./components/task/Header";
import TaskList from "./components/task/TaskList";

function App() {
  return (
    <Fragment>
      {/* Header Section */}
      <Header />

      {/* TaskList Section */}
      <TaskList />
    </Fragment>
  );
}

export default App;
