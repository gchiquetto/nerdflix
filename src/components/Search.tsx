import { MagnifyingGlass } from "phosphor-react";
import { BannerContainer, BannerContent, SearchBox, SearchContainer, SortContainer } from "../styles/components/search";

interface Search{
  title: string
}

export default function Search({title}: Search){
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
                <select name="Title" id="title">
                  <option value="ascending">(A-Z)</option>
                  <option value="descending ">(Z-A)</option>
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