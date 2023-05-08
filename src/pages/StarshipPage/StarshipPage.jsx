import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// css
import "./starshipPage.css";

// services
import { getStarship } from "../../services/sw-api";

const StarshipPage = () => {
  const [starshipInfo, setStarshipInfo] = useState({});
  const { starshipId } = useParams();
  //   console.log(starshipId)

  useEffect(() => {
    const fetchStarship = async () => {
      const data = await getStarship(starshipId);
      setStarshipInfo(data);
      console.log(setStarshipInfo);
    };
    fetchStarship();
  }, []);

  if (!starshipInfo.name) return <h1>Loading information</h1>;

  return (
    <>
      <div className="starship-info">
        <h3>Name: {starshipInfo.name}</h3>
        <h3>Model: {starshipInfo.model}</h3>
        <Link to="/starships">Return</Link>
      </div>
    </>
  );
};

export default StarshipPage;
