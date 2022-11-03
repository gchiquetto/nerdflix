import { ItemCard } from '../components/ItemCard'
import Search from '../components/Search'
import imdbTop50 from '../utils/imdb-top-50.json'

import { GridContainer } from '../styles/pages/container'
import { useContext } from 'react'
import { MoviesContext } from '../contexts/MoviesContext'

export default function Home() {
  const {localData} = useContext(MoviesContext)
  
  const moviesSorted = localData?.sort((a, b) => {
    if(a.title > b.title) { return 1 }
    if(b.title > a.title) { return -1 }
    return 0
  })

  return (
    <>
      <Search title="Home" />
      <GridContainer>
      {localData && 
        localData.map((movie, i) => <ItemCard key={i} data = {movie}/>)
      }
      </GridContainer>

   </>
  )
}
