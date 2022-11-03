import { DataRendererProps, Item } from "../types";
import { useState } from "react";

export const SingleRow = (props: Item) => {
  const [expanded, setExpanded] = useState(false);
  // const expanded = true;
  const {
    id,
    type,
    description,
    updatedAt,
    createdAt,
    name,
    query,
    variables,
  } = props;
  return (
    <>
      <tr
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <td>{id}</td>
        <td>{name}</td>
        <td>{type}</td>
        <td>{query || ""}</td>
        <td>{variables ? JSON.stringify(variables) : ""}</td>
      </tr>
      {expanded && (
        <tr>
          <td colSpan="3">
            <h4>Description</h4>
            <div style={{ padding: "20px" }}>{description}</div>
          </td>
        </tr>
      )}
    </>
  );
};

const DataRender = (props: DataRendererProps) => {
  const { loading, error, data } = props;
  console.log({ data });
  return (
    <>
      <div>Loading: {loading.toString()}</div>
      <div>Error: {error}</div>
      <table>
        {data.map((item: Item) => (
          <SingleRow {...item} key={item.id} />
        ))}
      </table>
    </>
  );
};

export default DataRender;
