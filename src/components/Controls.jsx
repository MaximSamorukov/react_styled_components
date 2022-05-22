import React, { useState, useEffect } from 'react'
import Search from './Search'
import CustomSelect from './CustomSelect';
import styled from 'styled-components';

const options = [
  {
    value: 'Africa',
    label: 'Africa',
  },
  {
    value: 'Asia',
    label: 'Asia',
  },
  {
    value: 'Antarctic',
    label: 'Antarctic',
  },
  {
    value: 'Americas',
    label: 'Americas',
  },
  {
    value: 'Europe',
    label: 'Europe',
  },
  {
    value: 'Oceania',
    label: 'Oceania',
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media(min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function Controls({ countries, setFilteredCountries }) {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    const filteredByRegion = countries.filter((i) => {
      if (region?.value) {
        return i.region === region.value;
      } else {
        return true;
      }
    });
    const filteredBySearch = filteredByRegion.filter((i) => {
      if (search) {
        return i.name.official.toLowerCase().includes(search.toLowerCase());
      } else {
        return true;
      }
    });
    setFilteredCountries(filteredBySearch);
    // eslint-disable-next-line
  }, [region, search]);


  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  )
}
