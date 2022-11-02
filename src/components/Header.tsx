import { HeaderContainer, HeaderContent, HeaderLogo, LikesContainer } from "../styles/components/Header"
import nerdflixLogo from '../assets/nerdflix-logo.svg'
import Image from 'next/image'
import { Star } from 'phosphor-react'

export default function Header(){
    return(  
        <HeaderContainer>
            <HeaderContent>
                <nav>
                    <ul>
                        <li>HomePage</li>
                        <li>Series</li>
                        <li>Movies</li>
                    </ul>
                </nav>
                <HeaderLogo>
                    <Image src={nerdflixLogo} alt="" />
                </HeaderLogo>
                <LikesContainer>
                    <Star size={32} />
                    <p>4</p>
                </LikesContainer>
            </HeaderContent>
        </HeaderContainer>   
    )
}