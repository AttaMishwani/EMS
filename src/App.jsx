import React, { useState, useEffect, useContext } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [authLoaded, setAuthLoaded] = useState(false);
  const authdata = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  // Effect to check if authentication data is loaded
  useEffect(() => {
    if (authdata && authdata.employees && !authLoaded) {
      setAuthLoaded(true);
    }
  }, [authdata, authLoaded]); // Prevents unnecessary re-renders by checking the state

  // Effect to load the user data from localStorage
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);

      // Only set state if it's different from the previous value
      if (userData && userData.role && userData.role !== user) {
        setUser(userData.role);
        setLoggedInUserData(userData.data);
      }
    }
  }, [user]); // Adding `user` as a dependency ensures we don't trigger unnecessary renders

  // Handle login logic
  const handleLogin = (email, password) => {
    if (!authLoaded) {
      alert("Authentication data is still loading, please try again.");
      return;
    }

    // Admin login check
    if (authdata && authdata.admin) {
      const currentAdmin = authdata.admin.find(
        (admin) => admin.email === email && admin.password === password
      );

      if (currentAdmin) {
        setUser("admin");
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
        setLoggedInUserData(currentAdmin);
        return;
      }
    }

    // Employee login check
    if (authdata && authdata.employees) {
      const employee = authdata.employees.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser("employee");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        setLoggedInUserData(employee);
      } else {
        alert("Invalid credentials, employee not found");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  if (!authLoaded) {
    return <p>Loading authentication data...</p>;
  }

  return (
    <div className="app flex justify-center items-center flex-col ">
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && (
        <AdminDashboard changeUser={setUser} data={loggedInUserData} />
      )}
      {user === "employee" && (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </div>
  );
};

export default App;
