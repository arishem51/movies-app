import { QueryClient, useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BORDER_RADIUS, COLORS } from "../../constant";
import { URL_IMG } from "../../services";
import { getTime, movieDetailQuery } from "./movie.helper";

const Wrapper = styled.div``;

const Banner = styled.div<{ pathImg: string }>`
  width: 100vw;
  height: 500px;
  background-image: url(${(props) => URL_IMG + props.pathImg});
  background-position: bottom 100% left 25vw;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: grid;
  padding: 24px 0;
  place-items: center;
`;

const Overlay = styled.div`
  background-image: linear-gradient(
    90deg,
    rgba(31.5, 10.5, 10.5, 1) 25%,
    rgba(31.5, 10.5, 10.5, 0.8) 62%
  );
  position: absolute;
  inset: 0;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
`;

const WrapperImg = styled.figure`
  width: 300px;
  height: 450px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: calc(${BORDER_RADIUS[8]} * 2);
`;

const WrapperTextContent = styled.div`
  padding: 8px;
  width: clamp(500px, 50vw, 1500px);
`;

const Dot = styled.span`
  --size: 32px;
  font-size: var(--size);
  line-height: var(--size);
  color: ${COLORS.white};
  margin-left: calc(1ch / 2);
`;

const WrapperTitle = styled.div`
  display: flex;
  gap: 12px;
  h1,
  span {
    font-size: 42px;
    color: ${COLORS.white};
    line-height: 42px;
  }
  --opacity: 0.7;
`;

const MovieTitle = styled.h1`
  cursor: pointer;
  transition: opacity 100ms;
  &:hover {
    opacity: var(--opacity);
  }
`;

const TextYear = styled.span`
  opacity: var(--opacity);
  font-weight: 400;
`;

const WrapperInfoText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  span {
    color: ${COLORS.white};
  }
`;

const InfoText = styled.span`
  text-indent: 1ch;
`;

const CategoryText = styled(InfoText)`
  cursor: pointer;
  transition: opacity 100ms;
  &:hover {
    opacity: 0.7;
  }
`;

const Italic = styled.i`
  color: ${COLORS.white};
  opacity: 0.8;
  font-size: 18px;
`;

const Overview = styled.h2`
  color: ${COLORS.white};
`;

const OverviewContent = styled.p`
  font-size: 16px;
  color: ${COLORS.white};
  margin: 8px 0;
  text-overflow: clip;
`;

const MovieDetail = () => {
  const params = useParams();
  const { data } = useQuery(movieDetailQuery(params.movieId));
  console.log(data);

  const renderCategory = useCallback(() => {
    return data?.genres.map((item, index) => (
      <CategoryText>{`${item.name}${
        data.genres.length > index + 1 ? ", " : ""
      }`}</CategoryText>
    ));
  }, [data?.genres]);

  return (
    <Wrapper>
      <Banner pathImg={data?.backdrop_path || ""}>
        <Overlay />
        <Content>
          <WrapperImg>
            <Img src={`${URL_IMG + data?.poster_path}`} />
          </WrapperImg>
          <WrapperTextContent>
            <WrapperTitle>
              <MovieTitle>{data?.title}</MovieTitle>
              <TextYear>{`(${data?.release_date.slice(0, 4)})`}</TextYear>
            </WrapperTitle>
            <WrapperInfoText>
              <InfoText>{data?.release_date}</InfoText>
              <InfoText> (VN) </InfoText>
              <Dot>·</Dot>
              {renderCategory()}
              <Dot>·</Dot>
              <InfoText>{getTime(data?.runtime)}</InfoText>
            </WrapperInfoText>
            <Italic>Sức mạnh sinh ra từ thịnh nộ</Italic>
            <Overview>Overview</Overview>
            <OverviewContent>
              Dwayne Johnson sẽ góp mặt trong tác phẩm hành động - phiêu lưu mới
              của New Line Cinema, mang tên BLACK ADAM. Đây là bộ phim đầu tiên
              trên màn ảnh rộng khai thác câu chuyện của siêu anh hùng DC này,
              dưới sự sáng tạo của đạo diễn Jaume Collet-Serra (đạo diễn của
              Jungle Cruise). Gần 5.000 năm sau khi bị cầm tù với quyền năng tối
              thượng từ những vị thần cổ đại, Black Adam (Dwayne Johnson) sẽ
              được giải phóng khỏi nấm mồ chết chóc của mình, mang tới thế giới
              hiện đại một kiểu nhận thức về công lý hoàn toàn mới.
            </OverviewContent>
          </WrapperTextContent>
        </Content>
      </Banner>
    </Wrapper>
  );
};

export default MovieDetail;
