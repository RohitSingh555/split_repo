import React from "react";
import HTwoText from "../h2text";

const ContactForm = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 pt-20 pb-20 rounded-md">
      <HTwoText text="Contact Us" />
      <h4 className="text-lg pt-12 text-gray-600 mb-6 m-auto text-center">
        Please reach out if you have any questions. We are actively having
        conversations with partners, influencers, collaborators, and investors.
      </h4>
      <form className="pt-12">
        <div className="mb-8">
          <label
            htmlFor="name"
            className="block text-xl font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="email"
            className="block text-xl font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="message"
            className="block text-xl font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border font-medium border-transparent rounded-md shadow-sm bg-Overlay hover:bg-LabelEXP focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
