import { List, Tabs } from "antd";
import { useCallback, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { useMoviesTheaters } from "../../hook/react-query/movies";
import { Movie } from "../../types/movies";
import CardMovie from "../CardMovie";
import Text from "../Text";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: clamp(300px, 85%, 1900px);
`;

const ListMovie = () => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isFetching } =
    useMoviesTheaters();

  const listPageHasRender = useRef([1]);

  const [currentPage, setCurrentPage] = useState(1);

  const onChange = (key: string) => {
    console.log(key);
  };

  const renderItem = useCallback((item: Movie) => {
    return (
      <List.Item key={item.id}>
        <CardMovie {...item} />
      </List.Item>
    );
  }, []);

  const moviesData = data?.pages.find(
    (item) => item.page === currentPage
  )?.results;

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
                  column: 10,
                  gutter: 16,
                }}
                dataSource={moviesData}
                pagination={{
                  onChange: (pageSelect) => {
                    const isPageRender = listPageHasRender.current?.find(
                      (item) => item === pageSelect
                    );
                    // If has next page and page select haven't render yet so fetch new page
                    if (hasNextPage && !isPageRender) {
                      fetchNextPage({ pageParam: pageSelect });
                      listPageHasRender.current.push(pageSelect);
                    }
                    setCurrentPage(pageSelect);
                  },
                  pageSize: 20,
                  total: 1000,
                  showSizeChanger: false,
                }}
                loading={isFetching || isFetchingNextPage}
                renderItem={renderItem}
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
