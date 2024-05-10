import React, { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: email,
      date: new Date().getTime(),
    };

    try {
      const response = await fetch(
        "https://hooks.zapier.com/hooks/catch/18820054/3jzqjq7/",
        {
          method: "POST",
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        console.log("Join Waitlist successful!");
      } else {
        console.error("Failed to join waitlist:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full p-5 flex items-center justify-center  bg-white text-PrimaryColor lg:px-24 pb-24 lg:pb-48">
      <div className=" container flex flex-col xl:flex-row mx-auto px-5 text-gray-500 bg-gray-200 py-5 lg:p-20 shadow-2xl rounded-2xl">
        <div className="w-full mb-6 xl:mb-0 sm:text-center lg:px-24">
          <div className="mb-4 text-gray-900 text-xl lg:text-3xl font-medium">
            Want to be one of our early users? We are still accepting
            submissions
          </div>
        </div>
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center sm:flex-row gap-3 w-full">
              <input
                type="text"
                placeholder="Enter your email"
                className="sm:w-2/4 h-12 p-3 text-PrimaryColor border border-solid border-Overlay rounded-lg shadow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="sm:w-1/4 h-12 text-PrimaryColor bg-Overlay rounded-lg transition-all duration-300 ease-in-out hover:bg-LabelEXP"
              >
                Join Waitlist
              </button>
            </div>
          </form>
          <div className="mt-3 text-sm sm:text-center">
            By clicking Join Waitlist you're confirming that you agree with our
            Terms and Conditions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
