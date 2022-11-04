import create from "zustand";
import { produce } from "immer";
import { devtools } from "zustand/middleware";
import { sortData } from "../utils";

const endpoint = import.meta.env.VITE_DATA_ENDPOINT || "";

export const useDataStore = create(
  devtools((set, get) => ({
    ids: [],
    dictionary: {},
    fetch: async () => {
      const items = await fetch(`${endpoint}/apis`)
        .then((data) => data.json())
        .then((data) => sortData(data, "id", true));

      const { ids, dictionary } = items.reduce(
        (acc, item) => {
          const { id } = item;
          acc.ids.push(id);
          acc.dictionary[id] = item;
          return acc;
        },
        {
          ids: [],
          dictionary: {},
        }
      );
      set({ ids, dictionary }, false, "api/fetchData");
    },
    update: async (id: string, field: string, newValue: any) => {
      const item = get().dictionary[id];
      const updatedItem = {
        ...item,
        [field]: newValue,
      };

      await fetch(`${endpoint}/apis/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      });

      set(
        produce((state: any) => {
          state.dictionary[id][field] = newValue;
        })
      );
    },
  }))
);
