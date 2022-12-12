

import React from 'react'
import "./Coins.scss"


export const Coins = () => {
  return (
    <div className='coins'>
        <div className="coins__name">
                <span>Coins</span>
                
                <a href="#">See more</a>
        </div>

        <div className="coins__circle">
            <div className='circle__top'>
                <h2>TOP <span>Gainer</span>  </h2>
                <p>Apecoin</p>
                <div>
                    <img src={require("../../../img/CoinsDiagram/top__arrow.png")} alt="" />
                    <span>0.74%</span>
                </div>
            </div>
            <div className='circle__bottom'>
            <h2>TOP <span>Looser</span>  </h2>
                <p>Apecoin</p>
                <div>
                    <img src={require("../../../img/CoinsDiagram/bottom__arrow.png")} alt="" />
                    <span>0.74%</span>
                </div>
            </div>
        </div>
        <div className="coins__days">
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
  )
}
