import create from "zustand";
import { produce } from "immer";
import { devtools } from "zustand/middleware";
import { sortData } from "../utils";

export const useDataStore = create(
  devtools((set, get) => ({
    ids: [],
    dictionary: {},
    fetch: async (endpoint: string) => {
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
    update: (id: string, field: string, newValue: any) => {
      set(
        produce((state: any) => {
          state.dictionary[id][field] = newValue;
        })
      );
    },
  }))
);
