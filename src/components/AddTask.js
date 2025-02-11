import React, { useState } from "react";

const AddTask = ({ employees, addTask }) => {
  const [task, setTask] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && employeeId) {
      addTask({ text: task, employeeId });
      setTask("");
      setEmployeeId("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="p-3 w-full rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 mb-3"
      />
      <select
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        className="p-3 w-full rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 mb-3"
      >
        <option value="">Select Employee</option>
        {employees.map((employee) => (
          <option key={employee.employeeId} value={employee.employeeId}>
            {employee.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="p-3 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;