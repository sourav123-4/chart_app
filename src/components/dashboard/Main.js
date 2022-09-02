import React from "react";
import "./main.css";
import { useSelector } from "react-redux";
import ProductCount from "../ProductCountChart";

const Main = ({ state, TotalOrders, TotalUser, TotalProducts }) => {
  const state2 = useSelector((state) => state?.rootReducer?.AllproductsCount);
  return (
    <div className="main">
      <div className="main-sub">
        <div className="div1" id="div2">
          <div className="img-div">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png"
              alt="logo1"
              width="40px"
              height="40px"
            />
            <span>ORDERS</span>
          </div>
          <div className="num">
            <h1>{TotalOrders}</h1>
          </div>
        </div>
        <div className="div1" id="div3">
          <div className="img-div">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1170/1170577.png"
              alt="logo2"
              width="40px"
              height="40px"
            />
            <span>PRODUCTS</span>
          </div>
          <div className="num">
            <h2>{TotalProducts}</h2>
          </div>
        </div>
        <div className="div1" id="div4">
          <div className="img-div">
            <img
              src="https://www.citypng.com/public/uploads/small/11639594360nclmllzpmer2dvmrgsojcin90qmnuloytwrcohikyurvuyfzvhxeeaveigoiajks5w2nytyfpix678beyh4ykhgvmhkv3r3yj5hi.png"
              alt="logo3"
              width="40px"
              height="40px"
            />
            <span>USERS</span>
          </div>
          <div className="num">
            <h2>{TotalUser}</h2>
          </div>
        </div>
        <div className="div1" id="div5">
          <div className="img-div">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Money_Flat_Icon.svg/1200px-Money_Flat_Icon.svg.png"
              alt="logo4"
              width="40px"
              height="40px"
            />
            <span>TOTAL AMOUNT</span>
          </div>
          <div className="num">
            <h2>{state[0]?.TotalAmount}</h2>
          </div>
        </div>
      </div>
      <div className="main-sub1">
        <ProductCount state={state2} />
      </div>
    </div>
  );
};

export default Main;
