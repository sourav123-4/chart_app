const initialState = {
  AllproductsCount: [],
  AllAmountorders: [],
  AllCountOrders: [],
  Users: [],
  Orders: [],
  Products: [],
  TotalAmount: 0,
  TotalOrders: 0,
  TotalUsers: 0,
  TotalProducts: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_ALL_ORDERS":
      return { ...state, AllAmountorders: action.data };
    case "RECEIVE_ALL_ORDERS_COUNT":
      return { ...state, AllCountOrders: action.data };
    case "RECEIVE_ALL_PRODUCTS_COUNT":
      return { ...state, AllproductsCount: action.data };
    case "RECEIVE_ORDERS":
      return { ...state, Orders: action.data };
    case "RECEIVE_USERS":
      return { ...state, Users: action.data };
    case "RECEIVE_PRODUCTS":
      return { ...state, Products: action.data };
    case "RECEIVE_TOTAL_AMOUNT":
      return { ...state, TotalAmount: action.data };
    case "RECEIVE_PRODUCT_COUNT":
      return { ...state, TotalProducts: action.data };
    case "RECEIVE_USER_COUNT":
      return { ...state, TotalUsers: action.data };
    case "RECEIVE_ORDER_COUNT":
      return { ...state, TotalOrders: action.data };
    default:
      return state;
  }
};

export default rootReducer;
