import "./Analitycs.scss";

import React from "react";

export const Analitycs = () => {
  return (
    <div className="analitycs">
      <div className="analitycs__name">
        <span>Analytics</span>

        <a href="#">See more</a>
      </div>

      <div className="analitycs__buttons">
        <div className="count">
          <img src={require("../../../img/Analitycs/count.png")} alt="" />
          <p>Total Trade Count</p>
          <a href="#">128</a>
        </div>
        <div className="exchang">
          <img src={require("../../../img/Analitycs/exchanges.png")} alt="" />
          <p>The Most Used Exchanges</p>
          <a href="#">
            <svg
              width="27"
              height="28"
              viewBox="0 0 27 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25913 11.4782L13.5032 6.23627L18.7493 11.4824L21.7989 8.4307L13.5032 0.132812L5.2074 8.42857L8.25913 11.4782Z"
                fill="#F3BA2F"
              />
              <path
                d="M0 13.6325L3.05061 10.5819L6.10123 13.6325L3.05061 16.6831L0 13.6325Z"
                fill="#F3BA2F"
              />
              <path
                d="M8.2568 15.7868L13.5008 21.0308L18.747 15.7846L21.7987 18.8321L21.7966 18.8342L13.5008 27.1321L5.20507 18.8385L5.20081 18.8342L8.2568 15.7868Z"
                fill="#F3BA2F"
              />
              <path
                d="M20.8987 13.6358L23.9494 10.5852L27 13.6358L23.9494 16.6864L20.8987 13.6358Z"
                fill="#F3BA2F"
              />
              <path
                d="M16.5946 13.6309L13.5003 10.5344L11.212 12.8227L10.9476 13.085L10.4059 13.6267L10.4016 13.6309L10.4059 13.6373L13.5003 16.7296L16.5946 13.6331L16.5968 13.6309H16.5946Z"
                fill="#F3BA2F"
              />
            </svg>
            <span>Binance</span>
          </a>
        </div>
        <div className="withdrow">
          <img src={require("../../../img/Analitycs/withdraw.png")} alt="" />
          <p>Total Withdraw</p>
          <a href="#">$200</a>
        </div>
        <div className="paid">
          <img src={require("../../../img/Analitycs/paid.png")} alt="" />
          <p>Total Fee Paid</p>
          <a href="#">$12</a>
        </div>
      </div>
    </div>
  );
};
