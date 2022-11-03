import { MagnifyingGlass } from "phosphor-react";
import { ChangeEvent, useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import { BannerContainer, BannerContent, SearchBox, SearchContainer, SortContainer } from "../styles/components/search";

interface Search{
  title: string
}

export default function Search({title}: Search){
  const { sortMovies } = useContext(MoviesContext)

  function HandleSelectedTitle(event: ChangeEvent<HTMLSelectElement>){
    
    //const mov = fetchMovies(event.target.value)
    //console.log(mov)

    sortMovies(event.target.value)
  }

    return(
    <BannerContainer>
        <BannerContent>
          <h1>{title}</h1>
          <form>
          <SearchContainer>
            <SearchBox>
              <input type="text" name="" id="" placeholder='Search a title'/>
              <MagnifyingGlass size={20} />
            </SearchBox>
            <SortContainer>
              <h2>Sort by</h2>
              <div>
                <select name="Title" id="title" onChange={HandleSelectedTitle}>
                  <option value="ascending">(A-Z)</option>
                  <option value="descending">(Z-A)</option>
                </select>
                <select name="Rating" id="rating">
                  <option value="ascending">Highest</option>
                  <option value="descending">Lowest</option>
                </select>
              </div>
            </SortContainer>
          </SearchContainer>
          </form>
        </BannerContent>
      </BannerContainer>
    )
}