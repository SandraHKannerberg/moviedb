import React from 'react'
import { FilterDropdown } from '../FilterDropDown/FilterDropDown';
import { MovieCard } from '../MovieCard/MovieCard';


export const MovieList = () => {
  return (
    <div>
      <h1>MovieList</h1>
      <FilterDropdown/>
      <MovieCard/>
    </div>
  )
}
