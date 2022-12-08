import SearchBackground from "./SearchBackground";
import Text from "../Text";
import { Input } from "antd";
import styled from "styled-components";

const InputSearch = styled(Input.Search)`
  margin-top: 56px;
`;

const FluidTitle = styled.h1`
  font-size: clamp(0.5rem, 2vw + 1rem, 4rem);
  line-height: clamp(0.7rem, 2vw + 1rem, 4.2rem);
  color: white;
  font-weight: bold;
`;

const FluidParagraph = styled.p`
  font-size: clamp(0.5rem, 1vw + 1rem, 3rem);
  line-height: clamp(1rem, 2vw + 1rem, 3rem);
  color: white;
`;

const Search = () => {
  const handleSearch = (value: string) => console.log(value);

  return (
    <SearchBackground>
      <FluidTitle>Welcome</FluidTitle>
      <FluidParagraph>
        Millions of movies, TV shows and people to discover. Explore now.
      </FluidParagraph>
      <InputSearch
        placeholder="Film name"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
      />
    </SearchBackground>
  );
};

export default Search;
