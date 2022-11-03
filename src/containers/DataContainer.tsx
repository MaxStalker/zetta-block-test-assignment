import { useEffect, useState } from "react";
import { DataContainerProps, DataRendererProps, DataRenderer } from "../types";

// Let's extract value from environment variables
const defaultEndpoint = import.meta.env.VITE_DATA_ENDPOINT || "";

const DataContainer = (props: DataContainerProps) => {
  const { endpoint = defaultEndpoint } = props;
  const { render } = props;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${endpoint}/apis`)
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
  }, []);

  const table = render({ loading, error, data });
  return(
      <>
        {table}
      </>
  )
};

export default DataContainer;
