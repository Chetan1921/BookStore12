import React, { useState } from "react";
import coverimg from "../assets/qwerty.jpg";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    const contactInfo = {
      name,
      email,
      message,
    };
    try {
      await axios.post("https://bookstoreapp123.onrender.com/user/Contact", contactInfo);
      toast.success("Thanks for contacting us!");
      setTimeout(() => {
        toast.success("We will contact you soon!");
      }, 1000);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      toast.error("You have Already Contacted!");
      console.log(err);
    }

    console.log(contactInfo);
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-start md:items-center">
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col">
        <div className="absolute top-1/4 left-1/4 md:top-[20%] md:left-[10%] flex flex-col p-4 md:p-0">
          <h1 className="text-3xl md:text-5xl text-black font-extrabold my-4">
            Turn your Ideas into Reality
          </h1>
          <p className="text-lg md:text-xl text-white font-normal">
            Start for free and get attractive offers from the community
          </p>
        </div>
        <img
          src={coverimg}
          className="w-full h-full object-cover"
          alt="Cover"
        />
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gray-100 flex flex-col p-6 md:p-20 justify-center items-center">
        <form
          className="w-full max-w-lg bg-transparent p-8 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl md:text-3xl text-black font-semibold text-center mb-6">
            Contact Page
          </h1>
          <div className="w-full flex flex-col mb-4">
            <label htmlFor="name" className="text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter Your Name"
              className="w-full text-black py-2 px-4 mt-2 bg-transparent border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="w-full flex flex-col mb-4">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full text-black py-2 px-4 mt-2 bg-transparent border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="w-full flex flex-col mb-6">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Message"
              className="w-full text-black py-2 px-4 mt-2 bg-transparent border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg py-3 px-4 transition duration-300"
          >
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
