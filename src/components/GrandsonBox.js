import React from "react";
import { useSelector } from "react-redux";

const GrandsonBox = () => {
  const count = useSelector((state) => state.count);

  return <div>GrandsonBox {count}</div>;
};

export default GrandsonBox;
