// src/components/AddBook.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaUser, FaTags, FaFileImage } from "react-icons/fa"; // Removed unused imports
import img5 from "../assets/img5.jpg";
import toast from "react-hot-toast";

const AddReview = () => { // Changed the component name to match the functionality
  const [name, setName] = useState(""); // Corrected state variable names
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name); // Corrected form data
    formData.append("text", text);

    if (image) {
      formData.append("image", image);
    }

    try {
      console.log(formData);
      const response = await axios.post(
        "https://bookstoreapp123.onrender.com/user/review",
        formData
      );
      toast.success("Review added successfully");
      console.log(response.data);
      setName(""); // Resetting the form
      setText("");
      setImage(null);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${img5})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 w-full max-w-md p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
          {/* Sticky Navbar */}
          <div className="fixed top-0 left-0 w-full z-20">
            <Navbar />
          </div>

          <h1 className="text-2xl font-semibold text-center md:text-4xl text-indigo-600 mt-20">
            Add Your Review
          </h1>

          <form onSubmit={handleSubmit} className="mt-6 space-y-6 text-black">
            <div className="flex flex-col">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <FaUser className="mr-2" /> Name:
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 border rounded-md outline-none bg-gray-100 text-gray-700 focus:ring-2 focus:ring-indigo-500"
                value={name} // Corrected value
                onChange={(e) => setName(e.target.value)} // Corrected onChange handler
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <FaTags className="mr-2" /> Text:
              </label>
              <textarea
                placeholder="Enter your review here..."
                className="w-full px-4 py-2 mt-1 border rounded-md outline-none bg-gray-100 text-gray-700 focus:ring-2 focus:ring-indigo-500"
                value={text} // Corrected value
                onChange={(e) => setText(e.target.value)} // Corrected onChange handler
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <FaFileImage className="mr-2" /> Image:
              </label>
              <input
                type="file"
                className="w-full px-4 py-2 mt-1 border rounded-md outline-none bg-gray-100 text-gray-700 focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            >
              Add Review
            </button>
          </form>

          <Link to="/">
            <button className="w-full mt-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AddReview; // Exporting with the corrected name
