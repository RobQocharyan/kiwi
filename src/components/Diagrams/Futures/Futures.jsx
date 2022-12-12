
import "./Futures.scss"

import React from 'react'

export const Futures = () => {
  return (
    <div className='futures'>
        <div className="futures__name">
                <span>Futures</span>
                <a href="#">See more</a>
        </div>
        <div className="futures__top">
            <div className="info">
                <p>3/22/2022 17:51:03 PM</p>
                <div className="infoAll">
                    <div className="right">
                        <img src={require('../../../img/Futures/line__right.png')} alt="" />
                        <span>$0.74</span>
                    </div>
                    <div className="left">
                        <img src={require('../../../img/Futures/line__left.png')} alt="" />
                        <span>0.58%</span>
                    </div>
                    
                </div>
            </div>
            <button>$3,698.58</button>
        </div>
        <div className="futures__midlle">
            <img src={require("../../../img/Futures/futures_diagram.png")} alt="" />
        </div>
        <div className="futures__bottom">
            <div className="asset">
                <span>Asset:</span>
                <a href="#">ES</a>
            </div>
            <div className="balance">
                <span>Margin balance</span>
                <a href="#">$12.50</a>
            </div>
            <div className="wallet">
                <span>Wallet balance</span>
                <a href="#">$5,225.00</a>
            </div>
        </div>
    </div>
  )
}
