import { List as ListANTD } from "antd";
import { PaginationConfig } from "antd/es/pagination";
import { ReactNode, useEffect, useState } from "react";
import { useDynamicColumn } from "../../hook/useDynamicColumn";
import { Movie } from "../../types/movies";

type Props = {
  movies: Movie[];
  paginationConfig: PaginationConfig;
  loading: boolean;
  renderItem: (item: Movie, index: number) => ReactNode;
};

const List = ({ movies, paginationConfig, loading, renderItem }: Props) => {
  const { column } = useDynamicColumn();
  return (
    <ListANTD
      grid={{
        column,
        gutter: 16,
      }}
      dataSource={movies}
      pagination={paginationConfig}
      loading={loading}
      renderItem={renderItem}
    />
  );
};

export default List;
