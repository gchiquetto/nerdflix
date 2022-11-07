import { createContext, ReactNode, useState } from "react";

interface UserContextProviderProps{
    children: ReactNode
}


interface UserContextType{
    userLikedMovies: string[]
    updateLikedMovies: (name: string) => void
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({children}:UserContextProviderProps){
    const [userLikedMovies, setUserLikedMovies] = useState<string[]>([])

    function updateLikedMovies(name: string){
        if (userLikedMovies){
            const movieAlreadyLiked = userLikedMovies.find(movie => movie === name)
            
            if (!!movieAlreadyLiked){
                const remainedMovies = userLikedMovies.filter(movie => movie !== name)

                setUserLikedMovies(remainedMovies)
            }
            else {
                setUserLikedMovies((state)=> [...state, name])
            }
            
        } else {
            setUserLikedMovies((state)=> [...state, name])
        }
    }

    return(
        <UserContext.Provider value={{userLikedMovies,updateLikedMovies}}>{children}</UserContext.Provider>
    )
}