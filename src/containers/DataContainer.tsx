import { useEffect, useState } from "react";
import { DataContainerProps, DataRendererProps, DataRenderer } from "../types";
import DataRender from "../components/DataRender";

// Let's extract value from environment variables
const defaultEndpoint = import.meta.env.VITE_DATA_ENDPOINT || "";

const fetchData = (endpoint, { setData, setLoading, setError }) => {};

const useFetchData = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.statusText);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

const constructParams = (props: any) => {
  const { sort } = props;

  let params = `?`;
  let sortField = "name";
  let sortDirection = sort ? "asc" : "desc";
  params += `sortBy=${sortField}&order=${sortDirection}`;

  return params;
};

const DataContainer = (props: DataContainerProps) => {
  const [sort, setSort] = useState(true);

  const { endpoint = defaultEndpoint } = props;
  const params = constructParams({ sort });
  const baseURL = `${endpoint}/apis` + params;
  // TODO: Add arguments for sorting and filtering

  const url = baseURL;
  const { data, loading, error } = useFetchData(url);

  return (
    <>
      <p>Loading: {loading.toString()}</p>
      <p>Error: {error.toString()}</p>
      <p>Data Length: {data && data.length}</p>
      {data && <DataRender loading={loading} error={error} data={data} />}
      <button onClick={() => setSort(!sort)}>Sort</button>
    </>
  );
};

export default DataContainer;
