import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import img2 from "../assets/img2.jpg"; // Default image for alt attribute

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("https://bookstoreapp123.onrender.com/user/review");
        setTestimonials(response.data);
        console.log("Testimonials fetched successfully:", response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const formatImagePath = (path) => {
    return path ? `http://localhost:5001/${path.replace(/\\/g, '/')}` : "/default-book.jpg";
  };


  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative py-16 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-[800px] mx-auto">
          <p className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            What our customers say
          </p>
          <h1 className="text-4xl font-bold text-white">Testimonials</h1>
          <p className="text-sm text-gray-200 mt-4">
            Hear from our satisfied customers who love our services.
          </p>
        </div>
        <Slider {...settings}>
          {testimonials.map((data) => (
            <div key={data._id} className="px-4">
              <div className="flex flex-col items-center gap-4 bg-gray-800 p-8 rounded-xl shadow-lg relative">
                <img
                  className="rounded-full w-24 h-24 object-cover shadow-md"
                  src={data.image}
                  alt={img2}
                />
                <p className="text-white text-center">{data.text}</p>
                <h3 className="text-lg font-bold text-yellow-400 mt-4">
                  {data.name}
                </h3>
                <span className="absolute top-0 right-0 text-white text-9xl font-serif transform rotate-180 opacity-10">
                  “
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
