import { useEffect, useState } from "react"
import GalleryList from "../components/GalleryList"
import { fetchTrending } from "../utils/fetchApi"
import Loader from '../components/Loader';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([])
  const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      fetchTrending()
        .then(trending => setTrendingMovies(trending.data.results))
        .catch(error => console.log('Something went wrong'))
        .finally(() => setLoading(false));
    }, []);
    return (
      <main>
        {loading && <Loader />}
        <GalleryList title="Trending today" gallery={trendingMovies} />
      </main>
    );
}