import React, { useState } from "react";

const AddEmployee = ({ addEmployee }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && employeeId) {
      const reader = new FileReader();
      reader.onloadend = () => {
        addEmployee({
          name,
          email,
          employeeId,
          profilePic: reader.result,
        });
        setName("");
        setEmail("");
        setEmployeeId("");
        setProfilePic(null);
      };
      if (profilePic) {
        reader.readAsDataURL(profilePic);
      } else {
        addEmployee({ name, email, employeeId, profilePic: "" });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Employee Name"
        className="p-3 w-full rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 mb-3"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Employee Email"
        className="p-3 w-full rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 mb-3"
      />
      <input
        type="text"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        placeholder="Employee ID"
        className="p-3 w-full rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 mb-3"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setProfilePic(e.target.files[0])}
        className="p-3 w-full rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 mb-3"
      />
      <button
        type="submit"
        className="p-3 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all"
      >
        Add Employee
      </button>
    </form>
  );
};

export default AddEmployee;