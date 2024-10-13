import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './context';

const VITE_UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const url = `https://api.unsplash.com/search/photos?client_id=${VITE_UNSPLASH_ACCESS_KEY}&page=1`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const response = useQuery({
    // If 'searchTerm' is not added to this array, it will always render the cached 'images'
    // once added, changing 'searchTerm' will trigger new GET request, hence update the response
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data
    },
  })

  if (response.isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    )
  }

  if (response.isError) {
    return (
      <section className='image-container'>
        <h4>There was an error...</h4>
      </section>
    )
  }

  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className='image-container'>
        <h4>No results found...</h4>
      </section>
    )
  }
  return (
    <section className='image-container'>
      {results.map(item => {
        const url = item?.urls?.regular;

        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className='img'
          />
        );
      })}
    </section>
  )
}

export default Gallery;