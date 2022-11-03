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
    sortMovies: (mode: string, name?: string) => void
}

export const MoviesContext = createContext({} as MoviesContextType)


export function MoviesContextProvider({children}:MoviesContextProviderProps){
    //const [userLikedMovies, setUserLikedMovies] = useState<UserContextType>()
    //const movies= [...imdbTop50.data.movies].map((movie) => movie)
    const [localData, setLocalData] = useState<Movies[]>()

    useEffect(()=> {
        const fetchMovies = async() => {
          try {
            const {data: response} = await axios.get('http://localhost:3000/imdb-top-50.json')
            setLocalData(response.data.movies)
          } catch(error){
            setLocalData([])
            console.log(error)
          }
        }
        fetchMovies()
      },[])

    function sortMovies(mode?: string, name?: string){
        let moviesSorted = []

        console.log(mode)
        if (localData){
          if (mode === 'ascending'){
            moviesSorted = localData.sort((a, b) => {
                if(a.title > b.title) { return 1}
                if(b.title > a.title) {return -1}
                return 0
              })
              console.log(moviesSorted)
              return setLocalData([...moviesSorted])
          } 
          else if (mode === 'descending'){
              moviesSorted = localData.sort((a, b) => {
                  if(a.title > b.title) { return -1}
                  if(b.title > a.title) {return 1}
                  return 0
                })
                console.log(moviesSorted)
                return setLocalData([...moviesSorted])
          }
        }        
    }
    
    return (
        <MoviesContext.Provider value={{localData, sortMovies}}>{children}</MoviesContext.Provider>
    )
    
}