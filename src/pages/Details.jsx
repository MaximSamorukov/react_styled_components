import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { searchByCountryName } from '../utils/config';
import { Button } from '../components/Button';
import Info from '../components/Info';
function Details() {
  const [ countryData, setCountryData] = useState(null);
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(searchByCountryName(name))
      .then(({ data, statusText }) => {
        if (statusText !== 'OK') {
          throw new Error('something wrong with detail request');
        }
        setCountryData(data[0]);
      })
      .catch((error) => {
        console.log(error);
      })
      ;
  }, [name]);

  return (
    <div>
      {countryData && (<Info {...countryData} />)}
      <Button onClick={() => navigate('/')}>
        <IoArrowBack /> Home page
      </Button>
    </div>
  )
}

export default Details