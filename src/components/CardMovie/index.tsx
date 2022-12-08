import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import styled from "styled-components";
import { BORDER_RADIUS, BOX_SHADOWS } from "../../constant";
import { Movie } from "../../types/movies";
import CircleProgessBar from "../CircleProgressBar";
import Title from "../Title";

const Wrapper = styled.figure``;

const ImageWrapper = styled.div`
  width: clamp(150px, 150px, 150px);
  height: clamp(225px, 225px, 225px);
  box-shadow: ${BOX_SHADOWS[1]};
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${BORDER_RADIUS[8]};
`;

const Anchor = styled.a``;

const Figcaption = styled.figcaption`
  --space: 12px;
  display: flex;
  flex-direction: column;
  margin-top: calc(var(--space) * 2);
  padding: 0 var(--space);
`;

const Paragraph = styled.span`
  opacity: 0.8;
`;

const ProgressBarWrapper = styled("div")`
  --spacing: 7%;
  position: absolute;
  left: var(--spacing);
  bottom: calc(var(--spacing) * -1);
  width: 34px;
`;

type Props = Movie;

const CardMovie = ({ release_date, title, vote_average }: Props) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Anchor href="123">
          <Img src={"123"} />
        </Anchor>
        <ProgressBarWrapper>
          <CircleProgessBar value={vote_average * 10} />
        </ProgressBarWrapper>
      </ImageWrapper>
      <Figcaption>
        <Title level={5}>{title}</Title>
        <Paragraph>{release_date}</Paragraph>
      </Figcaption>
    </Wrapper>
  );
};

export default CardMovie;
