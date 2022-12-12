import React from 'react'
import "./TotalPoint.scss"
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from "chart.js";


ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
)

export const TotalPoint = () => {

  // Depends on which data charachteristics (Year, All) it return different data which comes from backend in this case I just hard coded the data 
    const data = {
        labels:["May 2021","Jun 2021","Jul 2021","Aug 2021","Sep 2021"],
        datasets:[
            {
                data:[21,28,25,27,54],
                backgroundColor:"transparent",
                pointBorderColor:"transparent",
                borderColor:"rgba(128, 90, 213, 1)",
                tension:0.4,
                color:'rgba(255, 255, 255, 1)',

            }
        ]
    }
    
    const options = {
        plugins:{
            legend:false,
            labels:{
                font:{
                  size:12,
                  weight:'500',
                  lineHeight:18
                }
            },
            layout: {
              padding:{
                right:80
              }
          }
        },
        scales:{
            x:{
                ticks:{
                  color:'rgba(255, 255, 255, 1)',
                },
                grid:{
                  lineWidth:0,
                  borderColor:"#686868",
                }
            },
            y:{
              grid:{
                borderWidht:5,
                lineWidth:1,
                borderColor:"#686868",


              },
                ticks:{
                    stepSize:9,
                    callback:(value)=>  '$' + value + ".000",
                    color:'rgba(255, 255, 255, 1)'
                    
                },

            }
        }
    }
    
    
  return (
    <div className='totalPoints'>
              <div className="total">
                <span>Total Points</span>
                <select className='all'>
                  <option  selected value={"0"}>All</option>
                  <option value={"1"}>small</option>
                  <option value={"2"}>size</option>
                  <option value={"3"}>weight </option>
                </select>
                <select className='year'>
                  <option selected value={"0"}>1 year</option>
                  <option value={"1"}>5 year</option>
                  <option value={"2"}>10 year</option>
                  <option value={"3"}>20 year</option>
                </select>
                <a href="#">See more</a>
              </div>
              <div className="icons">
                <ul>
                    <li><img src={require("../../../img/TotalalDiagram/minus.png")} alt="" /></li>
                    <li><img src={require("../../../img/TotalalDiagram/plus.png")} alt="" /></li>
                    <li><img src={require("../../../img/TotalalDiagram/carbon_zoom-in.png")} alt="" /></li>
                    <li><img src={require("../../../img/TotalalDiagram/home.png")} alt="" /></li>
                    <li><img src={require("../../../img/TotalalDiagram/hand.png")} alt="" /></li>
                </ul>
              </div>
              <div className="line">
                <Line data={data} options={options}></Line>
              </div>
              <div className='checkbox'>
                <div className="checkboxes">
                  <div className='usd'>
                    <input type="checkbox" />
                    <label >USD</label>

                  </div>
                  <div className='btc'>
                    <input type="checkbox" />
                    <label >BTC</label>

                  </div>
                  <div className='eth'>
                    <input type="checkbox" />
                    <label >ETH</label>

                  </div>
                </div>
              </div>
    </div>
  )
}
