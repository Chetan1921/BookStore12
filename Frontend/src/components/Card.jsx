import React from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Card({ data }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/data/${data.id}`, { state: { data } });
  };
  return (
    <>
      <div className="mt-4 my-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={data.thumbnailUrl} alt={data.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <span className="text-blue-700"> {data.title}</span>
              <div className="badge badge-secondary">{data.language}</div>
            </h2>
            <p>{data.tittle}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{data.year}</div>
              <div className="badge badge-outline  hover:bg-blue-800 hover:text-black">
                <button onClick={handleCardClick}>click</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
