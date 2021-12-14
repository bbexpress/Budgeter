import React from 'react'

function Search(props) {

  const updateSearch =(args)=> {
      console.log(args);
      props.filterExpense(args);
      
    }

  return (
    <div>
      <label htmlFor="searchInput">Search: </label>
      <input type="text" name="searchInput" onChange={(event)=> updateSearch(event.target.value)} />
    </div>
  )
}

export default Search
