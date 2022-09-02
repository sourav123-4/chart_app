import { takeLatest, put, call } from "redux-saga/effects";
import {
  receiveAllOrdersByAmount,
  receiveAllOrdersByCount,
  receiveAllProductsByCount,
  receiveOrderCount,
  receiveProductCount,
  receiveTotalAmount,
  receiveTotalOrder,
  receiveTotalProduct,
  receiveTotalUser,
  receiveUserCount,
} from "../action/Action";
import {
  fetchData,
  fetchOrder,
  fetchOrderCount,
  fetchProduct,
  fetchProductCount,
  fetchTotalAmount,
  fetchTotalCountOrder,
  fetchTotalCountProduct,
  fetchTotalCountUser,
  fetchUser,
} from "../api/Api";

function* getOrderData() {
  try {
    const data = yield call(fetchData);
    yield put(receiveAllOrdersByAmount(data));
  } catch (err) {
    console.log(err);
  }
}

function* getOrderCount() {
  try {
    const data = yield call(fetchOrderCount);
    yield put(receiveAllOrdersByCount(data));
  } catch (err) {
    console.log(err);
  }
}

function* getProductCount() {
  try {
    const data = yield call(fetchProductCount);
    yield put(receiveAllProductsByCount(data));
  } catch (err) {
    console.log(err);
  }
}

function* getProduct() {
  try {
    const data = yield call(fetchProduct);
    yield put(receiveTotalProduct(data));
  } catch (err) {
    console.log(err);
  }
}

function* getOrder() {
  try {
    const data = yield call(fetchOrder);
    yield put(receiveTotalOrder(data));
  } catch (err) {
    console.log(err);
  }
}

function* getUser() {
  try {
    const data = yield call(fetchUser);
    yield put(receiveTotalUser(data));
  } catch (err) {
    console.log(err);
  }
}

function* getTotalAmount() {
  try {
    const data = yield call(fetchTotalAmount);
    yield put(receiveTotalAmount(data));
  } catch (err) {
    console.log(err);
  }
}

function* getTotalOrderCount() {
  try {
    const data = yield call(fetchTotalCountOrder);
    yield put(receiveOrderCount(data));
  } catch (err) {
    console.log(err);
  }
}

function* getTotalUserCount() {
  try {
    const data = yield call(fetchTotalCountUser);
    yield put(receiveUserCount(data));
  } catch (err) {
    console.log(err);
  }
}

function* getTotalProductCount() {
  try {
    const data = yield call(fetchTotalCountProduct);
    yield put(receiveProductCount(data));
  } catch (err) {
    console.log(err);
  }
}
export default function* mySaga() {
  yield takeLatest("GET_ALL_ORDERS", getOrderData);
  yield takeLatest("GET_ALL_ORDERS_COUNT", getOrderCount);
  yield takeLatest("GET_ALL_PRODUCTS_COUNT", getProductCount);
  yield takeLatest("GET_PRODUCTS", getProduct);
  yield takeLatest("GET_ORDERS", getOrder);
  yield takeLatest("GET_USERS", getUser);
  yield takeLatest("GET_TOTAL_AMOUNT", getTotalAmount);
  yield takeLatest("GET_USER_COUNT", getTotalUserCount);
  yield takeLatest("GET_ORDER_COUNT", getTotalOrderCount);
  yield takeLatest("GET_PRODUCT_COUNT", getTotalProductCount);
}
