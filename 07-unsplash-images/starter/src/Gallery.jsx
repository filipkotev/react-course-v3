import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const VITE_UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const url = `https://api.unsplash.com/photos/?client_id=${VITE_UNSPLASH_KEY}&client=office`

const Gallery = () => {
  const response = useQuery({
    queryKey: ['images'],
    queryFn: async() => {
      const result = await axios.get(url);
      return result.data
    },
  })
console.log(response);
  return (
    <div>Gallery</div>
  )
}

export default Gallery;