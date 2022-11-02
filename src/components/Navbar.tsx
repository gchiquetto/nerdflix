import Link from "next/link";

export default function Navbar (){
    return(
        <div>
            <ul>
                <li><Link href='/'><p>HomePage</p></Link></li>
                <li><Link href='/series'><p>Series</p></Link></li>
                <li><Link href='/movies'><p>Movies</p></Link></li>
            </ul>
        </div>
    )
}