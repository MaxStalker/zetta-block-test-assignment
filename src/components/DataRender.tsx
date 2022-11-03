import { DataRendererProps, Item } from "../types";
import { useState } from "react";
import { useDataStore } from "../state";

export const SingleRow = (props: any) => {
  const item = useDataStore((state: any) => state.dictionary[props.id]);
  const update = useDataStore((state: any) => state.update);

  const [expanded, setExpanded] = useState(false);
  const { id, description, updatedAt, createdAt, name } = item;
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
            <div
              style={{ padding: "20px" }}
              onClick={() => {
                update(id, "description", "Noice!");
              }}
            >
              {description}
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

const DataRender = (props: DataRendererProps) => {
  return (
    <>
      <table>
        <tbody>
          {props.items.map((item: Item) => (
            <SingleRow {...item} key={item.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DataRender;
