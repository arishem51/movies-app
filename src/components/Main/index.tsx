import { Layout } from "antd";
import styled from "styled-components";
import { COLORS } from "../../constant";
import Search from "../Search";

const { Content } = Layout;

const Wrapper = styled(Content)`
  display: grid;
  place-content: center;
  background-color: ${COLORS.white};
`;

const Main = () => {
  return (
    <Wrapper>
      <Search />
    </Wrapper>
  );
};

export default Main;
