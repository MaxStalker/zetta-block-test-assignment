import { atom } from "jotai";
import { sortData } from "../utils";

const endpoint = import.meta.env.VITE_DATA_ENDPOINT || "";

export const asyncAtom = atom(async (get) => {
  const url = `${endpoint}/apis`;
  console.log(url);
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return sortData(false, data, "id");
  }
  return [];
});
