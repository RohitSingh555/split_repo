import React from "react";

const CustomInput = ({
  className,
  type,
  label,
  options,
  handleChange,
  value,
  name,
  required,
}) => {
  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            className={`${className} bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border-2 border-LabelEXP rounded py-2 px-4 block w-full appearance-none`}
            value={value}
            onChange={handleChange}
            name={name}
            required={required}
          />
        );
      case "select":
        return (
          <select
            className={`${className} bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border-2 border-LabelEXP rounded py-2 px-4 block w-full appearance-none`}
            value={value}
            onChange={handleChange}
            name={name}
            required={required}
          >
            <option value="">Select</option>
            {options &&
              options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
          </select>
        );
      default:
        return (
          <input
            className={`${className} bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border-2 border-LabelEXP rounded py-2 px-4 block w-full appearance-none`}
            type={type}
            value={value}
            onChange={handleChange}
            name={name}
            required={required}
          />
        );
    }
  };

  return (
    <div className={className}>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {label}
      </label>
      {renderInput()}
    </div>
  );
};

export default CustomInput;
