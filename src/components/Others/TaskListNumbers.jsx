import React from "react";

export default function TaskListNumbers({ data }) {
  return (
    <div className="flex justify-between gap-1 mt-3  w-[100%]">
      <div className="w-[25%] bg-red-500 px-8 py-5 flex flex-col justify-center rounded-3xl">
        <h2 className="text-3xl font-semibold">{data.taskStats.new}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-[25%] bg-blue-600 px-8 py-5 flex flex-col justify-center rounded-3xl">
        <h2 className="text-3xl font-semibold">{data.taskStats.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="w-[25%] bg-pink-500  text-black px-8 py-5 flex flex-col justify-center rounded-3xl">
        <h2 className="text-3xl font-semibold text-black">
          {data.taskStats.accepted}
        </h2>
        <h3 className="text-xl font-medium text-black">Accepted Task</h3>
      </div>
      <div className="w-[25%] bg-green-500 px-8 py-5 flex flex-col justify-center rounded-3xl">
        <h2 className="text-3xl font-semibold">{data.taskStats.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
}
