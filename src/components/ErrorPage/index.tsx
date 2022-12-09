import { useParams, useRouteError } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  place-items: center;
`;

const Text = styled.h1`
  font-size: 46px;
`;

const ErrorPage = () => {
  const params = useParams();
  const error = useRouteError();
  console.log(error, params);
  return (
    <Wrapper>
      <Text>404 Not Found</Text>
    </Wrapper>
  );
};

export default ErrorPage;
