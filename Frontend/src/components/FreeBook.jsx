import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";

function FreeBook() {
  const filterlist = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      img: "https://covers.openlibrary.org/b/id/8225261-L.jpg",
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
      img: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      img: "https://covers.openlibrary.org/b/id/7352167-L.jpg",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      img: "https://covers.openlibrary.org/b/id/8231476-L.jpg",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
      img: "https://covers.openlibrary.org/b/id/8226190-L.jpg",
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      year: 1954,
      img: "https://covers.openlibrary.org/b/id/7777774-L.jpg",
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
      img: "https://covers.openlibrary.org/b/id/7222166-L.jpg",
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      year: 1997,
      img: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    },
    {
      title: "The Chronicles of Narnia",
      author: "C.S. Lewis",
      year: 1950,
      img: "https://covers.openlibrary.org/b/id/8228535-L.jpg",
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      year: 1851,
      img: "https://covers.openlibrary.org/b/id/8235084-L.jpg",
    },
    {
      title: "War and Peace",
      author: "Leo Tolstoy",
      year: 1869,
      img: "https://covers.openlibrary.org/b/id/8235111-L.jpg",
    },
    {
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      year: 1866,
      img: "https://covers.openlibrary.org/b/id/8230981-L.jpg",
    },
    {
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      year: 2003,
      img: "https://covers.openlibrary.org/b/id/8228321-L.jpg",
    },
    {
      title: "The Book Thief",
      author: "Markus Zusak",
      year: 2005,
      img: "https://covers.openlibrary.org/b/id/8228000-L.jpg",
    },
    {
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      year: 1847,
      img: "https://covers.openlibrary.org/b/id/8229697-L.jpg",
    },
    {
      title: "Wuthering Heights",
      author: "Emily Brontë",
      year: 1847,
      img: "https://covers.openlibrary.org/b/id/8228781-L.jpg",
    },
    {
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      year: 1890,
      img: "https://covers.openlibrary.org/b/id/7222247-L.jpg",
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      year: 1932,
      img: "https://covers.openlibrary.org/b/id/8226194-L.jpg",
    },
    {
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      year: 1877,
      img: "https://covers.openlibrary.org/b/id/8229776-L.jpg",
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      year: 1988,
      img: "https://covers.openlibrary.org/b/id/7881042-L.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
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
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10">
      <div className="font-bold text-xl pb-2 text-center">
        <span className="text-blue-700">Free Offer Books</span>
        <p className="text-sm text-gray-700 mt-2">
          At our bookstore, we believe that the joy of reading should be
          accessible to everyone. That's why we offer a selection of free books
          for you to explore and enjoy.
        </p>
      </div>

      <div className="slider-container mt-8">
        <Slider {...settings}>
          {filterlist.map(({ img, title, year, author }) => (
            <div className="space-y-3 text-center p-4" key={title}>
              <img
                src={img}
                alt={title}
                className="h-[220px] w-[150px] mx-auto object-cover rounded-md"
              />
              <div className="mt-4">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-gray-600">{author}</p>
                <div className="flex justify-center items-center gap-1 mt-2">
                  <FaStar className="text-yellow-500" />
                  <span className="text-sm text-gray-600">{year}</span>
                </div>
                <button
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                  onClick={() => window.alert(`Downloading PDF for ${title}`)}
                >
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FreeBook;
