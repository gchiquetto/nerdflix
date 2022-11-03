import { ItemCard } from '../components/ItemCard'
import Search from '../components/Search'
import imdbTop50 from '../utils/imdb-top-50.json'
import axios from "axios"

import { GridContainer } from '../styles/pages/container'
import { useEffect, useState } from 'react'

interface MovieProps{
  title: string,
  year: string,
  rating: string,
  urlPoster: string
}


export default function Home() {
  const [localData, setLocalData] = useState<MovieProps[]>()
  const [loading, setLoading] = useState(true);
  const movies = [...imdbTop50.data.movies].map((movie) => movie)

  useEffect(()=> {
    const fetchMovies = async() => {
      setLoading(true)
      try {
        const {data: response} = await axios.get('http://localhost:3000/imdb-top-50.json')
        setLocalData(response.data.movies)
      } catch(error){
        console.log(error)
      }
      setLoading(false)
    }
    fetchMovies()
  },[])

  const moviesSorted = movies.sort((a, b) => {
    if(a.title > b.title) { return 1}
    if(b.title > a.title) {return -1}
    return 0
  })

  return (
    <>
      <Search title="Home" />
      <GridContainer>
      {!loading && 
        localData?.map((movie, i) => <ItemCard key={i} data = {movie}/>)
      }
      </GridContainer>

   </>
  )
}
