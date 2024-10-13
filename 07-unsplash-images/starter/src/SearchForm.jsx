import React from 'react'
import { useGlobalContext } from './context';

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;

    if (!searchValue) {
      return window.alert('Enter a value');
    }

    setSearchTerm(searchValue);
  }
  return (
    <section>
      <form className='search-form' onSubmit={handleSubmit}>
        <h1 className='title'>unsplash images</h1>
        <div className='flex'>
          <input
            type='text'
            className='form-input search-input'
            name='search'
            placeholder='cat'
          />
          <button type='submit' className='btn'>search</button>
        </div>
      </form>
    </section>
  );
}

export default SearchForm