import { useState } from "react";
import { DataContainerProps, DataRendererProps, DataRenderer } from "../types";
import { useFetchData, useDebounce } from "../hooks";
import DataRender from "../components/DataRender";

const constructParams = (props: { sort: boolean; search: string }) => {
  const { sort, search } = props;

  let params = `?`;

  // Sorting
  let sortField = "name";
  let sortDirection = sort ? "asc" : "desc";
  params += `sortBy=${sortField}&order=${sortDirection}`;

  // Filter
  if (search !== "") {
    params += `&search=${search}`;
  }

  return params;
};

const DataContainer = (props: DataContainerProps) => {
  const { filter = "", endpoint } = props;

  const [sort, setSort] = useState(true);
  const [search, setSearch] = useState(filter);
  const debouncedSearch = useDebounce(search, 350);

  const params = constructParams({ sort, search: debouncedSearch });
  const url = `${endpoint}/apis` + params;

  const { data, loading, error } = useFetchData(url);

  return (
    <div style={{ "padding-bottom": "30px" }}>
      <button onClick={() => setSort(!sort)}>Sort</button>
      <input value={search} onChange={(el) => setSearch(el.target.value)} />
      <DataRender loading={loading} error={error} data={data} />
    </div>
  );
};

export default DataContainer;
