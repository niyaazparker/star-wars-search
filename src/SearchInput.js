import React, { useState } from 'react';


const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <input
      className='w-100 p-2'
      type="text"
      placeholder="Search Star Wars characters..."
      value={query}
      onChange={handleInputChange}
    />
  );
};

export default SearchInput;
