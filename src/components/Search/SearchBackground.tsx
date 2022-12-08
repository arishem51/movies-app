import { PropsWithChildren } from "react";
import styled from "styled-components";
import { COLORS } from "../../constant";

const Section = styled.section`
  background-image: linear-gradient(
      to right,
      rgba(${COLORS.darkBlue}, 0.8) 0%,
      rgba(${COLORS.darkBlue}, 0) 100%
    ),
    url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/8bcoRX3hQRHufLPSDREdvr3YMXx.jpg");
  width: clamp(300px, 75%, 1700px);
  height: 300px;
  background-position: top center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 45px 35px;
`;

type Props = PropsWithChildren;

const SearchBackground = (props: Props) => {
  return <Section {...props} />;
};

export default SearchBackground;
