import nerdflixLogo from '../assets/nerdflix-logo.svg'
import Image from 'next/image'
import { List, Star } from 'phosphor-react'
import { HeaderContainer, HeaderContent, HeaderLogo, HeaderNav, LikesContainer } from '../styles/components/header'
import Link from 'next/link'
import Navbar from './Navbar'
import { useState } from 'react'
import router, { useRouter } from 'next/router'

export default function Header(){
    const [navbarOpen, setNavbarOpen] = useState(false)
    const router = useRouter();
    return(  
        <HeaderContainer>
            <HeaderContent>
                <button title='Menu'onClick={() => setNavbarOpen(!navbarOpen)}>
                        <List size={24}/>
                </button>
                { navbarOpen && <Navbar/> }
                <HeaderNav>
                    <ul>
                        <li className={router.pathname == "/" ? "active" : ""}><Link  href='/' onClick={() => setNavbarOpen(false)}><p>HomePage</p></Link></li>
                        <li className={router.pathname == "/series" ? "active" : ""}><Link href='/series' ><p>Series</p></Link></li>
                        <li className={router.pathname == "/movies" ? "active" : ""}><Link href='/movies'><p>Movies</p></Link></li>
                    </ul>
                </HeaderNav> 
                
                <HeaderLogo>
                    <Image src={nerdflixLogo} alt="" />
                </HeaderLogo>
                <LikesContainer>
                    <Star size={18} weight="fill" />
                    <p>4</p>
                </LikesContainer>
            </HeaderContent>
        </HeaderContainer>   
    )
}