import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    // Navigate to the home page or any other desired page after logout
    navigate("/");
  };

  return (
    <button
      className="flex items-center text-black hover:text-gray-700 focus:outline-none"
      onClick={handleLogout}
    >
      <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 w-8 h-8" />
    </button>
  );
};

export default LogoutButton;
