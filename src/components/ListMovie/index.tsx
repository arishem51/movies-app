import { List, Tabs } from "antd";
import { useCallback } from "react";
import styled from "styled-components";
import { useMoviesTheaters } from "../../hook/react-query/movies";
import { Movie } from "../../types/movies";
import CardMovie from "../CardMovie";
import Text from "../Text";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: clamp(300px, 85%, 1500px);
`;

const ListMovie = () => {
  const { isLoading, data, hasNextPage } = useMoviesTheaters();

  const onChange = (key: string) => {
    console.log(key);
  };

  const renderMovies = useCallback((item: Movie) => {
    return (
      <List.Item key={item.id}>
        <CardMovie {...item} />
      </List.Item>
    );
  }, []);

  return (
    <Wrapper>
      <Text size={28} color="black" strong style={{ marginBottom: 10 }}>
        What's Popular
      </Text>
      <Tabs
        onChange={onChange}
        defaultActiveKey="1"
        type="card"
        items={[
          {
            label: "In Theaters",
            key: "1",
            children: (
              <List
                grid={{
                  column: 8,
                  xxl: 8,
                  xl: 7,
                  lg: 6,
                  md: 5,
                  sm: 4,
                  xs: 3,
                }}
                dataSource={data?.pages[0].results || []}
                pagination={{
                  total: 20,
                  pageSize: 8,
                }}
                loading={isLoading}
                renderItem={renderMovies}
              />
            ),
          },
          {
            label: "Top Rated",
            key: "2",
            children: <div>123</div>,
          },
        ]}
      />
    </Wrapper>
  );
};

export default ListMovie;
