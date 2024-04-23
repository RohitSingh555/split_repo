import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; // Import eye and eye-slash icons
import { Link } from "react-router-dom";

const PasswordInput = ({ className, label }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`${className} mt-8 relative`}>
      <div className="flex justify-between items-center">
        <label className="block text-InputLabel text-sm font-medium mb-2">
          {label}
        </label>
        <Link
          to="#"
          className="text-xs text-gray-500"
          style={{ position: "absolute", right: "3%", bottom: "17%" }}
          onClick={togglePasswordVisibility}
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />{" "}
        </Link>
      </div>
      <input
        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border-2 border-Primarycolor rounded py-2 px-4 block w-full appearance-none"
        type={showPassword ? "text" : "password"}
      />
    </div>
  );
};

export default PasswordInput;
