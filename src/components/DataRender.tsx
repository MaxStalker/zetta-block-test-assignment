import { DataRendererProps, Item } from "../types";
import { useEffect, useState } from "react";
import { useDataStore } from "../state";

export const SingleRow = (props: any) => {
  const item = useDataStore((state: any) => state.dictionary[props.id]);
  const description = useDataStore(
    (state: any) => state.dictionary[props.id].description
  );
  const update = useDataStore((state: any) => state.update);

  const [expanded, setExpanded] = useState(false);
  const { id, type, updatedAt, createdAt, name } = item;
  const [descriptionText, setDescriptionText] = useState(description);

  useEffect(() => {
    setDescriptionText(description);
  }, [description]);

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
        <td>{createdAt}</td>
        <td>{updatedAt}</td>
      </tr>
      {expanded && (
        <tr>
          <td colSpan="3">
            <div style={{ padding: "20px" }}>
              <textarea
                value={descriptionText}
                onChange={(input) => {
                  // refactor to make changes only to description
                  setDescriptionText(input.target.value);
                }}
              />
              <button
                onClick={() => {
                  update(id, "description", descriptionText);
                }}
              >
                Update
              </button>
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
