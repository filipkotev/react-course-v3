import React from 'react'

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;

    if (!searchValue) {
      return window.alert('Enter a value');
    }

    console.log(searchValue)
    e.target.reset();
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