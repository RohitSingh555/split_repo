import React from "react";

const EmailInput = ({
  className,
  type,
  label,
  userlogin,
  handleChange,
  value,
  required,
  error,
}) => {
  return (
    <div className={`${className} mt-8`}>
      <label className="block text-InputLabel text-sm font-medium mb-2">
        {label}
      </label>
      <input
        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border-2 border-Primarycolor rounded py-2 px-4 block w-full appearance-none"
        type={type}
        onChange={handleChange}
        value={value}
        required={required}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default EmailInput;
