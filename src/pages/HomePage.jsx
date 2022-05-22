import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Controls from "../components/Controls";
import List from '../components/List';
import { Card } from '../components/Card';

function HomePage({ countries }) {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const navigate = useNavigate();

  return (
    <>
      <Controls countries={countries} setFilteredCountries={setFilteredCountries} />
        <List>
          {filteredCountries.map((i, ind) => (
            <Card
              key={i.name.official + String(ind)}
              img={i.flags.png}
              name={i.name.official}
              info={[
                {
                  title: 'Population',
                  description: i.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: i.region,
                },
                {
                  title: 'Capital',
                  description: i.capital[0] || 'no capital',
                }
              ]}
              onClick={() => navigate(`/country/${i.name.official}`)}
            />
          ))}
        </List>
    </>
  )
}

export default HomePage