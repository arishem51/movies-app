import { Layout } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { WhiteTitle } from "../Title";

const { Header: LayoutHeader } = Layout;

const Wrapper = styled(LayoutHeader)`
  display: grid;
  align-items: center;
`;

const Header = () => {
  return (
    <Wrapper>
      <Link to="/movies-app">
        <WhiteTitle>Header</WhiteTitle>
      </Link>
    </Wrapper>
  );
};

export default Header;
