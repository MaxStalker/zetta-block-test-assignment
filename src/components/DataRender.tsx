import { DataRendererProps, Item } from "../types";
import { useState } from "react";

const SingleRow = (props: Item) => {
  const [expanded, setExpanded] = useState(false);
  // const expanded = true;
  const { id, description, updatedAt, createdAt, name } = props;
  return (
    <>
      <tr
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <td>{id}</td>
        <td>{name}</td>
        <td>{createdAt}</td>
        <td>{updatedAt}</td>
      </tr>
      {expanded && (
        <tr>
          <td colSpan="3">
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
