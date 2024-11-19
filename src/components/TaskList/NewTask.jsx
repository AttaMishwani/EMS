import React from "react";

export default function NewTask({ task }) {
  return (
    <div className=" p-5 flex-shrink-0  w-[300px] bg-red-400 rounded-3xl ">
      <div className=" flex justify-between items-center">
        <h3 className="bg-red-500 py-1 px-3 rounded-lg font-medium text-sm">
          {task.priority || "High"}
        </h3>
        <h2 className="bg-red-500  py-1 px-3 rounded-lg font-medium text-sm">
          {task.date || "No Date"}
        </h2>
      </div>
      <h2 className="mt-5 text-xl font-semibold">
        {" "}
        {task.title || "Untitled Task"}
      </h2>
      <p className="text-sm">{task.description || "No Description"}</p>
      <div className="flex  mt-5">
        <button className="bg-green-500 py-1 px-3 text-sm rounded-sm">
          Accept Task
        </button>
      </div>
    </div>
  );
}
