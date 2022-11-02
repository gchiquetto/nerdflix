import { ItemCard } from "../components/ItemCard";
import Search from "../components/Search";
import { GridContainer } from "../styles/pages/container";
import imdbTop50 from '../utils/imdb-top-50.json'

export default function Movies(){

    const movies = [...imdbTop50.data.movies].map((movie) => movie)

    return (    
        <>
            <Search title="Movies"/>
            <GridContainer>
                {movies.map((movie, i) => <ItemCard key={i} data = {movie}/>)}
            </GridContainer>
       </>
    )
}