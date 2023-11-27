import { useEffect, useState } from "react";
function useLocalStorage<T>(id: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(id);

    if (jsonValue != null) return JSON.parse(jsonValue);
    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(value));
  }, [id, value]);
  return [value, setValue] as [typeof value, typeof setValue];
}
export default useLocalStorage;
