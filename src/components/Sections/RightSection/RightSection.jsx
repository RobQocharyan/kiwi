import React from 'react'
import "./RightSection.scss"
import { TotalPoint } from './../../Diagrams/TotalPoint/TotalPoint';
import { Exchanges } from './../../Diagrams/Exchanges/Exchanges';
import { Coins } from '../../Diagrams/Coins/Coins';
import { Analitycs } from './../../Diagrams/Analitycs/Analitycs';
import { Futures } from '../../Diagrams/Futures/Futures';
import { Holdings } from './../../Diagrams/Holdings/Holdings';
import { User } from './../../Diagrams/User/User';


export const RightSection = () => {
  return (
    <div className='rightSection'>
        <div className='rightSection__top'>
            <TotalPoint />
            <Exchanges />
            <Coins />
        </div>
        <div className='rightSection__midlle'>
            <User />
            <Analitycs />
            <Futures />
        </div>
        <div className='rightSection__bottom'>
          <Holdings />
        </div>
    </div>
  )
}
