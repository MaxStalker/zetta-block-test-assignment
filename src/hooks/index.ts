import { useEffect, useState } from "react";
import { Item } from "../types";

// hook to debounce value change on rapid input
export const useDebounce = (value: any, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);

  return debouncedValue;
};

// hook to fetch data
export const useFetchData = (url: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.statusText);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

// hook for undo/redo
export const useHistory = (initialValue: string) => {
  const [current, setCurrent] = useState<string>(initialValue);
  const [past, setPast] = useState<string[]>([]);
  const [future, setFuture] = useState<string[]>([]);

  const update = (newValue: any) => {
    // we are doing this only for the strings,
    // so we don't need complex comparison mechanism
    if (newValue !== current) {
      setPast([...past, current]);
      setCurrent(newValue);
      setFuture([]);
    }
  };

  const undo = () => {
    if (past.length > 0) {
      const previous = past[past.length - 1];
      setPast(past.slice(0, -1));
      setFuture([current, ...future]);
      setCurrent(previous);
    }
  };

  const redo = () => {
    if (future.length > 0) {
      const next = future[0];
      setPast([...past, current]);
      setFuture(future.slice(1));
      setCurrent(next);
    }
  };

  return { current, update, undo, redo};
};
