import { createContext, ReactNode, useEffect, useState } from "react";

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

    useEffect(()=>{
        const storedStateJSON = localStorage.getItem('@nerdflix:liked-movies-1.0.0')
        if(storedStateJSON){
            const likedMoviesStored = JSON.parse(storedStateJSON)
            return setUserLikedMovies([...likedMoviesStored])
        } else {
            setUserLikedMovies([])
        }
    },[])

    useEffect(()=>{
        if (userLikedMovies.length > 0){
            const stateJSON = JSON.stringify(userLikedMovies)
            localStorage.setItem('@nerdflix:liked-movies-1.0.0', stateJSON)
        } 
    },[userLikedMovies])

    function updateLikedMovies(name: string){
        if (userLikedMovies){
            const movieAlreadyLiked = userLikedMovies.find(movie => movie === name)
            
            if (!!movieAlreadyLiked){
                const remainedMovies = userLikedMovies.filter(movie => movie !== name)

                setUserLikedMovies(remainedMovies)

                if (remainedMovies.length === 0){
                    localStorage.removeItem('@nerdflix:liked-movies-1.0.0')
                }
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