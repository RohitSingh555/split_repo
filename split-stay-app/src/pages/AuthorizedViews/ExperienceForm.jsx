import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { HomeButtons_Solid } from "../../components/HomeButtons";
import CustomInput from "../../components/FormComponents/CustomInput";

const ExperienceForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    destination: "",
    coverImage: "",
    description: "",
    capacity: "",
    reservedAccommodation: "",
    price: "",
    privacy: false,
    date: "",
    availableRooms: "",
    availableBathrooms: "",
    duration: "",
    accommodationUrl: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const result = await axios.post(
        "http://localhost:3000/userExperienceForm",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (result.status === 200) {
        navigate("/experiences");
      } else {
        console.log(result.status);
      }
      closeModal();
      onSubmit(); // Fetch experiences again
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center md:py-20 py-20 ">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex justify-between items-baseline">
            <h2 className="text-2xl font-medium">Add Experiences</h2>
            <button
              onClick={closeModal}
              type="button"
              className="text-white bg-Black hover:Black focus:outline-none focus:ring-4 focus:ring-gray-300 mb-10 font-medium rounded-lg text-sm px-5 py-2.5 me-2 w-4/12 "
            >
              Close
            </button>
          </div>

          <CustomInput
            className="mb-6"
            type="text"
            label="Destination"
            handleChange={handleChange}
            value={formData.destination}
            name="destination"
            required
          />

          <CustomInput
            className="mb-6"
            type="text"
            label="Cover Image"
            handleChange={handleChange}
            value={formData.coverImage}
            name="coverImage"
          />

          <CustomInput
            className="mb-6"
            type="textarea"
            label="Description"
            handleChange={handleChange}
            value={formData.description}
            name="description"
            required
          />

          <CustomInput
            className="mb-6"
            type="number"
            label="Capacity"
            handleChange={handleChange}
            value={formData.capacity}
            name="capacity"
            required
          />

          <CustomInput
            className="mb-6"
            type="select"
            label="Reserved Accommodation"
            options={["Yes", "No"]}
            handleChange={handleChange}
            value={formData.reservedAccommodation}
            name="reservedAccommodation"
            required
          />

          <CustomInput
            className="mb-6"
            type="number"
            label="Price"
            handleChange={handleChange}
            value={formData.price}
            name="price"
          />

          <CustomInput
            className="mb-6"
            type="date"
            label="Date"
            handleChange={handleChange}
            value={formData.date}
            name="date"
          />

          <CustomInput
            className="mb-6"
            type="number"
            label="Available Rooms"
            handleChange={handleChange}
            value={formData.availableRooms}
            name="availableRooms"
          />

          <CustomInput
            className="mb-6"
            type="number"
            label="Available Bathrooms"
            handleChange={handleChange}
            value={formData.availableBathrooms}
            name="availableBathrooms"
          />

          <CustomInput
            className="mb-6"
            type="text"
            label="Duration"
            handleChange={handleChange}
            value={formData.duration}
            name="duration"
          />

          <CustomInput
            className="mb-6"
            type="text"
            label="Accommodation URL"
            handleChange={handleChange}
            value={formData.accommodationUrl}
            name="accommodationUrl"
          />
          <div className="mb-6">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                name="privacy"
                checked={formData.privacy}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 text-sm font-medium text-gray-900">
                Make it private
              </span>
            </label>
            <span className="block text-xs text-gray-500">
              Open only to people you invite. You won't be able to change this.
            </span>
          </div>

          <HomeButtons_Solid type="submit" className="px-10 w-full">
            Submit
          </HomeButtons_Solid>
          <HomeButtons_Solid className="mt-5 px-10 w-full" onClick={closeModal}>
            Cancel
          </HomeButtons_Solid>
        </form>
      </div>
    </>
  );
};

export default ExperienceForm;
