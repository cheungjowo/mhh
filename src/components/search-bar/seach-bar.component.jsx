import React, { useState } from 'react';
import './search-bar.styles.scss';

const SearchBar = ({ showPreviews }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(searchQuery);
  };

  return (
    <div className={`search-bar-container ${showPreviews && 'show'}`}>
      <form className='search-bar' onSubmit={handleSubmit}>
        <input value={searchQuery} onChange={handleChange} type='text' />
        <button type='submit'>
          <img src='./images/search.png' alt='' />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
