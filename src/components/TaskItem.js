import React from "react";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";

const TaskItem = ({ task, employees, toggleComplete, deleteTask, editTask }) => {
  const employee = employees.find((emp) => emp.employeeId === task.employeeId);

  return (
    <div className="p-4 mb-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all">
      <div className="flex items-center space-x-4 mb-3">
        {employee?.profilePic && (
          <img
            src={employee.profilePic}
            alt={employee.name}
            className="w-10 h-10 rounded-full"
          />
        )}
        <div>
          <p className="font-semibold">{employee?.name}</p>
          <p className="text-sm text-gray-400">{employee?.email}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p
          className={`flex-1 ${task.completed ? "line-through text-gray-400" : ""}`}
        >
          {task.text}
        </p>
        <div className="flex space-x-3">
          <button
            onClick={() => toggleComplete(task.id)}
            className="p-2 rounded-full hover:bg-gray-500 transition-all"
          >
            <FaCheck className="text-green-500" />
          </button>
          <button
            onClick={() => editTask(task.id)}
            className="p-2 rounded-full hover:bg-gray-500 transition-all"
          >
            <FaEdit className="text-blue-500" />
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="p-2 rounded-full hover:bg-gray-500 transition-all"
          >
            <FaTrash className="text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;    