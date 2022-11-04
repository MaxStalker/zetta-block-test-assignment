import { useState } from "react";
import { DataRendererProps, Item } from "../types";
import SingleRow from "./SingleRow";
import { Cell, HeadCell, Table, TableHeader, TableRow } from "./styled";

const DataRender = (props: DataRendererProps) => {
  const [deletedItems, setDeletedItems] = useState<Record<string, any>>({});
  const { data } = props;

  const deleteItem = (id) => () => {
    setDeletedItems({
      ...deletedItems,
      [id]: true,
    });
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <HeadCell>ID</HeadCell>
          <HeadCell>Name</HeadCell>
          <HeadCell>Type</HeadCell>
          <HeadCell>CreatedAt</HeadCell>
          <HeadCell>UpdatedAt</HeadCell>
        </TableRow>
      </TableHeader>
      {data.map((item: Item) => {
        if (!deletedItems[item.id]) {
          return (
            <SingleRow
              item={item}
              key={item.id}
              deleteItem={deleteItem(item.id)}
            />
          );
        }
      })}
    </Table>
  );
};

export default DataRender;
