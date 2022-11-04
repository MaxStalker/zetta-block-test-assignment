import { useEffect, useState } from "react";
import { DataContainerProps } from "../types";
import { useFetchData, useDebounce } from "../hooks";
import DataRender from "../components/DataRender";
import { Content, Row, SmallGreyButton, Filter } from "../components/common";

const constructParams = (props: {
  sort: boolean;
  search: string;
  page: number;
  perPage?: number;
}) => {
  const { sort, search, page, perPage } = props;

  let params = `?`;

  // Sorting
  let sortField = "name";
  let sortDirection = sort ? "asc" : "desc";
  params += `sortBy=${sortField}&order=${sortDirection}`;

  // Filter
  if (search !== "") {
    params += `&search=${search}`;
  }

  if (perPage) {
    params += `&page=${page}&limit=${perPage}`;
  }

  return params;
};

const DataContainer = (props: DataContainerProps) => {
  const { filter = "", endpoint } = props;
  const perPage = 10;
  const [sort, setSort] = useState(true);
  const [search, setSearch] = useState(filter);
  const [page, setPage] = useState(1);
  const debouncedSearch = useDebounce(search, 350);

  const params = constructParams({
    search: debouncedSearch,
    perPage,
    page,
    sort,
  });
  const url = `${endpoint}/apis` + params;

  const { data, loading, error } = useFetchData(url);

  useEffect(() => {
    if (data.length === 0 && page > 1) {
      setPage(page - 1);
    }
  }, [data]);

  return (
    <Content>
      <Filter
        placeholder="Enter search term"
        value={search}
        onChange={(el: any) => setSearch(el.target.value)}
      />
      <DataRender
        loading={loading}
        error={error}
        data={data}
        sort={() => setSort(!sort)}
      />
      <Row>
        <Row justify={"flex-start"}>
          <p>Page: {page}</p>
          <p>Per Page: {perPage}</p>
        </Row>
        <Row justify={"flex-end"}>
          <SmallGreyButton
            disabled={page <= 1}
            onClick={() => {
              let newPage = page - 1;
              if (newPage < 1) {
                newPage = 1;
              }
              setPage(newPage);
            }}
          >
            Prev
          </SmallGreyButton>
          <SmallGreyButton
            disabled={data.length < perPage}
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next
          </SmallGreyButton>
        </Row>
      </Row>
    </Content>
  );
};

export default DataContainer;
