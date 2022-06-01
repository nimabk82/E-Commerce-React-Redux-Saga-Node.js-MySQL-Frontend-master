import React from "react";
import ProductListPage from "./ProductList";

export default function Sales() {
  return (
    <div className="Sales">
      <ProductListPage sales={true} />
    </div>
  );
}
