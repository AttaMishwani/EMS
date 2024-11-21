import React, { useState } from "react";

const AddNewUserForm = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "employee", // Default to employee
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data based on the role
    const userData = {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
    };

    // Check if the user is an employee or admin
    if (newUser.role === "employee") {
      userData.id = `E00${Math.floor(Math.random() * 1000)}`; // Generate unique ID for employee
      userData.taskStats = {
        accepted: 0,
        new: 0,
        completed: 0,
        failed: 0,
      };
      userData.tasks = [];
    } else if (newUser.role === "admin") {
      userData.id = `A00${Math.floor(Math.random() * 1000)}`; // Generate unique ID for admin
    }

    console.log("New User Submitted:", userData);
    // Perform the user creation logic here (API call, form submission, etc.)

    // Reset the form fields
    setNewUser({
      name: "",
      email: "",
      role: "employee", // Reset to default role
      password: "",
    });
  };

  return (
    <form
      className="mx-auto  flex justify-center flex-col items-center py-5 bg-gray-900"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={newUser.name}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-sm"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="role" className="block text-sm font-medium text-white">
          Role:
        </label>
        <select
          id="role"
          name="role"
          value={newUser.role}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-sm"
        >
          <option value="employee">Employee</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-white"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-sm"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white rounded-sm font-medium text-lg px-5 py-2"
      >
        Add User
      </button>
    </form>
  );
};

export default AddNewUserForm;
