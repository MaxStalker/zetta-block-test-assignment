import { useState } from "react";
import { DataRendererProps, Item } from "../types";
import SingleRow from "./SingleRow";
import { TableBody, HeadCell, Table, TableHeader, TableRow } from "./common";

const DataRender = (props: DataRendererProps) => {
  const [deletedItems, setDeletedItems] = useState<Record<string, any>>({});
  const { data, sort } = props;

  const deleteItem = (id: string) => () => {
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
          <HeadCell onClick={sort}>Name</HeadCell>
          <HeadCell>Type</HeadCell>
          <HeadCell>CreatedAt</HeadCell>
          <HeadCell>UpdatedAt</HeadCell>
        </TableRow>
      </TableHeader>
      <TableBody>
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
      </TableBody>
    </Table>
  );
};

export default DataRender;
