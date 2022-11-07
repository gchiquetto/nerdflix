import { ItemCard } from '../components/ItemCard'
import Search from '../components/Search'

import { GridContainer } from '../styles/pages/container'
import { useContext, useEffect } from 'react'
import { MoviesContext } from '../contexts/MoviesContext'

export default function Home() {
  const {localData} = useContext(MoviesContext)

  useEffect(()=>{},[localData])
  
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
