import { useEffect, useState } from "react"
import GalleryList from "../components/GalleryList"
import { fetchTrending } from "../utils/fetchApi"

export default function Home() {
    const [trendingMovies, setTrendingMovies] = useState([])
    useEffect(() => {
      fetchTrending().then(trending =>
        setTrendingMovies(trending.data.results)
      );
    }, []);
    return (
        <main>
            <GalleryList title='Trending today' gallery={trendingMovies} />
        </main>
    )
}