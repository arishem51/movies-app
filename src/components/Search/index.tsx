import SearchBackground from "./SearchBackground";
import Text from "../Text";
import { Input } from "antd";
import styled from "styled-components";

const InputSearch = styled(Input.Search)`
  margin-top: 56px;
`;

const Search = () => {
  const handleSearch = (value: string) => console.log(value);

  return (
    <SearchBackground>
      <Text size={48} strong>
        Welcome
      </Text>
      <Text size={36}>
        Millions of movies, TV shows and people to discover. Explore now.
      </Text>
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
