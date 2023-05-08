import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// css
import "./starchips.css";

// services
import { getAllStarships } from "../../services/sw-api";


const Starships = () => {
  const [starshipList, setStarshipList] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const data = await getAllStarships();
      // console.log(data);
      setStarshipList(data);
    };
    fetchStarships();
    // console.log(starshipList)
    // console.log(getAllStarships())
  }, []);

  if (!starshipList.length) return <h1>Loading Starships ...</h1>;

  return (
    <div className="starship-card-container">
      {starshipList.map((starship, idx) => (
        <div className="starship-card" key={idx}>
          <Link to={starship.url.slice(21)}>
            <div>
              {starship.name}
            </div>
          </Link>
        </div>
      ))}
      {/* <div>{starship.name}</div> */}
    </div>
  );
};

export default Starships;
