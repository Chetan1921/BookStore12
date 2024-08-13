// src/components/AddBook.jsx
import React, { useState } from "react";
import "./AddBook.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaBook, FaUser, FaTags, FaFileImage, FaFilePdf } from "react-icons/fa";
import img1 from "../assets/img1.jpg";
import toast from "react-hot-toast";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState(null);
  const [pdf, setPdf] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("genre", genre);

    if (pdf) {
      formData.append("pdf", pdf);
    }
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post(
        "https://bookstoreapp123.onrender.com/user/Addbook",
        formData
      );
      toast.success("Book added successfully");
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 w-full max-w-md p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
          {/* Sticky Navbar */}
          <div className="fixed top-0 left-0 w-full z-20">
            <Navbar />
          </div>

          <h1 className="text-2xl font-semibold text-center md:text-4xl text-indigo-600 mt-20">
            Add New Book
          </h1>

          <form onSubmit={handleSubmit} className="mt-6 space-y-6 text-black">
            <div className="flex flex-col">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <FaBook className="mr-2" /> Title:
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 border rounded-md outline-none bg-gray-100 text-gray-700 focus:ring-2 focus:ring-indigo-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <FaUser className="mr-2" /> Author:
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 border rounded-md outline-none bg-gray-100 text-gray-700 focus:ring-2 focus:ring-indigo-500"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <FaTags className="mr-2" /> Genre:
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 border rounded-md outline-none bg-gray-100 text-gray-700 focus:ring-2 focus:ring-indigo-500"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
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
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <FaFilePdf className="mr-2" /> PDF (optional):
              </label>
              <input
                type="file"
                className="w-full px-4 py-2 mt-1 border rounded-md outline-none bg-gray-100 text-gray-700 focus:ring-2 focus:ring-indigo-500"
                accept="application/pdf"
                onChange={(e) => setPdf(e.target.files[0])}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            >
              Add Book
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

export default AddBook;
