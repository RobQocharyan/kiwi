import "./User.scss";

import React from "react";

export const User = () => {
  return (
    <div className="user">
      <div className="user__name">
        <div className="logo">
          <span>D</span>
        </div>
        <div className="info__user">
          <a href="#">
            <img src={require("../../../img/User/info.png")} alt="" />
            <span>$ 855,914.000 </span>
          </a>
          <p>Mr. Nick Peterson</p>
        </div>
      </div>

      <div className="user__diagram">
        <div className="diagram">
          <img
            src={require("../../../img/User/diagram_bar.png")}
            alt=""
            width={"354"}
            height={"373"}
          />
          <img src={require("../../../img/User/user__diagram.png")} alt="" />
        </div>

        <div className="user__days">
          <ul>
            <li>1h</li>
            <li>24h</li>
            <li>7d</li>
            <li>1m</li>
            <li>3m</li>
            <li>6m</li>
            <li>1y</li>
            <li>All</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
