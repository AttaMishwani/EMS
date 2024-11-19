import React from "react";
import Header from "../Others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data, changeUser }) => {
  // console.log(data);
  return (
    <div className="p-10 h-screen w-screen max-w-[1400px]">
      <Header data={data} changeUser={changeUser} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
