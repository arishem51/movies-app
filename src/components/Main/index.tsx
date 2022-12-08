import { Layout } from "antd";
import styled from "styled-components";
import { COLORS } from "../../constant";
import ListMovie from "../ListMovie";
import Search from "../Search";

const { Content } = Layout;

const Wrapper = styled(Content)`
  display: grid;
  place-items: center;
  background-color: ${COLORS.white};
  gap: 24px;
`;

const Main = () => {
  return (
    <Wrapper>
      <Search />
      <ListMovie />
    </Wrapper>
  );
};

export default Main;
