import React, { useEffect, useState } from "react";

import { asyncAtom } from "../state";
import { useAtom } from "jotai";
import { Item } from "../types";
import { SingleRow } from "./DataRender";
import { sortData } from "../utils";

const JotaiTable = () => {
  const [atomData, updateValue] = useAtom(asyncAtom);

  const [reverse, setReverse] = useState(false);
  const [data, setData] = useState(atomData);

  useEffect(() => {
    setData(sortData(reverse, atomData, "name"));
  }, [reverse]);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th onClick={() => setReverse(!reverse)}>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: Item) => (
          <SingleRow {...item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
};

export default JotaiTable;
