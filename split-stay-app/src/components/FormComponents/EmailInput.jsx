import React from "react";

const EmailInput = ({ className, type, label }) => {
  return (
    <div className={`${className} mt-8`}>
      <label className="block text-InputLabel text-sm font-medium mb-2">
        {label}
      </label>
      <input
        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border-2 border-Primarycolor rounded py-2 px-4 block w-full appearance-none"
        type={type}
      />
    </div>
  );
};

export default EmailInput;
