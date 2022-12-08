import { Tabs, List as ListANTD } from "antd";
import { useCallback, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import {
  useMoviesTheaters,
  useMoviesTopRated,
} from "../../hook/react-query/movies";
import { Movie } from "../../types/movies";
import CardMovie from "../CardMovie";
import Text from "../Text";
import List from "./List";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: clamp(300px, 85%, 1900px);
`;

const TABS = {
  theaters: {
    label: "In Theaters",
    key: "1",
  },
  topRated: {
    label: "Top Rated",
    key: "2",
  },
};

const ListMovie = () => {
  const movieTheaters = useMoviesTheaters();

  const movieTopRated = useMoviesTopRated();

  const listPageHasRender = useRef([1]);

  const [currentPage, setCurrentPage] = useState({
    theaterPage: 1,
    topRatedPage: 1,
  });

  const renderItem = useCallback((item: Movie) => {
    return (
      <ListANTD.Item key={item.id}>
        <CardMovie {...item} />
      </ListANTD.Item>
    );
  }, []);

  const theaterMovie = useMemo(
    () =>
      movieTheaters.data?.pages.find(
        (item) => item.page === currentPage.theaterPage
      )?.results || [],
    [currentPage.theaterPage, movieTheaters.data?.pages]
  );

  const theaterPagiConfig = useMemo(
    () => ({
      onChange: (pageSelect: number) => {
        const isPageRender = listPageHasRender.current?.find(
          (item) => item === pageSelect
        );
        // If has next page and page select haven't render yet so fetch new page
        if (movieTheaters.hasNextPage && !isPageRender) {
          movieTheaters.fetchNextPage({ pageParam: pageSelect });
          listPageHasRender.current.push(pageSelect);
        }
        setCurrentPage({
          topRatedPage: currentPage.topRatedPage,
          theaterPage: pageSelect,
        });
      },
      pageSize: 20,
      total: 1000,
      showSizeChanger: false,
    }),
    [currentPage.topRatedPage, movieTheaters]
  );

  const topRatedMovie = useMemo(
    () =>
      movieTopRated.data?.pages.find(
        (item) => item.page === currentPage.topRatedPage
      )?.results || [],
    [currentPage.topRatedPage, movieTopRated.data?.pages]
  );

  const topRatedPagiConfig = useMemo(
    () => ({
      onChange: (pageSelect: number) => {
        const isPageRender = listPageHasRender.current?.find(
          (item) => item === pageSelect
        );
        // If has next page and page select haven't render yet so fetch new page
        if (movieTopRated.hasNextPage && !isPageRender) {
          movieTopRated.fetchNextPage({ pageParam: pageSelect });
          listPageHasRender.current.push(pageSelect);
        }
        setCurrentPage({
          theaterPage: currentPage.theaterPage,
          topRatedPage: pageSelect,
        });
      },
      pageSize: 20,
      total: 1000,
      showSizeChanger: false,
    }),
    [currentPage.theaterPage, movieTopRated]
  );

  return (
    <Wrapper>
      <Text size={28} color="black" strong style={{ marginBottom: 10 }}>
        What's Popular
      </Text>
      <Tabs
        defaultActiveKey={TABS.theaters.key}
        type="card"
        items={[
          {
            label: TABS.theaters.label,
            key: TABS.theaters.key,
            children: (
              <List
                renderItem={renderItem}
                loading={
                  movieTheaters.isFetching || movieTheaters.isFetchingNextPage
                }
                paginationConfig={theaterPagiConfig}
                movies={theaterMovie}
              />
            ),
          },
          {
            label: TABS.topRated.label,
            key: TABS.topRated.key,
            children: (
              <List
                movies={topRatedMovie}
                paginationConfig={topRatedPagiConfig}
                loading={
                  movieTopRated.isFetching || movieTopRated.isFetchingNextPage
                }
                renderItem={renderItem}
              />
            ),
          },
        ]}
      />
    </Wrapper>
  );
};

export default ListMovie;
