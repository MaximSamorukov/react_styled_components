import React, { useState, useEffect } from 'react'
import Search from './Search'
import CustomSelect from './CustomSelect';

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
    value: 'America',
    label: 'America',
  },
  {
    value: 'Europe',
    label: 'Europe',
  },
  {
    value: 'Oceania',
    label: 'Oceania',
  },
]

export default function Controls() {
  const [search, setSearch] = useState('')
  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
      />
    </div>
  )
}
