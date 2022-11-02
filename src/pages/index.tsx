import { ItemCard } from '../components/ItemCard'
import Search from '../components/Search'
import imdbTop50 from '../utils/imdb-top-50.json'
import axios from "axios"

import { GridContainer } from '../styles/pages/container'
import { useEffect, useState } from 'react'

export default function Home() {
  const [localData, setLocalData] = useState([])
  const movies = [...imdbTop50.data.movies].map((movie) => movie)

  useEffect(()=> {
    axios.get('../utils/imdb-top-50.json')
    .then((res)=> setLocalData(res.data))
    .catch(err=> console.log(err.message))
  },[])



  return (
    <>
    <Search title="Home" />
    <GridContainer>
      {movies.map((movie, i) => <ItemCard key={i} data = {movie}/>)}
      
    </GridContainer>
   </>
  )
}
