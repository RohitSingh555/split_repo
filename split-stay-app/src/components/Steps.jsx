// Steps.jsx
import React from 'react';

const Steps = () => {
  return (
    <div className="steps w-64 mx-auto">
      <div className="step">
        <h2 className="text-2xl pb-5 font-semibold mb-2">Step 1</h2>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <hr className="step-divider my-4 border-t-2 border-gray-100" />
      <div className="step">
        <h2 className="text-2xl mb:pb-10 pb-3 font-semibold mb-2">Step 2</h2>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <hr className="step-divider my-4 border-t-2 border-gray-100" />
      <div className="step">
        <h2 className="text-2xl mb:pb-10 pb-3 font-semibold mb-2">Step 3</h2>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
    </div>
  );
};

export default Steps;
