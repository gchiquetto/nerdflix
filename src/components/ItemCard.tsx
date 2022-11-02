import Image from "next/image";
import { CardOverview, ItemCardContainer } from "../styles/components/itemcard";
import { Star } from 'phosphor-react'

import nerdflix from '../assets/nerdflix-logo.svg'

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
    return (
        <ItemCardContainer>
            {!data.urlPoster? <Image width={182} height={268} src={nerdflix} alt="" />
            : <Image width={182} height={268} src={data.urlPoster} alt="" />}
            
            <div className="overlay">
                <button title="Like button">
                    <Star size={17}/>
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