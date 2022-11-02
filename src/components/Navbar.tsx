import Link from "next/link";
import { NavbarContainer } from "../styles/components/navbar";

export default function Navbar (){
    return(
        <NavbarContainer>
            <ul>
                <li><Link href='/'><p>HomePage</p></Link></li>
                <li><Link href='/series'><p>Series</p></Link></li>
                <li><Link href='/movies'><p>Movies</p></Link></li>
            </ul>
        </NavbarContainer>
    )
}