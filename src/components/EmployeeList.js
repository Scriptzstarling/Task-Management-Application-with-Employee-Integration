import React from "react";

const EmployeeList = ({ employees, deleteEmployee }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Employees</h2>
      {employees.map((employee) => (
        <div
          key={employee.employeeId}
          className="p-4 mb-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all"
        >
          <div className="flex items-center space-x-4">
            {employee.profilePic && (
              <img
                src={employee.profilePic}
                alt={employee.name}
                className="w-10 h-10 rounded-full"
              />
            )}
            <div>
              <p className="font-semibold">{employee.name}</p>
              <p className="text-sm text-gray-400">{employee.email}</p>
              <p className="text-sm text-gray-400">{employee.employeeId}</p>
            </div>
          </div>
          <button
            onClick={() => deleteEmployee(employee.employeeId)}
            className="mt-2 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
          >
            Delete Employee
          </button>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;