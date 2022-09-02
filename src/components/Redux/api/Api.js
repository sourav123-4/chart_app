export const fetchData = async () => {
  try {
    const res = await fetch(`http://localhost:8080/highestorderuserbyamount`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchOrderCount = async () => {
  try {
    const res = await fetch(`http://localhost:8080/highestorderuser`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchProductCount = async () => {
  try {
    const res = await fetch(`http://localhost:8080/countproduct`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchOrder = async () => {
  try {
    const res = await fetch(`http://localhost:8080/order`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchProduct = async () => {
  try {
    const res = await fetch(`http://localhost:8080/product`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchUser = async () => {
  try {
    const res = await fetch(`http://localhost:8080/user`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchTotalAmount = async () => {
  try {
    const res = await fetch("http://localhost:8080/totalorderamount");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchTotalCountOrder = async () => {
  try {
    const res = await fetch("http://localhost:8080/totalorders");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchTotalCountUser = async () => {
  try {
    const res = await fetch("http://localhost:8080/totalusers");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchTotalCountProduct = async () => {
  try {
    const res = await fetch("http://localhost:8080/totalproducts");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
