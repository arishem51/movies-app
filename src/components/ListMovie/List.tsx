import { List as ListANTD } from "antd";
import { PaginationConfig } from "antd/es/pagination";
import { ReactNode } from "react";
import { Movie } from "../../types/movies";

type Props = {
  movies: Movie[];
  paginationConfig: PaginationConfig;
  loading: boolean;
  renderItem: (item: Movie, index: number) => ReactNode;
};

const List = ({ movies, paginationConfig, loading, renderItem }: Props) => {
  return (
    <ListANTD
      grid={{
        column: 10,
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
