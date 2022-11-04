import { Item } from "../types";
import { useEffect, useRef, useState } from "react";
import {
  TableRow,
  Cell,
  TextArea,
  FullWidthCell,
  SmallGreyButton,
  Row,
} from "./styled";
import { useHistory } from "../hooks";

interface SingleRowProps {
  item: Item;
  deleteItem: () => void;
}

const SingleRow = (props: SingleRowProps) => {
  const { item, deleteItem } = props;
  const { id, description, updatedAt, createdAt, name, type } = item;

  const ref = useRef<any>();
  const [expanded, setExpanded] = useState(false);
  const { current, update, undo, redo } = useHistory(description);

  const persistChanges = () => {
    const postURL = `https://62a6bb9697b6156bff7e6251.mockapi.io/v1/apis/${id}`;
    const body = JSON.stringify({ ...props, description: current });
    fetch(postURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error.statusText);
      })
      .finally(() => {});
  };

  const updateItem = () => {
    const { value } = ref.current;
    update(value);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.value = current;
    }
    persistChanges();
  }, [current]);

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
              ref={ref}
              defaultValue={current}
              onChange={(el: any) => {
                const { value } = el.target;
              }}
            />
            <Row justify={"space-between"}>
              <Row justify={"flex-start"}>
                <SmallGreyButton onClick={undo}>Undo</SmallGreyButton>
                <SmallGreyButton onClick={redo}>Redo</SmallGreyButton>
              </Row>
              <Row justify={"flex-end"}>
                <SmallGreyButton onClick={deleteItem}>Delete</SmallGreyButton>
                <SmallGreyButton onClick={updateItem}>Update</SmallGreyButton>
              </Row>
            </Row>
          </FullWidthCell>
        </TableRow>
      )}
    </>
  );
};
export default SingleRow;
