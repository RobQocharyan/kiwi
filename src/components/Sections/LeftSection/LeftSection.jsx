import React from "react";
import "./LeftSection.scss";

export const LeftSection = () => {

  const tableObject = [
    {img:"../../../img/colinbase.png",name:"Colinbase",persent:"4.85%",algorithm:"../../../img/algorithm_line.png",pencil:"../../../img/pensil.png",rycle:"../../../img/matamask_1.png",been:"../../../img/matamask_2.png"},
    {img:"../../../img/colinbase.png",name:"Colinbase",persent:"4.85%",algorithm:"../../../img/algorithm_line.png",pencil:"../../../img/pensil.png",rycle:"../../../img/matamask_1.png",been:"../../../img/matamask_2.png"},
    {img:"../../../img/colinbase.png",name:"Colinbase",persent:"4.85%",algorithm:"../../../img/algorithm_line.png",pencil:"../../../img/pensil.png",rycle:"../../../img/matamask_1.png",been:"../../../img/matamask_2.png"},
    {img:"../../../img/colinbase.png",name:"Colinbase",persent:"4.85%",algorithm:"../../../img/algorithm_line.png",pencil:"../../../img/pensil.png",rycle:"../../../img/matamask_1.png",been:"../../../img/matamask_2.png"},
    {img:"../../../img/colinbase.png",name:"Colinbase",persent:"4.85%",algorithm:"../../../img/algorithm_line.png",pencil:"../../../img/pensil.png",rycle:"../../../img/matamask_1.png",been:"../../../img/matamask_2.png"},
    {img:"../../../img/colinbase.png",name:"Colinbase",persent:"4.85%",algorithm:"../../../img/algorithm_line.png",pencil:"../../../img/pensil.png",rycle:"../../../img/matamask_1.png",been:"../../../img/matamask_2.png"},
    {img:"../../../img/colinbase.png",name:"Colinbase",persent:"4.85%",algorithm:"../../../img/algorithm_line.png",pencil:"../../../img/pensil.png",rycle:"../../../img/matamask_1.png",been:"../../../img/matamask_2.png"},
    {img:"../../../img/colinbase.png",name:"Colinbase",persent:"4.85%",algorithm:"../../../img/algorithm_line.png",pencil:"../../../img/pensil.png",rycle:"../../../img/matamask_1.png",been:"../../../img/matamask_2.png"},
    {img:"../../../img/colinbase.png",name:"Colinbase",persent:"4.85%",algorithm:"../../../img/algorithm_line.png",pencil:"../../../img/pensil.png",rycle:"../../../img/matamask_1.png",been:"../../../img/matamask_2.png"},
  ]



  return (
    <div className="leftSection">
      <div className="leftSection__top">
        <div className="leftSection__input">
          <div className="balance">
            <input type="text" placeholder="Hide small balances" />
            <svg
              width="18"
              height="13"
              viewBox="0 0 18 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.016 0.585449C2.33713 0.585449 0.329875 6.37532 0.3115 6.43395L0.21875 6.71045L0.310625 6.98695C0.329875 7.04557 2.33713 12.8354 9.016 12.8354C15.6949 12.8354 17.7021 7.04557 17.7205 6.98695L17.8133 6.71045L17.7214 6.43395C17.7021 6.37532 15.6949 0.585449 9.016 0.585449ZM9.016 10.2104C7.08575 10.2104 5.516 8.6407 5.516 6.71045C5.516 4.7802 7.08575 3.21045 9.016 3.21045C10.9462 3.21045 12.516 4.7802 12.516 6.71045C12.516 8.6407 10.9462 10.2104 9.016 10.2104Z"
                fill="#805AD5"
              />
            </svg>
            <svg
              className="line"
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.820312 1.14795L21.2148 14.271"
                stroke="#805AD5"
                stroke-width="2"
              />
            </svg>
          </div>
          <div className="sort">
            <input type="text" placeholder="Sort" />
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.93833 1.28281C3.93833 1.10876 3.86919 0.941838 3.74612 0.818768C3.62305 0.695697 3.45613 0.626556 3.28208 0.626556C3.10803 0.626556 2.94111 0.695697 2.81804 0.818768C2.69497 0.941838 2.62583 1.10876 2.62583 1.28281V12.8236L1.1217 11.3182C0.998478 11.195 0.831347 11.1257 0.657079 11.1257C0.482811 11.1257 0.31568 11.195 0.192454 11.3182C0.0692278 11.4414 4.1059e-09 11.6085 0 11.7828C-4.1059e-09 11.9571 0.0692278 12.1242 0.192454 12.2474L2.81745 14.8711L2.82664 14.8803C2.94985 15.0005 3.11555 15.067 3.28764 15.0656C3.45972 15.0641 3.62426 14.9947 3.74539 14.8724L6.37039 12.2474C6.43141 12.1865 6.47982 12.1141 6.51288 12.0345C6.54593 11.9549 6.56298 11.8695 6.56304 11.7833C6.5631 11.697 6.54617 11.6116 6.51323 11.532C6.48029 11.4523 6.43198 11.3799 6.37105 11.3188C6.31012 11.2578 6.23777 11.2094 6.15813 11.1763C6.07849 11.1433 5.99311 11.1263 5.90689 11.1262C5.82066 11.1261 5.73526 11.1431 5.65558 11.176C5.57589 11.2089 5.50347 11.2573 5.44245 11.3182L3.93833 12.8236V1.28281ZM8.53208 2.59531C8.53208 2.42126 8.60122 2.25434 8.72429 2.13127C8.84736 2.0082 9.01428 1.93906 9.18833 1.93906H18.3758C18.5499 1.93906 18.7168 2.0082 18.8399 2.13127C18.9629 2.25434 19.0321 2.42126 19.0321 2.59531C19.0321 2.76935 18.9629 2.93627 18.8399 3.05934C18.7168 3.18242 18.5499 3.25156 18.3758 3.25156H9.18833C9.01428 3.25156 8.84736 3.18242 8.72429 3.05934C8.60122 2.93627 8.53208 2.76935 8.53208 2.59531ZM9.18833 5.87656C9.01428 5.87656 8.84736 5.9457 8.72429 6.06877C8.60122 6.19184 8.53208 6.35876 8.53208 6.53281C8.53208 6.70685 8.60122 6.87377 8.72429 6.99684C8.84736 7.11992 9.01428 7.18906 9.18833 7.18906H15.7508C15.9249 7.18906 16.0918 7.11992 16.2149 6.99684C16.3379 6.87377 16.4071 6.70685 16.4071 6.53281C16.4071 6.35876 16.3379 6.19184 16.2149 6.06877C16.0918 5.9457 15.9249 5.87656 15.7508 5.87656H9.18833ZM9.18833 9.81405C9.01428 9.81405 8.84736 9.88319 8.72429 10.0063C8.60122 10.1293 8.53208 10.2963 8.53208 10.4703C8.53208 10.6444 8.60122 10.8113 8.72429 10.9343C8.84736 11.0574 9.01428 11.1266 9.18833 11.1266H13.1258C13.2999 11.1266 13.4668 11.0574 13.5899 10.9343C13.7129 10.8113 13.7821 10.6444 13.7821 10.4703C13.7821 10.2963 13.7129 10.1293 13.5899 10.0063C13.4668 9.88319 13.2999 9.81405 13.1258 9.81405H9.18833ZM9.18833 13.7516C9.01428 13.7516 8.84736 13.8207 8.72429 13.9438C8.60122 14.0668 8.53208 14.2338 8.53208 14.4078C8.53208 14.5819 8.60122 14.7488 8.72429 14.8718C8.84736 14.9949 9.01428 15.0641 9.18833 15.0641H10.5008C10.6749 15.0641 10.8418 14.9949 10.9649 14.8718C11.0879 14.7488 11.1571 14.5819 11.1571 14.4078C11.1571 14.2338 11.0879 14.0668 10.9649 13.9438C10.8418 13.8207 10.6749 13.7516 10.5008 13.7516H9.18833Z"
                fill="#805AD5"
              />
            </svg>
          </div>
        </div>
        <div className="search">
          <input type="text" placeholder="Search your exchange" />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.4463 17.9427L13.2662 11.7626C14.2252 10.5228 14.744 9.00692 14.744 7.41252C14.744 5.50401 13.9991 3.71448 12.6522 2.36519C11.3053 1.0159 9.51104 0.273438 7.6049 0.273438C5.69877 0.273438 3.90448 1.01828 2.55757 2.36519C1.20828 3.7121 0.46582 5.50401 0.46582 7.41252C0.46582 9.31866 1.21066 11.1129 2.55757 12.4599C3.90448 13.8091 5.69639 14.5516 7.6049 14.5516C9.1993 14.5516 10.7128 14.0328 11.9526 13.0762L18.1327 19.2539C18.1508 19.272 18.1723 19.2864 18.196 19.2962C18.2197 19.306 18.2451 19.3111 18.2707 19.3111C18.2963 19.3111 18.3217 19.306 18.3454 19.2962C18.3691 19.2864 18.3906 19.272 18.4087 19.2539L19.4463 18.2187C19.4644 18.2006 19.4788 18.1791 19.4886 18.1554C19.4984 18.1317 19.5035 18.1063 19.5035 18.0807C19.5035 18.0551 19.4984 18.0297 19.4886 18.006C19.4788 17.9823 19.4644 17.9608 19.4463 17.9427ZM11.3743 11.182C10.3653 12.1886 9.02796 12.743 7.6049 12.743C6.18185 12.743 4.84446 12.1886 3.83547 11.182C2.82886 10.173 2.27439 8.83558 2.27439 7.41252C2.27439 5.98946 2.82886 4.6497 3.83547 3.64308C4.84446 2.63647 6.18185 2.08201 7.6049 2.08201C9.02796 2.08201 10.3677 2.63409 11.3743 3.64308C12.3809 4.65207 12.9354 5.98946 12.9354 7.41252C12.9354 8.83558 12.3809 10.1753 11.3743 11.182Z"
              fill="#805AD5"
            />
          </svg>
        </div>

        <div className="metamask">
          <table>
            <tr>
              <th>
                <svg
                  width="27"
                  height="25"
                  viewBox="0 0 29 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.6592 0.132812L16.1235 7.9578L18.0718 3.34116L26.6592 0.132812Z"
                    fill="#E2761B"
                    stroke="#E2761B"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.32904 0.132812L12.78 8.03192L10.927 3.34116L2.32904 0.132812Z"
                    fill="#E4761B"
                    stroke="#E4761B"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.8635 18.2727L20.0575 22.5717L26.0612 24.2235L27.7872 18.368L22.8635 18.2727Z"
                    fill="#E4761B"
                    stroke="#E4761B"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.21912 18.368L2.93447 24.2235L8.93821 22.5717L6.13223 18.2727L1.21912 18.368Z"
                    fill="#E4761B"
                    stroke="#E4761B"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.60025 11.0033L6.92725 13.534L12.8886 13.7987L12.6769 7.39256L8.60025 11.0033Z"
                    fill="#E4761B"
                    stroke="#E4761B"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.3871 11.0094L16.2576 7.3246L16.1199 13.8048L22.0707 13.5401L20.3871 11.0094Z"
                    fill="#E4761B"
                    stroke="#E4761B"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.93945 22.57L12.5184 20.8228L9.42653 18.4086L8.93945 22.57Z"
                    fill="#E4761B"
                    stroke="#E4761B"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.4672 20.8228L20.0568 22.57L19.5591 18.4086L16.4672 20.8228Z"
                    fill="#E4761B"
                    stroke="#E4761B"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.062 22.5798L16.4725 20.8326L16.7584 23.1727L16.7266 24.1575L20.062 22.5798Z"
                    fill="#D7C1B3"
                    stroke="#D7C1B3"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.9447 22.5798L12.2801 24.1575L12.2589 23.1727L12.5237 20.8326L8.9447 22.5798Z"
                    fill="#D7C1B3"
                    stroke="#D7C1B3"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.3293 16.8685L9.34326 15.9896L11.4504 15.026L12.3293 16.8685Z"
                    fill="#233447"
                    stroke="#233447"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.6596 16.8685L17.5385 15.026L19.6562 15.9896L16.6596 16.8685Z"
                    fill="#233447"
                    stroke="#233447"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.94178 22.5713L9.45004 18.2723L6.1358 18.3676L8.94178 22.5713Z"
                    fill="#CD6116"
                    stroke="#CD6116"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.5529 18.2723L20.0612 22.5713L22.8672 18.3676L19.5529 18.2723Z"
                    fill="#CD6116"
                    stroke="#CD6116"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.0721 13.5382L16.1213 13.8029L16.6719 16.863L17.5507 15.0206L19.6685 15.9841L22.0721 13.5382Z"
                    fill="#CD6116"
                    stroke="#CD6116"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.34658 15.9841L11.4643 15.0206L12.3326 16.863L12.8938 13.8029L6.93237 13.5382L9.34658 15.9841Z"
                    fill="#CD6116"
                    stroke="#CD6116"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.93207 13.5382L9.43098 18.4089L9.34627 15.9841L6.93207 13.5382Z"
                    fill="#E4751F"
                    stroke="#E4751F"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.6699 15.9841L19.564 18.4089L22.0735 13.5382L19.6699 15.9841Z"
                    fill="#E4751F"
                    stroke="#E4751F"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.8918 13.8024L12.3306 16.8625L13.0295 20.4733L13.1883 15.719L12.8918 13.8024Z"
                    fill="#E4751F"
                    stroke="#E4751F"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.1199 13.8024L15.834 15.7084L15.9611 20.4733L16.6705 16.8625L16.1199 13.8024Z"
                    fill="#E4751F"
                    stroke="#E4751F"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.6706 16.8638L15.9612 20.4745L16.4694 20.8239L19.5613 18.4097L19.6672 15.985L16.6706 16.8638Z"
                    fill="#F6851B"
                    stroke="#F6851B"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.34326 15.985L9.42797 18.4097L12.5198 20.8239L13.0281 20.4745L12.3293 16.8638L9.34326 15.985Z"
                    fill="#F6851B"
                    stroke="#F6851B"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.7219 24.1542L16.7537 23.1694L16.4889 22.9365H12.497L12.2535 23.1694L12.2747 24.1542L8.93927 22.5765L10.104 23.5295L12.4653 25.1707H16.5207L18.8926 23.5295L20.0573 22.5765L16.7219 24.1542Z"
                    fill="#C0AD9E"
                    stroke="#C0AD9E"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.472 20.8269L15.9637 20.4775H13.0307L12.5224 20.8269L12.2577 23.167L12.5012 22.934H16.4931L16.7579 23.167L16.472 20.8269Z"
                    fill="#161616"
                    stroke="#161616"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M27.1018 8.46605L28.0018 4.1459L26.6571 0.132812L16.4708 7.69308L20.3886 11.0073L25.9265 12.6274L27.1547 11.1979L26.6253 10.8167L27.4724 10.0438L26.8159 9.5355L27.663 8.88959L27.1018 8.46605Z"
                    fill="#763D16"
                    stroke="#763D16"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 4.1459L1.90003 8.46605L1.32825 8.88959L2.17534 9.5355L1.52943 10.0438L2.37652 10.8167L1.84709 11.1979L3.06478 12.6274L8.60262 11.0073L12.5204 7.69308L2.33417 0.132812L1 4.1459Z"
                    fill="#763D16"
                    stroke="#763D16"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25.9227 12.633L20.3849 11.013L22.0685 13.5437L19.559 18.4144L22.8626 18.3721H27.7863L25.9227 12.633Z"
                    fill="#F6851B"
                    stroke="#F6851B"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.60298 11.013L3.06514 12.633L1.22272 18.3721H6.13583L9.42889 18.4144L6.92998 13.5437L8.60298 11.013Z"
                    fill="#F6851B"
                    stroke="#F6851B"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.121 13.8109L16.4705 7.70122L18.0799 3.3493H10.9326L12.5209 7.70122L12.8915 13.8109L13.0186 15.738L13.0292 20.4817H15.9622L15.9834 15.738L16.121 13.8109Z"
                    fill="#F6851B"
                    stroke="#F6851B"
                    stroke-width="0.162151"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </th>
              <th>
                <span>Metamask</span>
              </th>
              <th>
                <span>4.85%</span>
              </th>
              <th>
                <svg
                  width="40"
                  height="21"
                  viewBox="0 0 40 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.05 4.58274L39.6643 19.7068L0.999969 20.1328V1.17452L2.9067 2.66562C3.29511 2.3106 4.24142 1.51534 4.91937 1.17452C5.59732 0.833692 9.08594 2.66561 10.7455 3.62418C11.5223 3.41116 13.4573 3.11294 14.9827 3.62418C16.8894 4.26322 18.1606 6.18035 18.6902 4.58274C19.2199 2.98513 21.4444 4.58274 22.5037 4.58274C23.3511 4.58274 26.1759 3.9437 27.4824 3.62418C28.2592 4.33422 30.173 5.71172 31.6137 5.54131C33.0543 5.37089 33.8382 4.83126 34.05 4.58274Z"
                    fill="url(#paint0_linear_1_751)"
                    fill-opacity="0.12"
                  />
                  <path
                    d="M39.4882 19.7824L34.0291 4.58137C33.8165 4.82979 33.0299 5.36921 31.5843 5.53955C30.1387 5.7099 28.2183 4.33295 27.4389 3.62318C26.1279 3.94258 23.2934 4.58137 22.4431 4.58137C21.3801 4.58137 19.148 2.9844 18.6165 4.58137C18.085 6.17834 16.8095 4.26197 14.8962 3.62318C13.3656 3.11215 11.4239 3.41025 10.6444 3.62318C8.97918 2.665 5.47858 0.833811 4.7983 1.1745C4.11802 1.51519 3.16846 2.31013 2.77872 2.66501L1.13116 1.1745"
                    stroke="#FF0000"
                    stroke-width="0.30243"
                    stroke-linecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_751"
                      x1="20.3321"
                      y1="1.13281"
                      x2="20.3321"
                      y2="20.1328"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF001F" />
                      <stop offset="0.901042" stop-color="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </th>
              <th>
                <img src={require("../../../img/pensil.png")} alt="" />
              </th>
              <th>
                <div className="rycleBeen">
                  <img src={require("../../../img/metamask_1.png")} alt="" />
                  <img src={require("../../../img/metamask_2.png")} alt="" />
                </div>
              </th>
            </tr>
          </table>
        </div>

        <div className="binance">
          <div className="binance__algorithm">
            <div className="algorithm__left">
              <div>
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
              </div>
              <div>
                <span>$1000.00</span>
              </div>
            </div>
            <div className="algorithm__right">
              <div>
                <span>4.85%</span>
                <svg
                  width="101"
                  height="50"
                  viewBox="0 0 101 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1498 9.82721L1.00177 47.9423H3.00087L100.441 49.016V1.23791L95.6361 4.99575C94.6573 4.10102 92.2724 2.09684 90.5639 1.23791C88.8553 0.37898 80.0635 4.99572 75.8811 7.41146C73.9234 6.87463 69.0469 6.12307 65.2027 7.41146C60.3974 9.02196 57.1938 13.8534 55.859 9.82721C54.5242 5.80097 48.9181 9.82721 46.2485 9.82721C44.1128 9.82721 36.9938 8.21671 33.7013 7.41146C31.7436 9.2009 26.9205 12.6724 23.2899 12.2429C19.6592 11.8135 17.6837 10.4535 17.1498 9.82721Z"
                    fill="url(#paint0_linear_1_764)"
                    fill-opacity="0.12"
                  />
                  <path
                    d="M1.00171 47.6328L17.2007 9.82375C17.7365 10.4498 19.7188 11.8092 23.3619 12.2385C27.0051 12.6678 31.8447 9.19769 33.8092 7.40896C37.113 8.21389 44.2564 9.82375 46.3994 9.82375C49.0782 9.82375 54.7036 5.79911 56.043 9.82375C57.3824 13.8484 60.597 9.01882 65.4188 7.40896C69.2762 6.12108 74.1694 6.87234 76.1339 7.40896C80.3306 4.99419 89.1527 0.37928 90.8671 1.23787C92.5816 2.09646 94.9746 4.09984 95.9568 4.99421L100.109 1.23787"
                    stroke="#61E224"
                    stroke-width="0.762173"
                    stroke-linecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_764"
                      x1="51.7221"
                      y1="1.13281"
                      x2="51.7221"
                      y2="49.016"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#49D76C" />
                      <stop offset="0.901042" stop-color="white" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="binance__buttons">
            <ul>
              <li>
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
                  Binance Savings
                </a>
              </li>
              <li>
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
                  SBinance Futures
                </a>
              </li>
            </ul>
          </div>

          
        </div>
        <div className="colinbase">
            <table>
                {tableObject.map((e)=>{
                    return (
                      <tr key={e.key}>
                        <td>
                          <img src={require("../../../img/colinbase.png")} alt="" />
                        </td>
                        <td>
                          <span>{e.name}</span>
                        </td>
                        <td>
                          <span>{e.persent}</span>
                        </td>
                        <td>
                          <img src={require("../../../img/algorithm_line.png")} alt="" />
                        </td>
                        <td>
                          <img src={require("../../../img/pensil.png")} alt="" />
                        </td>
                        <td>
                          <div>
                            <img src={require("../../../img/metamask_1.png")} alt="" />
                            <img src={require("../../../img/metamask_2.png")} alt="" />
                          </div>
                        </td>
                      </tr>
                      
                    )
                })}
              
            </table>
          </div>
      </div>
      <div className="leftSection__bottom">
        <div className="close">
          <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.59047 0.213257L5.00961 3.79412L1.42875 0.213257L0.0223389 1.61967L3.6032 5.20052L0.0223389 8.78138L1.42875 10.1878L5.00961 6.60693L8.59047 10.1878L9.99687 8.78138L6.41602 5.20052L9.99687 1.61967L8.59047 0.213257Z" fill="#F2F2F2"/>
          </svg>
        </div>
        <div className="leftSection__text">
          <p>Your free trial has been started․ There are <span>5 days</span>  left.</p>
        </div>
        <div className="subscribe__button">
          <a href="#">Subscribe</a>
        </div>
      </div>
    </div>
  );
};
