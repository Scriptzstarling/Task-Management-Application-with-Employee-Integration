import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, employees, toggleComplete, deleteTask, editTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-center text-gray-400">No tasks found. Add a new task to get started!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            employees={employees}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;