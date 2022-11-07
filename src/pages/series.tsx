import { useContext, useEffect } from "react";
import { ItemCard } from "../components/ItemCard";
import Search from "../components/Search";
import { MoviesContext } from "../contexts/MoviesContext";
import { GridContainer } from "../styles/pages/container";

export default function Series(){
    const {localData} = useContext(MoviesContext)

    useEffect(()=>{},[localData])
  
    return (    
        <>
            <Search title="Series" />
            <GridContainer>
                {localData && 
                    localData.map((movie, i) => <ItemCard key={i} data = {movie}/>)
                }
            </GridContainer>
       </>
    )
}