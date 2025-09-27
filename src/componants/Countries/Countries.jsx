import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([])

  const hanldeVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
  };
  const handleVisitedFlags = (flag) => {
    const newVisitedFlags =[...visitedFlags ,flag]
    setVisitedFlags(newVisitedFlags)
  }
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div>
      <h1>Countries tour goal: {countries.length}</h1>
      <h2>Countries Visited : {visitedCountries.length}</h2>
      <ol>
        {
          visitedCountries.map(country => <li>{country.name.common}</li>)
        }
      </ol>
      <div className="flags">
        {
          visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
        }
      </div>
      <h2>Countries Left To Visit :</h2>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            hanldeVisitedCountries={hanldeVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
