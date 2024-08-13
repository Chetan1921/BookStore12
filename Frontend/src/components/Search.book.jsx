import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import img7 from  '../assets/img7.jpg';
import Navbar from "./Navbar";

const BookSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://bookstoreapp123.onrender.com/api/book/search?query=${query}`
      );
      console.log(response.data); // Check the response
      setResults(response.data);
    } catch (error) {
      console.error("Error searching for books", error);
    }
  };

  

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${img7})` }}
    >
      <Navbar />
      <div className="absolute inset-0 opacity-80"></div>
      {/* Colorful Overlay */}
      <div className="relative z-10 w-full max-w-3xl px-6 py-8 bg-white bg-opacity-95 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-indigo-700 md:text-4xl">
          Search for a Book
        </h1>

        <form
          onSubmit={handleSearch}
          className="mb-6 flex flex-col items-center space-y-4"
        >
          <input
            type="text"
            placeholder="Search by title, author, or genre"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded-md outline-none bg-gray-100 text-gray-700 focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          >
            Search
          </button>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {results.length > 0 ? (
            results.map((book) => (
              <div
                key={book._id}
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={book.image} // Format the image path
                    alt={book.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {book.title}
                    </h2>
                    <p className="mt-2 text-gray-100">
                      <strong>Author:</strong> {book.author}
                    </p>
                    <p className="mt-1 text-gray-100">
                      <strong>Genre:</strong> {book.genre}
                    </p>
                  </div>
                </div>
                {book.pdf && (
                  <div className="mt-4">
                    <a
                      href={book.pdf} // Ensure this is the correct path to the PDF
                      download
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                    >
                      Download PDF
                    </a>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-700">
              No books found
            </p>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookSearch;
