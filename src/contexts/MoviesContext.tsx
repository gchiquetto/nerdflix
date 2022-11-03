import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import imdbTop50 from '../utils/imdb-top-50.json'

interface MoviesContextProviderProps{
    children: ReactNode
}

interface Movies{
    title: string,
    year: string,
    rating: string,
    urlPoster: string
}

interface MoviesContextType{
    localData?: Movies[]
    sorthMovies: (mode: string) => void
}

export const MoviesContext = createContext({} as MoviesContextType)


export function MoviesContextProvider({children}:MoviesContextProviderProps){
    //const [userLikedMovies, setUserLikedMovies] = useState<UserContextType>()
    //const movies= [...imdbTop50.data.movies].map((movie) => movie)
    const [localData, setLocalData] = useState<Movies[]>()
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchMovies = async() => {
          setLoading(true)
          try {
            const {data: response} = await axios.get('http://localhost:3000/imdb-top-50.json')
            setLocalData(response.data.movies)
          } catch(error){
            setLocalData([])
            console.log(error)
          }
          setLoading(false)
        }
        fetchMovies()
      },[])

    function sorthMovies(mode?: string){
        let moviesSorted = []

        // console.log(mode)
        // if (mode === 'ascending'){
        //     moviesSorted = movies.sort((a, b) => {
        //         if(a.title > b.title) { return 1}
        //         if(b.title > a.title) {return -1}
        //         return 0
        //       })
        //     return moviesSorted
        // } 
        // else if (mode === 'descending'){
        //     console.log('test')
        //     moviesSorted = movies.sort((a, b) => {
        //         if(a.title > b.title) { return -1}
        //         if(b.title > a.title) {return 1}
        //         return 0
        //       })
        //     return moviesSorted
        // }
        // else {
        //     moviesSorted = movies
        // }
    }
    
    return (
        <MoviesContext.Provider value={{localData, sorthMovies}}>{children}</MoviesContext.Provider>
    )
    
}