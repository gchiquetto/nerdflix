import axios from "axios";
import Image from "next/image";
import { CardOverview, ItemCardContainer } from "../styles/components/itemcard";
import { Star } from 'phosphor-react'

import nerdflix from '../assets/nerdflix-logo.svg'
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";

interface MovieProps{
    title: string,
    year: string,
    rating: string,
    urlPoster: string,
}

interface ItemCardProps{
    data: MovieProps
}

export function ItemCard({data} : ItemCardProps){
    const {userLikedMovies, updateLikedMovies} = useContext(UserContext)
    const [moviePosterUrl, setmoviePosterUrl] = useState("")

    useEffect(()=> {
        fetchMoviePoster()
      },[])

    function handleLike(){
        updateLikedMovies(data.title)
    }

    async function fetchMoviePoster(){
        try{
          const {data: response} = await axios.get(data.urlPoster)
          setmoviePosterUrl(data.urlPoster)
          console.log(moviePosterUrl)
        }catch(error){
            setmoviePosterUrl(nerdflix)
          console.log(error + 'err')
        }
      }

    const movieLiked = userLikedMovies.find(movie => movie === data.title)

    return (
        <ItemCardContainer>
            <Image width={182} height={268} src={moviePosterUrl} alt="" />
            <div className="overlay">
                <button onClick={handleLike} title="Like button">
                    <Star size={17} weight={!!movieLiked ? 'fill' : 'duotone'}/>
                </button>
                
                <div>
                    <h2>{data.rating}</h2>
                </div>
            </div>
            
            <CardOverview>
                <h3>{data.title}</h3>
                <h4>{data.year}</h4>
            </CardOverview>
        </ItemCardContainer>
    )
}