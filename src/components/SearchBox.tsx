import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { SearchBoxTypes } from '../types'
const SearchBox = ({ query, setQuery, findWeather }: SearchBoxTypes) => {
  return (
    <div>
        <input type="text" placeholder = "Enter city name..." value = {query} onChange = {(e) => setQuery(e.target.value)} />
        <FaSearch onClick = { findWeather }></FaSearch>
    </div>
  )
}

export default SearchBox