import React, { useState, useEffect } from "react";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);

  // Load data from localStorage
  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setEmployees(savedEmployees);
    setTasks(savedTasks);
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [employees, tasks]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (employeeId) => {
    setEmployees(employees.filter((emp) => emp.employeeId !== employeeId));
    setTasks(tasks.filter((task) => task.employeeId !== employeeId));
  };

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    const newText = prompt("Edit task:");
    if (newText) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, text: newText } : task
        )
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto p-4 flex">
        {/* Left Side - Employee Section */}
        <div className="w-1/2 pr-4 border-r border-gray-700">
          <h1 className="text-3xl font-bold mb-6">Employee Management</h1>
          <AddEmployee addEmployee={addEmployee} />
          <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
        </div>

        {/* Right Side - Task Section */}
        <div className="w-1/2 pl-4">
          <h1 className="text-3xl font-bold mb-6">Task Management</h1>
          <AddTask employees={employees} addTask={addTask} />
          <TaskList
            tasks={tasks}
            employees={employees}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;