import React, { useState } from "react";
import "./Country.css";

const Country = ({ country , hanldeVisitedCountries,handleVisitedFlags }) => {
  // console.log(country.population.population);
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    {
      visited ? setVisited(false) : setVisited(true);
    }
    hanldeVisitedCountries(country)
  };
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Population : {country.population.population} </p>

      <p>
        Area ; {country.area.area}{" "}
        {country.area.area > 300000 ? "big country" : "small country"}
      </p>

      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button onClick={()=>handleVisitedFlags(country.flags.flags.png)}>Add visited Flag</button>
    </div>
  );
};

export default Country;
