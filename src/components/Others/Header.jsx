import React, { useState, useEffect } from "react";

const Header = ({ data, changeUser }) => {
  const [username, setUsername] = useState("Guest");

  useEffect(() => {
    // If `data` is not undefined and has a `name` property, update the username
    if (data && data.name) {
      setUsername(data.name);
    }
  }, [data]);

  const handleUserLogOut = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  return (
    <div className="flex p-5 items-end justify-between">
      <h1 className="text-2xl font-medium text-white">
        Hello <br />
        <span className="text-3xl text-white font-semibold">{username} 🖐️</span>
      </h1>
      <button
        onClick={handleUserLogOut}
        className="bg-red-500 text-white rounded-sm font-medium text-lg px-5 py-2"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
