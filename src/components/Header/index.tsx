import { Layout } from "antd";
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
      <WhiteTitle>Header</WhiteTitle>
    </Wrapper>
  );
};

export default Header;
