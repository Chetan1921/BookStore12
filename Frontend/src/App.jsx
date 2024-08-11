import React from "react";
import Homes from "./home/Homes";
import Detailsmain from "./DETAILS/DETAILMAIN";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import Courses from "./Course/Courses";
import AddBook from "./components/AddBook";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Contact1 from "./Contact/Contact1";
import BookSearch from "./components/Search.book";
import ReviewForm from "./Testimonial/AddTestimonial";
import AboutPage from "./components/About";
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route
          path="/Course"
          element={authUser ? <Courses /> : <Navigate to="/Signup" />}
        />
        <Route path="/data/:id" element={<Detailsmain />} />
        <Route path="/addbook" element={authUser?<AddBook />:<Navigate to="/Signup"/>} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Contact" element={authUser?<Contact1 />:<Navigate to="/Signup"/>} />
        <Route path="/search" element={<BookSearch />} />
        <Route path="/testimonial" element={authUser?<ReviewForm />:<Navigate to="/Signup"/>}/>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
