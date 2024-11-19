import React from "react";
import Header from "../Others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../Others/AllTask";

export default function AdminDashboard({ data, changeUser }) {
  // console.log(data);
  return (
    <div className=" w-full p-10 pb-20 ">
      <Header data={data} changeUser={changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
}
