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
    const [moviePosterUrl, setmoviePosterUrl] = useState(nerdflix)

    useEffect(()=> {
        const fetchMoviePoster = async () => {
            try{
                const {data: response} = await axios.get(data.urlPoster)
                setmoviePosterUrl(data.urlPoster)
              }catch(error){
                  setmoviePosterUrl(nerdflix)
                console.log(error)
              }
        }
        fetchMoviePoster()
      },[data, moviePosterUrl])

    function handleLike(){
        updateLikedMovies(data.title)
    }

    const movieLiked = userLikedMovies.find(movie => movie === data.title)

    return (
        <ItemCardContainer>
            <div className="image-container">
                <Image width={182} height={268} src={moviePosterUrl} alt="" />
            </div>
            
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