import { useDataStore } from "../state";
import { useEffect, useState, Suspense } from "react";
import DataRender from "../components/DataRender";
import { SingleRow } from "../components/DataRender";

const defaultEndpoint = import.meta.env.VITE_DATA_ENDPOINT || "";

const ZustandContainer = () => {
  const items = useDataStore((state: any) => state.ids);
  const fetchData = useDataStore((state: any) => state.fetch);

  useEffect(() => {
    fetchData(defaultEndpoint);
  }, []);

  return (
    <table>
      <tbody>
        {items.map((id: string) => {
          return <SingleRow id={id} key={id} />;
        })}
      </tbody>
    </table>
  );
};

export default ZustandContainer;
