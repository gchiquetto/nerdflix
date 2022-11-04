import { MagnifyingGlass } from "phosphor-react";
import { ChangeEvent, useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import { BannerContainer, BannerContent, SearchBox, SearchContainer, SortContainer } from "../styles/components/search";
import { useForm } from 'react-hook-form'

interface Search{
  title: string
}

export default function Search({title}: Search){
  const { sortMovies, searchMovies } = useContext(MoviesContext)
  const { handleSubmit, reset, register } = useForm<Search>()

  function handleSelectedTitle(event: ChangeEvent<HTMLSelectElement>){
    sortMovies(event.target.value)
  }

  function handleSearch({ title }: Search){
    searchMovies(title)
    reset()
  }

    return(
    <BannerContainer>
        <BannerContent>
          <h1>{title}</h1>
          <form onSubmit={handleSubmit(handleSearch)}>
            <SearchContainer>
              <SearchBox>
                <input type="text" placeholder="Search a title" {...register('title')}/>
                <MagnifyingGlass size={20} />
              </SearchBox>
              <SortContainer>
                <h2>Sort by</h2>
                <div>
                  <select name="Title" id="title" onChange={handleSelectedTitle}>
                    <option value="ascending">(A-Z)</option>
                    <option value="descending">(Z-A)</option>
                  </select>
                  <select name="Rating" id="rating" onChange={handleSelectedTitle}>
                    <option value="highest">Highest</option>
                    <option value="lowest">Lowest</option>
                  </select>
                </div>
              </SortContainer>
            </SearchContainer>
          </form>
        </BannerContent>
      </BannerContainer>
    )
}