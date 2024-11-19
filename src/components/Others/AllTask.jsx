import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = ({ data }) => {
  const authData = useContext(AuthContext);
  // console.log(authData);
  if (!authData) {
    console.log("aiuth data not avialable");
  }
  return (
    <div className="bg-zinc-900 p-5 rounded   h-48 mt-10">
      <div className=" mb-2 flex justify-between px-5 py-2 rounded border-white border-2">
        <h2 className="font-semibold text-white w-1/5">Employee Name</h2>
        <h3 className="font-semibold text-white w-1/5">New Task</h3>
        <h5 className="font-semibold text-white w-1/5">Active Task</h5>
        <h5 className="font-semibold text-white w-1/5">Completed</h5>
        <h5 className="font-semibold text-white w-1/5">Failed</h5>
      </div>
      <div className="h-[80%] overflow-y-auto px-5">
        {authData.employees.map((elem) => {
          return (
            <div
              key={elem.id}
              className="border-2 border-green-500 mb-2 flex justify-between px-4 py-2 rounded"
            >
              <h2 className="text-white w-1/5  font-medium">{elem.name}</h2>
              <h3 className="text-yellow-500 w-1/5 font-medium">
                {elem.taskStats.new}
              </h3>
              <h5 className="text-blue-500 w-1/5 font-medium">
                {elem.taskStats.accepted}
              </h5>
              <h5 className="text-green-500 w-1/5 font-medium">
                {elem.taskStats.completed}
              </h5>
              <h5 className="text-red-500 w-1/5">{elem.taskStats.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
