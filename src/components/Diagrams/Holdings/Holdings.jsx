
import "./Holdings.scss"

import React from 'react'

export const Holdings = () => {

  const obj = [
    {img:"../../../img/Holdings/holdings__logo.png",name:"Aave Abat v2",amount:99,total:"$56.48",img2:"../../../img/Holdings/holding__arrow.png",charge:"1.88%",market:"72.8B",price:"9.12455558",img3:"../../../img/Holdings/holding__price1.png"},
    {img:"../../../img/Holdings/holdings__logo.png",name:"Aave Abat v2",amount:99,total:"$56.48",img2:"../../../img/Holdings/holding__arrow.png",charge:"1.88%",market:"72.8B",price:"9.12455558",img3:"../../../img/Holdings/holding__price1.png"},
    {img:"../../../img/Holdings/holdings__logo.png",name:"Aave Abat v2",amount:99,total:"$56.48",img2:"../../../img/Holdings/holding__arrow.png",charge:"1.88%",market:"72.8B",price:"9.12455558",img3:"../../../img/Holdings/holding__price1.png"}
  ]


  return (
    <div className="holdings">
        <div className="holdings__name">
            <span>Holdings</span>
            <a href="#">See more</a>
        </div>

        <div className="holdings__table">
          <table>
            <tr className="tr">
              <th>Name</th>
              <th>Amount</th>
              <th>Total</th>
              <th>1 Hour Charge</th>
              <th>Market Cap</th>
              <th>Price in BTC</th>
              <th>Price Graph(7D)</th>
              <th>
                <div className="burger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </th>
            </tr>
            {obj.map((val)=>{
              return (
                <tr>
                  <td>
                    <img src={require("../../../img/Holdings/holdings__logo.png")} alt="" />
                    <span>{val.name}</span>
                  </td>
                  <td>
                    {val.amount}
                  </td>
                  <td>
                    {val.total}
                  </td>
                  <td>
                    <img src={require("../../../img/Holdings/holding__arrow.png")} alt="" />
                    <span>{val.charge}</span>
                    
                  </td>
                  <td>
                    {val.market}
                  </td>
                  <td>
                    {val.price}
                  </td>
                  <td>
                    <img src={require("../../../img/Holdings/holding__price1.png")} alt="" />
                  </td>
                  <td>
                    <div className="doth">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </td>
                </tr>
              )
            })}
          </table>
        </div>
    </div>
    
  )
}
