import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// css
import "./starchips.css";

// services
import { getAllStarships, getPilots } from "../../services/sw-api";

const Starships = () => {
  const [starshipList, setStarshipList] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const data = await getAllStarships();
      data.map((starship) => {
        starship.people = [];
        starship.pilots.map(async (url) => {
          const pilot = await getPilots(url);
          starship.people = [...starship.people, pilot];
          setStarshipList(data);
        });
      });
      // setStarshipList(data);
    };
    fetchStarships();
  }, []);

  // useEffect(() => {
  //   starshipList.forEach((e) => {
  //     console.log("---", starshipList.people);
  //   });
  // }, [starshipList]);

  if (!starshipList.length) return <h1>Loading Starships ...</h1>;

  return (
    <div className="starship-card-container">
      {starshipList.map((starship, idx) => (
        <div className="starship-card" key={idx}>
          <Link to={starship.url.slice(21)}><h3>{starship.name}</h3>  </Link>
          {starship.people.length ? (
            <div>
              {starship.people.map((person, idx) => (
                <h5 className="pilot" key={idx}>
                  {person}
                </h5>
              ))}{" "}
            </div>
          ) : (
            <h5>No Pilot</h5>
          )}
        </div>
      ))}
    </div>
  );
};

export default Starships;
