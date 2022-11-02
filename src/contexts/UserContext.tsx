import { createContext, ReactNode, useState } from "react";

interface UserContextProviderProps{
    children: ReactNode
}

interface UserLikedMovies{
    quantity: number,
    movies: string[]
}

interface UserContextType{
    
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({children}:UserContextProviderProps){
    const [userLikedMovies, setUserLikedMovies] = useState<UserLikedMovies>()

    
}