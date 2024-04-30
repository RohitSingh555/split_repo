import React from "react";
import { Link } from "react-router-dom";

const LandlordDetails = ({ landlordName, wireText, collectionData }) => {
  const WireText = ({ text }) => {
    return <p className="wire-text font-medium ">{text}</p>;
  };

  const CollectionItem = ({ imageUrl, name, email, url }) => {
    return (
      <div className="collection-item ">
        <Link to={url}>
          <div className="flex gap-5 items-center justify-between hover:bg-Graybg  p-4">
            <div className="flex gap-5 items-center">
              <div className="collection-item-image">
                <img src={imageUrl} alt="Avatar" className="rounded w-20" />
              </div>
              <div className="collection-item-details">
                <p className="collection-item-name font-medium">{name}</p>
                <p className="collection-item-email">{email}</p>
              </div>
            </div>
            <button className="flex items-center space-x-2 bg-transparent text-gray-600 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.464 15.95a.75.75 0 0 1-1.06-1.06L11.94 10 7.404 5.515a.75.75 0 1 1 1.06-1.06l5.75 5.75a.75.75 0 0 1 0 1.06l-5.75 5.75z"
                />
              </svg>
            </button>
          </div>
        </Link>
      </div>
    );
  };

  const CardCollection = () => {
    return (
      <div className="card-collection">
        {collectionData.map((item, index) => (
          <CollectionItem
            key={index}
            imageUrl={item.imageUrl}
            name={item.name}
            email={item.email}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="wire-container w-full">
      <WireText text={wireText} />
      <CardCollection />
    </div>
  );
};

export default LandlordDetails;
