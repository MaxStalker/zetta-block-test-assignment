import { DataRendererProps, Item } from "../types";
import SingleRow from "./SingleRow";
import { Table } from "./styled";

const DataRender = (props: DataRendererProps) => {
  const { data } = props;
  return (
    <Table>
      {data.map((item: Item) => (
        <SingleRow {...item} key={item.id} />
      ))}
    </Table>
  );
};

export default DataRender;
