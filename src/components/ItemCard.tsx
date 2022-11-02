import Image from "next/image";
import { CardOverview, ItemCardContainer } from "../styles/components/itemcard";
import { Star } from 'phosphor-react'

export function ItemCard(){
    return (
        <ItemCardContainer>
            <Image width={182} height={268} src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg" alt="" />
            <div className="overlay">
                <button title="Like button">
                    <Star size={17}/>
                </button>
                
                <div>
                    <h2>9.2</h2>
                </div>
            </div>
            
            <CardOverview>
                <h3>The Shawshank Redemption</h3>
                <h4>1994</h4>
            </CardOverview>
        </ItemCardContainer>
    )
}