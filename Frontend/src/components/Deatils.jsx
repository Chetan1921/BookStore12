import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
function Deatils() {
  const location = useLocation();
  const { data } = location.state || {};

  if (!data) {
    return <div>No course data available</div>;
  }
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={data.thumbnailUrl}
            className="max-w-sm rounded-lg shadow-2xl h-96"
          />
          <div>
            <h1 className="text-5xl font-bold">{data.title}</h1>

            <div>
              <br />
              <h3> Categories: {data.categories[0]}</h3>
              <h3> Author: {data.authors[0]}</h3>
            </div>
            <p className="py-6">{data.shortDescription}</p>

            <button className="btn btn-primary">
              <a href={data.link}>READ</a>
            </button>
          </div>
        </div>
      </div>
      <div>
        <Link to="/Course">
          <button className="btn btn-outline btn-primary">BACK</button>
        </Link>
      </div>
    </>
  );
}

export default Deatils;
