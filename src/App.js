import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Header from "./components/header/Header";
import Main from "./components/dashboard/Main";
import View from "./components/dashboard/View";
import Flow from "./components/dashboard/Flow";
import {
  getAllOrdersByAmount,
  getAllOrdersByCount,
  getAllProductsByCount,
  getOrderCount,
  getProductCount,
  getTotalAmount,
  getTotalOrder,
  getTotalProduct,
  getTotalUser,
  getUserCount,
} from "./components/Redux/action/Action";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.rootReducer?.AllAmountorders);
  // const state1 = useSelector((state) => state?.rootReducer?.AllCountOrders);
  const state2 = useSelector((state) => state?.rootReducer?.AllproductsCount);
  // const users = useSelector((state) => state?.rootReducer?.Users);
  // const products = useSelector((state) => state?.rootReducer?.Products);
  // const orders = useSelector((state) => state?.rootReducer?.Orders);
  const TotalAmount = useSelector((state) => state?.rootReducer?.TotalAmount);
  const TotalOrders = useSelector((state) => state?.rootReducer?.TotalOrders);
  const TotalUser = useSelector((state) => state?.rootReducer?.TotalUsers);
  const TotalProducts = useSelector(
    (state) => state?.rootReducer?.TotalProducts
  );
  useEffect(() => {
    dispatch(getAllOrdersByAmount());
    dispatch(getAllOrdersByCount());
    dispatch(getAllProductsByCount());
    dispatch(getTotalOrder());
    dispatch(getTotalProduct());
    dispatch(getTotalUser());
    dispatch(getTotalAmount());
    dispatch(getOrderCount());
    dispatch(getUserCount());
    dispatch(getProductCount());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Main
        state={TotalAmount}
        TotalOrders={TotalOrders}
        TotalProducts={TotalProducts}
        TotalUser={TotalUser}
      />
      <View chart={state2} />
      <Flow state={state} />
    </div>
  );
}

export default App;
