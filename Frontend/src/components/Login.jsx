import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const userinfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(
        "https://bookstoreapp123.onrender.com/user/login",
        userinfo
      );

      if (res.status === 200) {
        toast.success("Successfully Loged In");
        console.log("Hellow ", res.data.user);
        navigate("/");
        document.getElementById("my_modal_3").close();
        localStorage.setItem("user", JSON.stringify(res.data.user));
        window.location.reload();
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Invalid Email or Password");
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box relative  border border-slate-900 bg-gradient-to-b p-0 overflow-hidden">
          <img
            src={img2}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="dialog"
            className="relative z-10 text-black bg-transparent bg-opacity-70 p-6 rounded-lg"
          >
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              onClick={() => document.getElementById("my_modal_3").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg text-black flex justify-center items-center">
              Login
            </h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                className="w-80 px-3 py-1 border rounded-md outline-none bg-black text-white"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-80 px-3 py-1 border rounded-md outline-none bg-black text-white"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-blue-800 text-white rounded-md px-3 py-1 hover:bg-blue-900">
                Login
              </button>
              <p>
                Not Registered?{" "}
                <Link
                  to="/Signup"
                  className="underline text-red-700 cursor-pointer"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
