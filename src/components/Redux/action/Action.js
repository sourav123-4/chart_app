export const getAllOrdersByAmount = () => {
  return {
    type: "GET_ALL_ORDERS",
  };
};

export const receiveAllOrdersByAmount = (data) => {
  return {
    type: "RECEIVE_ALL_ORDERS",
    data,
  };
};

export const getAllOrdersByCount = () => {
  return {
    type: "GET_ALL_ORDERS_COUNT",
  };
};

export const receiveAllOrdersByCount = (data) => {
  return {
    type: "RECEIVE_ALL_ORDERS_COUNT",
    data,
  };
};

export const getAllProductsByCount = () => {
  return {
    type: "GET_ALL_PRODUCTS_COUNT",
  };
};

export const receiveAllProductsByCount = (data) => {
  return {
    type: "RECEIVE_ALL_PRODUCTS_COUNT",
    data,
  };
};

export const getTotalOrder = () => {
  return {
    type: "GET_ORDERS",
  };
};

export const receiveTotalOrder = (data) => {
  return {
    type: "RECEIVE_ORDERS",
    data,
  };
};

export const getTotalUser = () => {
  return {
    type: "GET_USERS",
  };
};

export const receiveTotalUser = (data) => {
  return {
    type: "RECEIVE_USERS",
    data,
  };
};

export const getTotalProduct = () => {
  return {
    type: "GET_PRODUCTS",
  };
};

export const receiveTotalProduct = (data) => {
  return {
    type: "RECEIVE_PRODUCTS",
    data,
  };
};

export const getTotalAmount = () => {
  return {
    type: "GET_TOTAL_AMOUNT",
  };
};

export const receiveTotalAmount = (data) => {
  return {
    type: "RECEIVE_TOTAL_AMOUNT",
    data,
  };
};

export const getOrderCount = () => {
  return {
    type: "GET_ORDER_COUNT",
  };
};

export const receiveOrderCount = (data) => {
  return {
    type: "RECEIVE_ORDER_COUNT",
    data,
  };
};

export const getUserCount = () => {
  return {
    type: "GET_USER_COUNT",
  };
};

export const receiveUserCount = (data) => {
  return {
    type: "RECEIVE_USER_COUNT",
    data,
  };
};

export const getProductCount = () => {
  return {
    type: "GET_PRODUCT_COUNT",
  };
};

export const receiveProductCount = (data) => {
  return {
    type: "RECEIVE_PRODUCT_COUNT",
    data,
  };
};
