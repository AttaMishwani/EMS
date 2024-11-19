import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";

export default function TaskList({ data }) {
  return (
    <div
      id="tasklist"
      className="w-full mt-10 py-5 h-[45%] gap-5 overflow-x-auto flex justify-start items-center flex-nowrap"
    >
      {data.tasks.map((task) => {
        if (task.active) {
          return <AcceptTask key={task.id} task={task} />;
        }

        if (task.newTask) {
          return <NewTask key={task.id} task={task} />;
        }

        if (task.completed) {
          return <CompletedTask key={task.id} task={task} />;
        }

        if (task.failed) {
          return <FailedTask key={task.id} task={task} />;
        }

        // Optional: Handle unexpected cases
        console.warn("Task state not recognized:", task);
        return null;
      })}
    </div>
  );
}
