// Steps.jsx
import React from 'react';

const Steps = () => {
  return (
    <div className="steps max-w-4xl mx-auto">
      <div className="step">
        <h2 className="text-2xl pb-5 font-medium mb-2">Step 1</h2>
        <p className="text-gray-600 pb-8">Follow this simple step to get started and use this outstanding product</p>
      </div>
      <hr className="step-divider my-4 border-t-2 border-LabelEXP pb-8" />
      <div className="step">
        <h2 className="text-2xl mb:pb-10 pb-3 font-medium mb-2">Step 2</h2>
        <p className="text-gray-600 pb-8">Follow this step to start creating value for your customers</p>
      </div>
      <hr className="step-divider my-4 border-t-2 border-LabelEXP pb-8" />
      <div className="step">
        <h2 className="text-2xl mb:pb-10 pb-3 font-medium mb-2">Step 3</h2>
        <p className="text-gray-600 pb-8">Follow this step to start creating value for your customers</p>
      </div>
    </div>
  );
};
const Steps1 = () => {
  return (
    <div className="steps max-w-4xl mx-auto">
      <div className="step">
        <h2 className="text-2xl pb-5 font-medium mb-2">Step 1</h2>
        <p className="text-gray-600 pb-8">Follow this simple step to get started and use this outstanding product</p>
      </div>
      <hr className="step-divider my-4 border-t-2 border-LabelEXP pb-8" />
      <div className="step">
        <h2 className="text-2xl mb:pb-10 pb-3 font-medium mb-2">Step 2</h2>
        <p className="text-gray-600 pb-8">Follow this step to start creating value for your customers</p>
      </div>
      <hr className="step-divider my-4 border-t-2 border-LabelEXP pb-8" />
      <div className="step">
        <h2 className="text-2xl mb:pb-10 pb-3 font-medium mb-2">Step 3</h2>
        <p className="text-gray-600 pb-8">Now you're done and you've created something very special</p>
      </div>
    </div>
  );
};

export { Steps, Steps1 };
