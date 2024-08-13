import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get("https://bookstoreapp123.onrender.com/api/book/");
        console.log(response.data.books);
        setBooks(response.data.books); /// check the response
      } catch (err) {
        console.error("Error fetching books:", err);
      }
    };
    getBooks();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">
          <span className="text-blue-700">Welcome!!</span> To Our Paid Courses
          Section
        </h1>
        <p className="mt-8">
          Welcome to our comprehensive course on creating a successful
          bookstore! In this section, we'll dive into the key components that
          make a bookstore not just a place to buy books, but a hub of community
          and culture.
        </p>
        <Link to="/">
          <button className="btn btn-active btn-primary mt-6">Back</button>
        </Link>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3">
          {Books.map((data, index) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Course;
