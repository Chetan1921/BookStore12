import React from "react";
import { json, Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const onSubmit = async (data) => {
    const userinfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    try {
      const response = await axios.post(
        "https://bookstoreapp123.onrender.com/user/signup",
        userinfo
      );

      if (response.status === 201) {
        toast.success("Signup Successfully");
        navigate(from, { replace: true });
      }
      localStorage.setItem("user", JSON.stringify(response.data.user));

      if (response.status === 500) {
        alert("Server Error");
      }
    } catch (err) {
      if (err.response.status === 404) {
        console.log(err);
        toast.error("Email already exists Login Instead");
        navigate("/");
        setTimeout(() => {
          document.getElementById("my_modal_3").showModal();
        }, 2000);
      }
    }
  };

  return (
    <div className="relative flex h-screen items-center justify-center bg-cover bg-center">
      <img
        src={img1}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative modal-box w-full max-w-md p-8 bg-transparent bg-opacity-90 shadow-2xl rounded-lg">
        <form
          method="dialog"
          onSubmit={handleSubmit(onSubmit)}
          className="text-black space-y-6"
        >
          {/* Close button */}
          <Link
            to="/"
            className="btn btn-sm btn-circle  bg-blue-700 text-white btn-ghost absolute right-2 top-2"
          >
            X
          </Link>

          {/* Form title */}
          <h3 className="font-bold text-3xl text-center text-indigo-600">
            Sign Up
          </h3>

          {/* Name input */}
          <div className="space-y-1">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-blue-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter Your Full Name"
              className="w-full px-4 py-2 border rounded-md outline-none bg-gray-100 text-black focus:ring-2 focus:ring-indigo-500"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* Email input */}
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-blue-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 border rounded-md outline-none bg-gray-100 text-black focus:ring-2 focus:ring-indigo-500"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* Password input */}
          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-blue-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter Your Password"
              className="w-full px-4 py-2 border rounded-md outline-none bg-gray-100 text-black focus:ring-2 focus:ring-indigo-500"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* Submit button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white rounded-md py-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            >
              Sign Up
            </button>
          </div>

          {/* Redirect to login */}
          <p className="text-center mt-4 text-gray-700">
            Have an account?{" "}
            <Link
              to="/"
              className="text-indigo-600 underline"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
