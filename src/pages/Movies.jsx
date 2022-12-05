import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import GalleryList from "../components/GalleryList";
import Searchbar from "../components/Searchbar/";
import { fetchQuery } from "../utils/fetchApi";
import Loader from '../components/Loader';

export default function Movies() {
  const [foundMovies, setFoundMovies] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

useEffect(() => {
    if (!query) { return }
    setLoading(true);
    fetchQuery(query)
      .then(response => setFoundMovies(response.data.results))
      .catch(error => console.log('Something went wrong'))
      .finally(() => setLoading(false));
}, [query]);
    
  const handleSumbit = (query) => {
    setSearchParams({query: query});
    
}
return (
  <main>
    <Searchbar onSubmit={handleSumbit} />
    {loading && <Loader />}
    {foundMovies && <GalleryList gallery={foundMovies} />}
  </main>
);
}