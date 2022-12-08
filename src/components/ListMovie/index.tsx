import { useInfiniteQuery } from "@tanstack/react-query";
import { List, Tabs } from "antd";
import axios from "axios";
import styled from "styled-components";
import { Movie, MoviePage } from "../../types/movies";
import CardMovie from "../CardMovie";
import Text from "../Text";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: clamp(300px, 85%, 1500px);
`;

const ListMovie = () => {
  const { isLoading, data, hasNextPage } = useInfiniteQuery({
    queryKey: ["movies", "infinite"],
    queryFn: async () => {
      const list = await axios.get<MoviePage>(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=9069d3a89486e93b4a352f983c84fff7&language=vi-VN&page=1"
      );
      console.log({ list });
      return list.data;
    },
    getNextPageParam: (lastPage) => {
      return lastPage.total_pages - lastPage.page;
    },
  });

  const onChange = (key: string) => {
    console.log(key);
  };

  const renderMovies = (item: Movie, index: number) => {
    return (
      <List.Item key={`${index}a`}>
        <CardMovie {...item} />
      </List.Item>
    );
  };

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
          // {
          //   label: "Top Rated",
          //   key: "2",
          //   children: renderMovies(),
          // },
        ]}
      />
    </Wrapper>
  );
};

export default ListMovie;
