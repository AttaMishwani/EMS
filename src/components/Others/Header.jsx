import React, { useState, useEffect } from "react";

const Header = ({ data, changeUser, onAddUserClick }) => {
  const [username, setUsername] = useState("Guest");
  const [showAddUserButton, setShowAddUserButton] = useState(false);

  useEffect(() => {
    if (data && data.name) {
      setUsername(data.name);
    }

    if (data && data.id && data.id.startsWith("A")) {
      setShowAddUserButton(true);
    } else {
      setShowAddUserButton(false);
    }
  }, [data]);

  const handleUserLogOut = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  const handleAddUserClick = () => {
    onAddUserClick(true);
  };

  return (
    <div className="flex p-5 items-end justify-between">
      <h1 className="text-2xl font-medium text-white">
        Hello <br />
        <span className="text-3xl text-white font-semibold">{username} 🖐️</span>
      </h1>

      <div className="gap-2 flex">
        {showAddUserButton && (
          <button
            onClick={handleAddUserClick}
            className="bg-red-500 text-white rounded-sm font-medium text-lg px-5 py-2"
          >
            Add New User
          </button>
        )}

        <button
          onClick={handleUserLogOut}
          className="bg-red-500 text-white rounded-sm font-medium text-lg px-5 py-2"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
