import React, { useState } from "react";
import Header from "../Others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../Others/AllTask";
import AddNewUserForm from "../Others/AddNewUserForm";

export default function AdminDashboard({ data, changeUser }) {
  // State to control whether to show Add New User form or not
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  // Function to toggle the Add New User form visibility
  const addUserFormToggle = (showForm) => {
    setShowAddUserForm(showForm); // Correctly set the state
  };

  return (
    <div className="w-full p-10 pb-20">
      {/* Passing data and changeUser to Header, and passing the toggle function */}
      <Header
        data={data}
        changeUser={changeUser}
        onAddUserClick={addUserFormToggle}
      />

      {/* Conditionally render the form or task components */}
      {showAddUserForm ? (
        <AddNewUserForm /> // Replace with actual form component later
      ) : (
        <>
          <CreateTask />
          <AllTask />
        </>
      )}
    </div>
  );
}
