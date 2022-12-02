import { useEffect, useState } from "react";
import GalleryList from "../components/GalleryList";
import Searchbar from "../components/Searchbar/";
import { fetchQuery } from "../utils/fetchApi";

export default function Movies() {
    const [query, setQuery] = useState('');
    const [foundMovies, setFoundMovies] = useState('');

useEffect(() => {
    if (!query) { return }
    fetchQuery(query).then(response => setFoundMovies(response.data.results));
}, [query]);
    
return (
    <main>
        <Searchbar onSubmit={setQuery} />
    {foundMovies && <GalleryList gallery={foundMovies} />}
  </main>
);
}