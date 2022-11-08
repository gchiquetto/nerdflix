import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

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
    sortMovies: (mode: string) => void
    searchMovies: (title: string) => void
}

export const MoviesContext = createContext({} as MoviesContextType)


export function MoviesContextProvider({children}:MoviesContextProviderProps){
    const [localData, setLocalData] = useState<Movies[]>()

    useEffect(()=> {
      fetchMovies()
    },[])

    async function fetchMovies(){
      try{
        const {data: response, status} = await axios.get('http://localhost:3000/imdb-top-50.json')
        //if (status === 200) throw new Error (` error: }`)
        setLocalData(response.data.movies)
      }catch(error){
        console.log('err')
        throw error
        setLocalData([])
        console.log(error + 'err')
      }
    }

    function sortMovies(mode?: string){
        let moviesSorted = []
        
        if (localData){
          switch(mode){
            case 'ascending':
              moviesSorted = localData.sort((a, b) => {
                  if(a.title > b.title) { return 1}
                  if(b.title > a.title) {return -1}
                  return 0
                })
              return setLocalData([...moviesSorted])
            case  'descending':
              moviesSorted = localData.sort((a, b) => {
                  if(a.title > b.title) { return -1}
                  if(b.title > a.title) {return 1}
                  return 0
                })
                return setLocalData([...moviesSorted])
            case 'lowest':
              moviesSorted = localData.sort((a, b) => {
                  if(a.rating > b.rating) { return 1}
                  if(b.rating > a.rating) {return -1}
                  return 0
                })
                return setLocalData([...moviesSorted])
            case 'highest':
              moviesSorted = localData.sort((a, b) => {
                  if(a.rating > b.rating) { return -1}
                  if(b.rating > a.rating) {return 1}
                  return 0
                })
                return setLocalData([...moviesSorted])
            default:
              fetchMovies()
          }    
        }        
    }

    function searchMovies(title : string){
      if (title !== '' ) {
        const searchMovies = localData?.filter(movie => movie.title.search(formatSearchTitle(title)) !== -1 && movie)
        console.log(searchMovies)
        return setLocalData(searchMovies)
      } else {
        fetchMovies()
      }
    }

    function formatSearchTitle(title: string){
      return title.split(" ").map(name => title.charAt(0).toUpperCase() + title.slice(1)).join(" ")
    }
    
    return (
        <MoviesContext.Provider value={{localData, sortMovies, searchMovies}}>{children}</MoviesContext.Provider>
    )    
}