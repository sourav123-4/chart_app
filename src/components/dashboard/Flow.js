import React from "react";
import OrderAmount from "../OrderAmountChart";

function Flow({ state }) {
  return (
    <div className="flow">
      <OrderAmount state={state} />
    </div>
  );
}

export default Flow;
