import React, { useEffect, useState } from 'react'
import axios from "axios"
import Header from "./components/Header";
import Main from "./components/Main";
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Details from './pages/Details';
import { ALL_COUNTRIES } from './utils/config';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get(ALL_COUNTRIES)
      .then(({ data }) => {
        setCountries(data);
      })
      .catch((error) => {
        console.log('Error ' + error);
      })
  }, []);
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route exact path='/' element={<HomePage countries={countries} />} />
          <Route path='/country/:name' element={<Details/>} />
          <Route element={<NotFound/>} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
