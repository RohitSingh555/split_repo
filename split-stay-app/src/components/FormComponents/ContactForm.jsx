import React, { useState } from "react";
import HTwoText from "../h2text";

const ContactForm = () => {
  // State to store input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: new Date().getTime(),
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://hooks.zapier.com/hooks/catch/18820054/3jzm9n5/",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        console.log(
          "Thank you for your message. We will get back to you soon."
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      console.log("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 pt-20 pb-20 rounded-md">
      <HTwoText text="Contact Us" />
      <h4 className="text-lg pt-6 text-gray-600 m-auto text-center">
        Please reach out if you have any questions. We are actively having
        conversations with partners, influencers, collaborators, and investors.
      </h4>
      <form className="pt-12" onSubmit={handleSubmit}>
        <div className="mb-8">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-LabelEXP rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Name"
          />
        </div>
        <div className="mb-8">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-LabelEXP rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Email"
          />
        </div>
        <div className="mb-8">
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-LabelEXP rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border font-medium border-Overlay rounded-md shadow-sm bg-Overlay hover:bg-LabelEXP focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
