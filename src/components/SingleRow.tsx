import { Item } from "../types";
import { useState } from "react";
import { TableRow, Cell, TextArea, FullWidthCell } from "./styled";

interface SingleRowProps {
  item: Item;
  deleteItem: () => void;
}

const SingleRow = (props: SingleRowProps) => {
  const { item, deleteItem } = props;
  const { id, description, updatedAt, createdAt, name, type } = item;

  const [expanded, setExpanded] = useState(false);
  const [localDescription, setLocalDescription] = useState(description);

  const updateItem = () => {
    const postURL = `https://62a6bb9697b6156bff7e6251.mockapi.io/v1/apis/${id}`;
    const body = JSON.stringify({ ...props, description: localDescription });
    fetch(postURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((response) => {
        if (response.ok) {
          console.log("all cool");
          //setResult(response.status);
        }
        throw response;
      })
      .catch((error) => {
        console.error("Error fetching data:", error.statusText);
        // setError(error);
      })
      .finally(() => {
        // setLoading(false);
      });
  };

  return (
    <>
      <TableRow
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <Cell>{id}</Cell>
        <Cell>{name}</Cell>
        <Cell>{type}</Cell>
        <Cell>{createdAt}</Cell>
        <Cell>{updatedAt}</Cell>
      </TableRow>
      {expanded && (
        <TableRow>
          <FullWidthCell>
            <TextArea
              onChange={(el: any) => {
                const { value } = el.target;
                setLocalDescription(value);
              }}
            >
              {localDescription}
            </TextArea>
            <button onClick={updateItem}>Update</button>
            <button onClick={deleteItem}>Delete</button>
          </FullWidthCell>
        </TableRow>
      )}
    </>
  );
};
export default SingleRow;
