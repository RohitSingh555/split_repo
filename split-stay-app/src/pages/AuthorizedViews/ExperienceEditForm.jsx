import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { HomeButtons_Solid } from "../../components/HomeButtons";
import CustomInput from "../../components/FormComponents/CustomInput";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";

const ExperienceEditForm = ({ closeModal, experience }) => {
  const navigate = useNavigate();
  const params = useParams();
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
    duration: {
      startDate: new Date(),
      endDate: new Date(),
    },
    accommodationUrl: "",
  });

  const selectionRange = {
    startDate: formData.duration.startDate,
    endDate: formData.duration.endDate,
    key: "selection",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleChangeDate = (ranges) => {
    if (ranges && ranges.selection) {
      console.log(ranges.selection);
      setFormData((prevData) => ({
        ...prevData,
        duration: ranges.selection,
      }));
    }
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
      const email = localStorage.getItem("userEmail");

      const result = await axios.put(
        `http://localhost:3000/userExperienceForm/${experience._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Email: email,
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
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    console.log("Initialized Form");
    setFormData(experience);
  }, []);

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
            className="mb-6 hidden"
            type="text"
            label="Cover Image"
            handleChange={handleChange}
            value="https://cdn.britannica.com/72/132272-050-E4877C4C/Madrid-Spain.jpg"
            name="coverImage"
          />

          <CustomInput
            className="mb-6"
            type="textarea"
            label="Description"
            handleChange={handleChange}
            value={formData.description}
            name="description"
          />

          <CustomInput
            className="mb-6"
            type="number"
            label="Capacity"
            handleChange={handleChange}
            value={formData.capacity}
            name="capacity"
          />

          <CustomInput
            className="mb-6"
            type="select"
            label="Reserved Accommodation"
            options={["Yes", "No"]}
            handleChange={handleChange}
            value={formData.reservedAccommodation}
            name="reservedAccommodation"
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

          {/* <CustomInput
            className="mb-6"
            type="text"
            label="Duration"
            handleChange={handleChange}
            value={formData.duration}
            name="duration"
          /> */}
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Select Duration
          </label>
          <DateRange
            ranges={[selectionRange]}
            onChange={handleChangeDate}
            className="mb-6"
            value={formData.duration}
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

export default ExperienceEditForm;
