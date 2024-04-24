import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({
  imageUrl,
  rating,
  name,
  age,
  occupation,
  education,
  location,
  className,
}) => {
  const styles = {
    background: "rgba(255, 158, 26, 0.37)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5.7px)",
    WebkitBackdropFilter: "blur(5.7px)",
    border: "1px solid rgba(255, 158, 26, 0.37)",
    margin: "10px 10px",
  };
  return (
    <div
      className={`relative  text-white ${className}`}
      style={{ minWidth: "230px", maxHeight: "300px" }}
    >
      <div className="flex items-baseline absolute top-3 left-3 text-Primarycolor">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-yellow-400 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 16.63l-4.15 2.246a.75.75 0 01-1.146-.795l.8-4.664-3.35-3.274a.75.75 0 01.416-1.276l4.654-.677 2.085-4.226a.75.75 0 011.348 0l2.085 4.226 4.654.677a.75.75 0 01.416 1.276l-3.35 3.274.8 4.664a.75.75 0 01-1.146.795L10 16.63z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-sm ">{rating}</p>
      </div>
      <img
        src={imageUrl}
        className="w-full h-full object-fill rounded-md"
        alt="Image"
      />
      <div
        className="absolute bottom-0 text-center left-0 right-0 p-4 bg-gray-900 bg-opacity-75 text-white"
        style={styles}
      >
        <p className="text-sm">
          {name}, {age}
        </p>
        <p className="text-sm">{occupation}</p>
        <p className="text-sm">{education}</p>
        <p className="text-sm">{location}</p>
      </div>
      <div className="flex flex-col mt-4 text-Black font-medium">
        <p className="text-sm text-Black">Verified User</p>
        <p className="text-sm text-Black">London</p>
        <Link to={""} className="text-sm text-Primarycolor ">
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
