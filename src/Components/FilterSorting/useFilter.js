import { useState } from "react";
import {
  findBySingleColor,
  findBySingleSize,
} from "../../Actions/Search.action";

export default function useFilter({ handleFilter }) {
  const [showClear, setShowClear] = useState(false);

  function findColor(color) {
    let result = findBySingleColor(color);
    setShowClear(true);
    handleFilter(result);
  }

  function findSize(size) {
    let result = findBySingleSize(size);
    setShowClear(true);
    handleFilter(result);
  }

  function clearAll() {
    handleFilter([]);
    setShowClear(false);
  }

  return { showClear, findColor, findSize, clearAll };
}
