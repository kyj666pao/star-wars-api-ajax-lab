import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// css
import "./starshipPage.css";

// services
import { getStarship, getPilots } from "../../services/sw-api";

const StarshipPage = () => {
  const [starshipInfo, setStarshipInfo] = useState({});
  const { starshipId } = useParams();
  const [pilotList, setpilotList] = useState([]);
  //   console.log(starshipId)

  useEffect(() => {
    const fetchStarship = async () => {
      const data = await getStarship(starshipId);
      let list = [];
      data.pilots.map(async (url) => {
        const pilot = await getPilots(url);
        list = [...list, pilot];
        setpilotList(list);
      });
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
        {!pilotList.length && <h3>Np Pilot</h3>}
        <div className="pilot-list">
          <h4>Pilot:</h4>{" "}
          {pilotList.map((pilot, idx) => (
            <h5 key={idx} className="pilot-name">
              {pilot}
            </h5>
          ))}
        </div>

        <Link to="/starships">Return</Link>
      </div>
    </>
  );
};

export default StarshipPage;
