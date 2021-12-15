import React from 'react'
import './Search.css'

function Search(props) {

  const updateSearch =(args)=> {
      console.log(args);
      props.filterExpense(args);
      
    }

  return (
    <div>
      <label htmlFor="searchInput"><h2>Search: </h2></label>
      <input type="text" name="searchInput" className="search-input" onChange={(event)=> updateSearch(event.target.value)} />
    </div>
  )
}

export default Search
