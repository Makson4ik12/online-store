import './Header.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import LocalDB from '../test-data/LocalDB.ts'
import EmptyWishList from '../pages/wishlist-page/EmptyWishList'
import Shopcart from '../pages/shopcart-page/Shopcart';

const Header = () => {
  const navigate = useNavigate();
  const searchRef = React.createRef();

  const [searchCurrentText, setSearchCurrentText] = useState("");
  const [selectedButton, setMenuButton] = useState(null);
  const [searcрMode, changeSearchMode] = useState(false);
  //const { height, width } = useWindowDimensions();

  const selectMenuButton = (activeButton, page) => {
    setMenuButton(activeButton);
    navigate(page || "/error-page");
  }

  const setSearchMode = (mode, find_string) => {
    changeSearchMode(mode);
    setSearchCurrentText(find_string || "");
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate("/search", {state: {searchText: e.target.value}});
    }
  }

  const menuButtons = [{title: "НОВИНКИ"}, {title: "ПЛАТЬЯ"}, {title: "ВЕРХ"},
    {title: "НИЗ"}, {title: "КУРТКИ"}, {title: "МЕЛОЧИ"}, {title: "КОСТЮМЫ"}, {title: "#BOORIVAGIRLS", page: "/boorivagirls"}];

    return (
      <div className="Header">
        <div className="HeaderTopMenuContainer">
          <div className="HeaderTopMenu">
            <HeaderLeftDesktop />
            <HeaderLogo cleanSelectedMenuButtons={() => selectMenuButton(null, "/")} setSearchMode={setSearchMode}/>
            <HeaderRightDesktop setSearchMode={setSearchMode} />
          </div>

          <div className="HeaderBottomMenu">
            {
              !searcрMode 
              ? 
              menuButtons.map((button) => 
                <button 
                  className={button.title === selectedButton ? 'HeaderMenuButtonSelected' : 'HeaderMenuButton'}
                  onClick={() => selectMenuButton(button.title, button.page)}
                >
                  {button.title}
                </button>) 
              :
              <div className="header-big-search-container">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" /*onClick={() => openPage(props.changeContent, <SearchPage searchText={searchRef.current.value}/>)}*/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M18 9C18 4.032 13.968 0 9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9ZM16 9C16 12.867 12.867 16 9 16C5.132 16 2 12.867 2 9C2 5.132 5.132 2 9 2C12.867 2 16 5.132 16 9ZM16.6618 16.8935C16.3395 17.2139 16.3379 17.7349 16.6583 18.0572L18.315 19.7237C18.6353 20.046 19.1563 20.0476 19.4787 19.7272L19.7289 19.4785C20.0512 19.1581 20.0527 18.6371 19.7323 18.3148L18.0757 16.6482C17.7553 16.3259 17.2343 16.3244 16.912 16.6448L16.6618 16.8935Z" fill="#909090"/>
                </svg>
                <input className="header-big-search" placeholder={searchCurrentText} onKeyDown={handleKeyDown} type='text' ref={searchRef}></input>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                  searchRef.current.value = "";
                  searchRef.current.focus();
                  searchRef.current.placeholder = "Поиск";
                }}>
                  <circle cx="12" cy="12" r="12" fill="#F40000"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.06992 6.15349C6.87859 5.95438 6.56215 5.94817 6.36314 6.13962C6.16414 6.33106 6.15792 6.64767 6.34926 6.84678L11.2829 11.9807L6.15342 16.9153C5.95441 17.1068 5.9482 17.4234 6.13954 17.6225C6.33088 17.8216 6.64731 17.8278 6.84632 17.6363L11.9758 12.7017L16.9135 17.8399C17.1049 18.0391 17.4213 18.0453 17.6203 17.8538C17.8193 17.6624 17.8255 17.3458 17.6342 17.1467L12.6965 12.0085L17.8336 7.06646C18.0326 6.87502 18.0389 6.55841 17.8475 6.3593C17.6562 6.16019 17.3397 6.15398 17.1407 6.34543L12.0036 11.2874L7.06992 6.15349Z" fill="white"/>
                </svg>
              </div>
            }
          </div>
      </div>
    </div>
    );
}
  
const HeaderLeftDesktop = () => {
  return (
    <div className="HeaderLeftContainer">
      <div className="HeaderLeftContainer" onClick={() => window.open("https://yandex.ru/maps/2/saint-petersburg/?ll=30.314997%2C59.938784&z=11", "_blank")}>
        <svg className='HeaderIcon' viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 12.726 15.16 16.63 9.6 20.8C9.4269 20.9298 9.21637 21 9 21C8.78363 21 8.5731 20.9298 8.4 20.8C2.84 16.63 0 12.726 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0ZM9 2C7.14348 2 5.36301 2.7375 4.05025 4.05025C2.7375 5.36301 2 7.14348 2 9C2 11.71 4.118 14.836 8.448 18.306L9 18.742L9.552 18.306C13.882 14.836 16 11.71 16 9C16 7.14348 15.2625 5.36301 13.9497 4.05025C12.637 2.7375 10.8565 2 9 2ZM9 7C9.53043 7 10.0391 7.21071 10.4142 7.58579C10.7893 7.96086 11 8.46957 11 9C11 9.53043 10.7893 10.0391 10.4142 10.4142C10.0391 10.7893 9.53043 11 9 11C8.46957 11 7.96086 10.7893 7.58579 10.4142C7.21071 10.0391 7 9.53043 7 9C7 8.46957 7.21071 7.96086 7.58579 7.58579C7.96086 7.21071 8.46957 7 9 7Z" fill="#FDA3C4"/>
        </svg>

        <p><b>Москва, Нижний вал, 37</b></p>
      </div>

      <div className="HeaderLeftContainer">
        <svg className='HeaderIcon' viewBox="0 0 15 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.8125 0C1.27031 0 0 1.24208 0 2.75V19.25C0 20.7579 1.27031 22 2.8125 22H12.1875C13.7297 22 15 20.7579 15 19.25V2.75C15 1.24208 13.7297 0 12.1875 0H2.8125ZM2.8125 1.83333H12.1875C12.7078 1.83333 13.125 2.24125 13.125 2.75V19.25C13.125 19.7588 12.7078 20.1667 12.1875 20.1667H2.8125C2.29219 20.1667 1.875 19.7588 1.875 19.25V2.75C1.875 2.24125 2.29219 1.83333 2.8125 1.83333ZM7.5 17.4167C7.25136 17.4167 7.0129 17.5132 6.83709 17.6852C6.66127 17.8571 6.5625 18.0902 6.5625 18.3333C6.5625 18.5764 6.66127 18.8096 6.83709 18.9815C7.0129 19.1534 7.25136 19.25 7.5 19.25C7.74864 19.25 7.9871 19.1534 8.16291 18.9815C8.33873 18.8096 8.4375 18.5764 8.4375 18.3333C8.4375 18.0902 8.33873 17.8571 8.16291 17.6852C7.9871 17.5132 7.74864 17.4167 7.5 17.4167Z" fill="#FDA3C4"/>
        </svg>

        <a href="tel:79908881122"><b>+7 990 888 11 22</b></a>
      </div>
    </div>
  );
}

const HeaderLogo = (props) => {
  const navigate = useNavigate();

  return (
    <svg onClick={() => {
        navigate("/"); 
        props.cleanSelectedMenuButtons(); 
        props.setSearchMode(false);
      }}
        className="header-logo" width="300" height="80" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.84086 23.9875C1.87559 23.2928 1.91033 22.7024 1.91033 22.2161C1.94506 21.3478 1.97979 20.4447 2.01453 19.5416C2.04926 18.6386 2.04926 17.4924 2.04926 16.103C2.04926 14.7484 2.01453 13.2202 1.94507 11.6224C1.8756 9.95524 1.80613 8.7743 1.7714 8.11437C1.73667 7.45444 1.6672 6.75978 1.59773 5.96091C1.52827 5.16205 1.4588 4.57158 1.42407 4.18951C1.38933 3.77271 1.31987 3.28644 1.2504 2.76544L1.18093 2.00131C1.1462 1.65398 1.25039 1.34138 1.49353 1.06351C1.73666 0.785644 2.084 0.646715 2.46606 0.611981C2.84813 0.577248 3.23019 0.681446 3.54279 0.924579C3.85539 1.16771 4.02905 1.44558 4.06379 1.82765L4.13326 2.59177C4.20272 3.11277 4.27219 3.56431 4.30692 3.94637C4.34166 4.32844 4.41112 4.95364 4.48059 5.75251C4.55006 6.55138 4.61952 7.31551 4.65426 8.04491C4.68899 8.73958 4.75846 9.88578 4.82792 11.5182C4.89739 13.2202 4.93212 14.7484 4.93212 16.1725C4.93212 17.4576 4.89739 18.6038 4.86266 19.5416C5.07106 19.3332 5.20999 19.1596 5.34892 18.9859C5.73099 18.6386 6.14779 18.2912 6.59932 17.9439C7.05086 17.5966 7.60659 17.2145 8.33599 16.7977C9.06539 16.4156 9.65585 16.103 10.1074 15.9294C10.6979 15.7557 11.4967 15.6168 12.504 15.5126C13.546 15.4431 14.3101 15.4778 14.9006 15.6168C15.4216 15.721 15.9078 15.8599 16.3941 16.0336C16.9151 16.2767 17.4708 16.6588 18.1308 17.1798C18.756 17.7355 19.277 18.2565 19.6243 18.7428C19.9716 19.2638 20.2842 19.8195 20.5274 20.41C20.8052 21.0699 21.0136 22.1814 21.1873 23.8138C21.3957 25.481 21.4304 26.662 21.361 27.3219C21.3262 28.0166 21.222 28.6418 21.0484 29.267C20.84 29.8922 20.5968 30.4826 20.319 31.0384C20.0411 31.6288 19.6243 32.254 19.1033 32.914C18.5823 33.5739 18.096 34.0949 17.6445 34.4422C17.193 34.7896 16.533 35.2064 15.63 35.7274C14.7269 36.2136 13.9975 36.5262 13.4765 36.6999C12.9902 36.8388 12.4345 36.9778 11.7398 37.082C11.1146 37.1862 10.5936 37.2556 10.1768 37.2904C9.82951 37.3251 9.48218 37.3598 9.16958 37.3946C8.78752 37.4293 8.26652 37.4293 7.60659 37.3946C6.87719 37.3598 6.28672 37.2556 5.83519 37.082L5.41839 36.9083C5.03633 36.8041 4.75845 36.561 4.58479 36.2484C4.41112 35.901 4.41113 35.5537 4.55006 35.2064C4.68899 34.859 4.93212 34.6159 5.31419 34.477C5.69625 34.338 6.04359 34.338 6.42566 34.477L6.91192 34.6506C7.08559 34.6854 7.36345 34.7201 7.74552 34.7548C8.23178 34.7548 8.61386 34.7548 8.89172 34.7548C9.16959 34.7201 9.51692 34.6854 9.89898 34.6506C10.2463 34.6159 10.6978 34.5464 11.2188 34.477C11.7746 34.3728 12.2261 34.2686 12.5734 34.1644C12.886 34.0949 13.407 33.8518 14.1364 33.4697C14.9006 33.0529 15.4216 32.7056 15.7342 32.4972C16.012 32.254 16.3594 31.872 16.7762 31.3857C17.193 30.8994 17.5056 30.4479 17.714 29.9964C17.9224 29.5796 18.0613 29.128 18.2002 28.6418C18.3044 28.1902 18.4086 27.6692 18.5128 27.1135C18.5476 26.5578 18.4781 25.5852 18.3392 24.1264C18.1308 22.6676 17.9571 21.7298 17.8182 21.313C17.6445 20.8962 17.4708 20.4794 17.2277 20.1321C16.9846 19.8195 16.6372 19.4722 16.2204 19.0901C15.7689 18.7775 15.4563 18.5344 15.2132 18.4302C14.9353 18.2912 14.6227 18.187 14.3101 18.1176C14.0322 18.0828 13.546 18.0828 12.8166 18.1176C12.0872 18.187 11.6009 18.2912 11.3231 18.3954C10.941 18.4996 10.4547 18.708 9.89898 19.0554C9.34325 19.368 8.89171 19.6806 8.57911 19.9237C8.23178 20.2016 7.84972 20.5142 7.50239 20.792C7.22452 21.0699 6.77298 21.6951 6.14778 22.6329C5.93938 22.876 5.76572 23.1192 5.62679 23.3276C5.24472 23.918 4.96686 24.3696 4.79319 24.6822C4.75846 25.099 4.72373 25.5505 4.72373 26.0368C4.61953 27.5998 4.51532 28.8502 4.41112 29.788C4.34165 30.7258 4.2722 31.4552 4.20273 31.9414C4.13326 32.4624 4.06379 33.0529 3.99433 33.7823C3.92486 34.5464 3.85539 35.0674 3.82066 35.3453C3.78593 35.6579 3.68173 36.0747 3.50806 36.5957C3.47333 36.6304 3.40386 36.6652 3.36912 36.7346C3.29966 36.8041 3.19546 36.8736 2.98706 37.0472C2.77866 37.1862 2.605 37.3251 2.43133 37.4293C2.25766 37.5335 2.04926 37.6377 1.80612 37.7072C1.56299 37.7766 1.3546 37.8114 1.18093 37.7766C1.00726 37.7419 0.833599 37.6724 0.694666 37.4988C0.555732 37.3251 0.451535 37.1167 0.382068 36.8041C0.312602 36.4915 0.277868 36.1442 0.208402 35.7621C0.138935 35.38 0.104193 34.998 0.0694602 34.6854C0.0347269 34.3033 0 33.8865 0 33.4697C0 33.0529 0.034729 32.254 0.104196 31.0731C0.173662 29.8574 0.27786 28.9544 0.416793 28.3986C0.520993 27.8429 0.65993 27.2872 0.833597 26.7662C1.00726 26.2452 1.18093 25.7242 1.42407 25.1684C1.4588 24.7169 1.63246 24.3696 1.84086 23.9875Z" fill="#1F1F1F"/>
      <path d="M40.5014 38.3338C40.2235 38.6811 39.8762 38.8895 39.4246 38.9243L38.5215 39.0285C37.7227 39.0979 36.7501 39.0632 35.5345 38.8548C34.3535 38.6464 33.2768 38.2991 32.3043 37.8823C31.4012 37.4655 30.6371 37.0139 30.0466 36.5971C29.4214 36.1109 28.6225 35.3467 27.7195 34.2005C26.8164 33.0891 26.1912 32.186 25.8786 31.4913C25.5313 30.7619 25.2534 29.5115 25.045 27.7401C24.8019 25.9687 24.7324 24.7183 24.8713 23.9542C25.045 23.2248 25.3576 22.2523 25.8439 21.0366C26.3301 19.8209 26.8859 18.7789 27.4416 17.9106C28.0321 17.077 28.5531 16.3823 29.0741 15.8961C29.5951 15.3751 30.3939 14.8193 31.5054 14.1594C32.6863 13.43 34.1104 12.9437 35.7429 12.7006C37.3406 12.4575 38.4868 12.388 39.251 12.4922C39.9804 12.5617 40.9876 12.8395 42.2727 13.3605C43.5926 13.8815 44.5652 14.3331 45.1904 14.7151C45.8156 15.0972 46.4755 15.6877 47.1701 16.4171C47.8301 17.1465 48.3511 17.8411 48.6637 18.4316C49.011 19.0568 49.3584 20.0293 49.671 21.3492C49.9488 22.6691 50.0877 23.9195 50.0877 25.0309C50.0877 26.0729 50.0183 26.9413 49.9141 27.6359C49.8446 28.3653 49.5668 29.3379 49.15 30.623C48.6984 31.9081 48.2121 32.9849 47.6564 33.8185C47.1007 34.6868 46.3366 35.4857 45.3293 36.2151C44.322 36.9792 43.5579 37.4655 43.0021 37.6739C42.5159 37.9517 41.6476 38.1601 40.5014 38.3338ZM33.4852 35.4857C33.9715 35.1731 34.423 35.0689 34.9093 35.2078L35.8471 35.5204C36.3333 35.6941 36.8543 35.7983 37.4448 35.833C38.0005 35.9025 38.7647 35.8677 39.772 35.7288C40.7792 35.5899 41.4391 35.4509 41.7865 35.312C42.1338 35.1731 42.6896 34.791 43.4537 34.2353C44.2178 33.6448 44.7736 33.0543 45.1904 32.4639C45.6419 31.8387 46.024 31.0051 46.3713 29.9283C46.7534 28.8169 46.9965 27.9485 47.1007 27.3928C47.1702 26.8023 47.2049 26.0382 47.2049 25.0657C47.2049 24.1626 47.1007 23.1206 46.8576 21.9744C46.6144 20.8629 46.3713 20.0988 46.1281 19.7167C45.885 19.2999 45.503 18.7789 44.982 18.1885C44.461 17.598 43.9747 17.1812 43.5579 16.9033C43.1411 16.6255 42.3769 16.2781 41.2655 15.8613C40.154 15.4793 39.3551 15.2361 38.8689 15.2014C38.4173 15.1319 37.549 15.1667 36.2639 15.3751C35.0482 15.5835 34.0062 15.9655 33.1726 16.4518C32.2695 17.0075 31.6096 17.4243 31.2623 17.7369C30.8802 18.119 30.4287 18.6747 29.9424 19.4041C29.4561 20.0988 29.0046 20.9671 28.5878 22.0439C28.1363 23.0859 27.8931 23.9195 27.8237 24.4752C27.7542 24.9962 27.7889 26.0035 27.9279 27.497C28.1363 29.0253 28.3447 29.9978 28.5878 30.4841C28.8309 31.0051 29.3519 31.7345 30.1508 32.707C30.9149 33.6448 31.5054 34.27 31.9222 34.6173C32.339 34.8257 32.86 35.1383 33.4852 35.4857Z" fill="#1F1F1F"/>
      <path d="M69.3619 38.3338C69.0841 38.6811 68.7367 38.8895 68.2852 38.9243L67.3821 39.0285C66.5833 39.0979 65.6107 39.0632 64.3951 38.8548C63.2141 38.6464 62.1374 38.2991 61.1649 37.8823C60.2618 37.4655 59.4977 37.0139 58.9072 36.5971C58.282 36.1109 57.4831 35.3467 56.5801 34.2005C55.677 33.0891 55.0518 32.186 54.7392 31.4913C54.3919 30.7619 54.114 29.5115 53.9056 27.7401C53.6625 25.9687 53.593 24.7183 53.7319 23.9542C53.9056 23.2248 54.2182 22.2523 54.7045 21.0366C55.1907 19.8209 55.7465 18.7789 56.3022 17.9106C56.8927 17.077 57.4137 16.3823 57.9347 15.8961C58.4557 15.3751 59.2546 14.8193 60.366 14.1594C61.547 13.43 62.971 12.9437 64.6035 12.7006C66.2012 12.4575 67.3474 12.388 68.1115 12.4922C68.8409 12.5617 69.8482 12.8395 71.1333 13.3605C72.4532 13.8815 73.4257 14.3331 74.0509 14.7151C74.6761 15.0972 75.3361 15.6877 76.0307 16.4171C76.6907 17.1465 77.2117 17.8411 77.5243 18.4316C77.8716 19.0568 78.2189 20.0293 78.5315 21.3492C78.8094 22.6691 78.9483 23.9195 78.9483 25.0309C78.9483 26.0729 78.8789 26.9413 78.7747 27.6359C78.7052 28.3653 78.4273 29.3379 78.0105 30.623C77.559 31.9081 77.0727 32.9849 76.517 33.8185C75.9613 34.6868 75.1971 35.4857 74.1899 36.2151C73.1826 36.9792 72.4185 37.4655 71.8627 37.6739C71.3765 37.9517 70.5081 38.1601 69.3619 38.3338ZM62.3458 35.4857C62.8321 35.1731 63.2836 35.0689 63.7699 35.2078L64.7077 35.5204C65.1939 35.6941 65.7149 35.7983 66.3054 35.833C66.8611 35.9025 67.6253 35.8677 68.6325 35.7288C69.6398 35.5899 70.2997 35.4509 70.6471 35.312C70.9944 35.1731 71.5501 34.791 72.3143 34.2353C73.0784 33.6448 73.6341 33.0543 74.0509 32.4639C74.5025 31.8387 74.8845 31.0051 75.2319 29.9283C75.6139 28.8169 75.8571 27.9485 75.9613 27.3928C76.0307 26.8023 76.0655 26.0382 76.0655 25.0657C76.0655 24.1626 75.9613 23.1206 75.7181 21.9744C75.475 20.8629 75.2319 20.0988 74.9887 19.7167C74.7456 19.2999 74.3635 18.7789 73.8425 18.1885C73.3215 17.598 72.8353 17.1812 72.4185 16.9033C72.0017 16.6255 71.2375 16.2781 70.1261 15.8613C69.0146 15.4793 68.2157 15.2361 67.7295 15.2014C67.2779 15.1319 66.4096 15.1667 65.1245 15.3751C63.9088 15.5835 62.8668 15.9655 62.0332 16.4518C61.1301 17.0075 60.4702 17.4243 60.1229 17.7369C59.7408 18.119 59.2893 18.6747 58.803 19.4041C58.3168 20.0988 57.8652 20.9671 57.4484 22.0439C56.9969 23.0859 56.7537 23.9195 56.6843 24.4752C56.6148 24.9962 56.6495 26.0035 56.7885 27.497C56.9969 29.0253 57.2053 29.9978 57.4484 30.4841C57.6915 31.0051 58.2125 31.7345 59.0114 32.707C59.7755 33.6448 60.366 34.27 60.7828 34.6173C61.1996 34.8257 61.7206 35.1383 62.3458 35.4857Z" fill="#1F1F1F"/>
      <path d="M85.9711 29.6847C85.9711 29.9278 85.9711 30.2057 85.9711 30.4488C86.0058 31.074 86.0406 31.6645 86.0753 32.2897C86.1101 32.9149 86.1448 33.4706 86.1448 33.9569C86.1448 34.4779 86.1101 35.0336 86.0753 35.6241V36.5966C86.0406 36.944 85.8669 37.2566 85.5891 37.4997C85.3112 37.7428 84.9638 37.8818 84.5818 37.847C84.1997 37.8123 83.8524 37.6734 83.5398 37.4302C83.2272 37.1524 83.123 36.8398 83.1577 36.4924V35.5894C83.1925 34.9642 83.2272 34.4432 83.2272 33.9569C83.2272 33.5054 83.1925 32.9496 83.1577 32.3939C83.123 31.8034 83.0883 31.213 83.0535 30.553C83.0535 29.8584 83.0188 28.6774 82.9493 26.9755C82.8799 25.7251 82.8451 24.7178 82.8451 23.9537C82.8104 23.5369 82.7756 23.0506 82.7409 22.4949C82.6714 20.9666 82.6367 19.8552 82.6367 19.091C82.6367 18.3269 82.6714 17.5628 82.7409 16.8334C82.7409 16.7986 82.7409 16.7292 82.7409 16.6597C82.7409 16.5902 82.7756 16.4513 82.8451 16.2776C82.9146 16.104 82.9493 15.9303 83.0188 15.7566C83.0882 15.583 83.1925 15.444 83.3314 15.3051C83.4703 15.1662 83.6092 15.062 83.7829 14.9925C83.9566 14.923 84.1303 14.8883 84.3734 14.923C84.6165 14.9578 84.8597 15.062 85.1375 15.2356C85.5891 15.5135 85.8322 15.7914 85.9364 16.0345C86.0406 16.2776 86.0406 16.4513 85.9017 16.5902L85.728 16.7639C85.728 17.3544 85.728 18.049 85.728 18.8826C85.728 19.7162 85.728 20.4456 85.728 21.1403C85.728 21.8002 85.728 22.4949 85.728 23.2243C85.7627 23.398 85.7974 23.6064 85.7974 23.8842C85.8322 24.4052 85.8669 24.7873 85.9017 25.1346C86.4227 23.919 86.8047 23.0159 87.0826 22.4254C87.3952 21.8002 87.7425 21.2098 88.0899 20.5846C88.4372 19.9246 89.0971 18.9521 90.0002 17.667C91.0075 16.3124 91.7021 15.444 92.0842 15.062C92.5705 14.6799 93.1262 14.3326 93.7514 14.02L94.4808 13.7421C94.8281 13.5684 95.2102 13.5337 95.627 13.6726C96.0091 13.8116 96.2869 14.02 96.4606 14.3326C96.6343 14.6452 96.6343 14.9925 96.4953 15.3746C96.3564 15.7219 96.1133 15.9998 95.7659 16.1387L95.0365 16.4513C94.6892 16.5902 94.3766 16.7639 94.1335 16.9376C93.8903 17.1807 93.3346 17.9101 92.4663 19.0563C91.5979 20.3067 91.0075 21.2098 90.6949 21.7655C90.3823 22.356 90.0697 22.9117 89.7918 23.5022C89.5139 24.0926 89.0971 25.0304 88.5414 26.3156C87.8815 27.7396 87.3257 28.6774 86.8742 29.1984C86.5616 29.3721 86.2837 29.5458 85.9711 29.6847Z" fill="#1F1F1F"/>
      <path d="M104.033 37.9842C103.721 38.2273 103.373 38.3315 102.991 38.3315C102.609 38.3315 102.262 38.1579 101.984 37.9147C101.706 37.6369 101.567 37.359 101.567 37.0117L101.637 36.4907C101.637 36.1433 101.637 35.5529 101.637 34.7193C101.637 33.8857 101.637 33.191 101.637 32.67C101.637 32.1837 101.602 31.4891 101.567 30.6207C101.532 29.7177 101.463 28.6409 101.393 27.4253C101.289 26.1749 101.185 24.9939 101.116 23.8825C101.046 22.771 101.011 21.9027 100.942 21.208C100.872 20.5133 100.803 19.8534 100.733 19.124C100.664 18.3946 100.595 17.8736 100.56 17.5957C100.56 17.3873 100.525 17.1442 100.456 16.8663L100.386 16.3801C100.317 16.0675 100.386 15.7549 100.629 15.477C100.872 15.1644 101.185 14.9907 101.567 14.956C101.949 14.8865 102.331 14.9907 102.679 15.1991C103.026 15.4075 103.2 15.6854 103.234 16.0327L103.338 16.4495C103.373 16.7969 103.408 17.1095 103.443 17.3873C103.443 17.6305 103.512 18.1167 103.616 18.8461C103.686 19.5755 103.755 20.3049 103.825 20.9996C103.894 21.6943 103.964 22.5973 104.033 23.7088C104.068 24.8203 104.137 26.0012 104.207 27.2169C104.311 28.4673 104.415 29.544 104.45 30.4471C104.485 31.3501 104.519 32.0448 104.519 32.5658C104.519 33.0868 104.519 33.7815 104.519 34.6498C104.519 35.5181 104.519 36.1433 104.519 36.4907L104.45 37.0811C104.485 37.4285 104.346 37.7411 104.033 37.9842Z" fill="#1F1F1F"/>
      <path d="M108.202 14.5396C108.34 14.1922 108.584 13.9491 108.931 13.8102C109.278 13.6712 109.66 13.6712 110.077 13.7754C110.459 13.9144 110.737 14.1228 110.911 14.4354L111.501 15.6858C111.953 16.5888 112.404 17.7003 112.856 18.9854C113.307 20.1664 113.655 21.1042 113.933 21.7294C114.28 22.3893 114.766 23.2924 115.357 24.4386C115.982 25.5848 116.711 26.9394 117.51 28.4329C118.309 29.9612 118.865 30.9337 119.177 31.42C119.49 31.941 119.802 32.4272 120.08 32.8788C120.323 33.2608 120.706 33.7471 121.261 34.3028C121.365 34.407 121.504 34.5112 121.609 34.6154C121.782 34.407 121.921 34.1639 122.095 33.9208C122.755 32.8788 123.206 32.1146 123.415 31.5936C123.658 30.9684 123.901 30.3432 124.144 29.6486C124.422 28.9192 124.874 27.634 125.499 25.7584C126.159 23.9176 126.645 22.6672 126.923 21.9725C127.201 21.2778 127.513 20.4442 127.861 19.4717C128.243 18.5339 128.521 17.874 128.694 17.4572L128.937 16.9014C129.042 16.5888 129.319 16.3457 129.667 16.2068C130.049 16.0678 130.431 16.0678 130.813 16.172C131.195 16.311 131.473 16.5194 131.612 16.8667C131.785 17.214 131.785 17.5266 131.612 17.874L131.438 18.4297C131.264 18.777 130.987 19.437 130.605 20.3748C130.257 21.3473 129.945 22.1462 129.667 22.8061C129.424 23.466 128.937 24.7164 128.277 26.592C127.617 28.4676 127.131 29.7528 126.923 30.4474C126.645 31.1768 126.402 31.8368 126.159 32.462C125.916 33.1566 125.429 34.0944 124.665 35.2754C124.63 35.3448 124.561 35.4838 124.422 35.6574C124.318 35.8311 124.214 35.97 124.144 36.0395C124.075 36.109 123.97 36.2479 123.832 36.4563C123.693 36.6647 123.588 36.8036 123.519 36.8731C123.449 36.9426 123.311 37.0468 123.137 37.1857C122.963 37.3246 122.79 37.3941 122.651 37.4288C122.512 37.4636 122.338 37.4983 122.13 37.5678C121.921 37.6372 121.713 37.6372 121.504 37.4983C120.775 37.4288 120.011 36.9426 119.177 36.0742C118.413 35.3796 117.892 34.7891 117.58 34.2334C117.267 33.7818 116.954 33.2956 116.642 32.7746C116.294 32.2188 115.704 31.1768 114.905 29.5791C114.106 28.0508 113.412 26.731 112.752 25.5848C112.126 24.4386 111.64 23.5008 111.328 22.8408C110.98 22.1114 110.563 21.1042 110.077 19.819C109.695 18.6034 109.278 17.5961 108.896 16.7972L108.236 15.5468C108.063 15.2342 108.063 14.8869 108.202 14.5396Z" fill="#1F1F1F"/>
      <path d="M158.182 32.2194H158.113C157.87 32.6014 157.661 32.9488 157.522 33.2614C157.314 33.5392 157.106 33.8518 156.862 34.1644C156.55 34.5812 155.855 35.3106 154.778 36.3179C153.702 37.3599 152.868 38.0546 152.278 38.3672C151.722 38.6798 151.166 38.9576 150.61 39.166C150.055 39.3744 149.499 39.5481 148.943 39.7218C148.353 39.8607 147.658 39.9649 146.859 39.9996C146.06 39.9996 145.157 39.8607 144.185 39.5828C143.316 39.305 142.657 39.0271 142.205 38.8187C141.753 38.6103 141.302 38.3672 140.85 38.0546C140.399 37.7767 139.947 37.3599 139.496 36.8736C138.975 36.2832 138.558 35.5538 138.245 34.616C137.933 33.7476 137.759 33.053 137.724 32.4972C137.69 31.9762 137.724 31.3858 137.829 30.6564C137.933 29.9617 138.141 29.406 138.35 28.9197C138.558 28.3987 138.975 27.7388 139.6 26.9052C140.225 26.0368 140.781 25.4116 141.267 25.0643C141.719 24.7517 142.17 24.4391 142.691 24.1612C143.212 23.8834 143.872 23.536 144.706 23.1887C145.609 22.8414 146.686 22.5982 147.867 22.5288C149.047 22.4246 150.02 22.4593 150.715 22.7024C151.444 22.9456 152.451 23.6055 153.736 24.6475C153.91 24.7864 154.049 24.9254 154.223 25.0643C153.945 24.1612 153.736 23.4318 153.563 22.9108C153.32 22.2856 152.972 21.5215 152.486 20.5837C152.035 19.6806 151.618 18.986 151.236 18.465C150.888 17.944 150.472 17.4924 150.055 17.1104C149.707 16.7978 149.013 16.381 148.04 15.8947C147.033 15.4084 146.165 15.0958 145.435 14.9916C144.636 14.8527 144.011 14.7832 143.525 14.7832C143.004 14.7485 142.518 14.7485 142.031 14.8527C141.649 14.8527 140.885 15.0611 139.843 15.4432C139.079 15.7558 138.558 16.0336 138.28 16.2073L137.968 16.6241C137.724 16.902 137.412 17.1104 137.03 17.1798C136.648 17.2493 136.266 17.1798 135.918 16.9714C135.571 16.763 135.397 16.4504 135.328 16.1031C135.258 15.7558 135.328 15.4084 135.536 15.1306L135.953 14.6443C136.335 14.0886 137.273 13.5676 138.766 13.0118C140.121 12.4908 141.128 12.2477 141.788 12.213C142.379 12.1435 142.969 12.1088 143.56 12.1435C144.22 12.1435 145.053 12.2477 145.991 12.4214C146.998 12.595 148.11 12.9771 149.36 13.6023C150.61 14.1928 151.548 14.7485 152.139 15.2695C152.694 15.7905 153.215 16.3462 153.702 17.0062C154.188 17.6661 154.674 18.4997 155.195 19.5417C155.716 20.5837 156.098 21.452 156.341 22.1467C156.585 22.8414 156.897 23.8139 157.279 25.1338C157.661 26.3494 157.974 27.2178 158.182 27.7388C158.356 28.2945 158.495 28.8502 158.669 29.406C158.842 29.9617 158.946 30.3438 159.016 30.5869C159.224 30.8648 159.155 31.2468 158.842 31.7331L158.182 32.2194ZM155.682 30.8648C155.438 30.5174 155.23 30.1701 155.022 29.8922C154.744 29.5102 154.431 29.0934 154.084 28.6418C153.736 28.225 153.007 27.5304 151.896 26.6273C150.819 25.759 150.124 25.2727 149.742 25.1685C149.464 25.099 148.943 25.0643 148.144 25.099C147.276 25.1685 146.547 25.3422 145.956 25.5853C145.227 25.8632 144.671 26.141 144.289 26.3842C143.907 26.6273 143.525 26.8704 143.143 27.1136C142.865 27.322 142.483 27.7735 141.997 28.3987C141.51 29.0586 141.198 29.5102 141.059 29.8228C140.955 30.1354 140.816 30.5869 140.711 31.1079C140.642 31.5942 140.607 31.9762 140.642 32.2888C140.642 32.6014 140.746 33.0877 140.989 33.7476C141.232 34.3728 141.476 34.8244 141.753 35.1022C142.066 35.4496 142.379 35.7274 142.657 35.9011C142.934 36.0748 143.247 36.2484 143.56 36.4221C143.872 36.5958 144.428 36.7694 145.157 36.9778C145.783 37.1862 146.338 37.2904 146.825 37.2904C147.38 37.2557 147.832 37.1862 148.179 37.1168C148.561 37.0126 148.978 36.8736 149.43 36.7C149.881 36.5263 150.298 36.3179 150.749 36.1095C151.131 35.8664 151.791 35.3106 152.729 34.4423C153.667 33.5392 154.257 32.9488 154.466 32.7056C154.674 32.393 154.848 32.0804 154.987 31.8373C155.126 31.6636 155.334 31.3163 155.682 30.8648Z" fill="#1F1F1F"/>
      <path d="M102.856 6.69182C101.571 6.13609 100.598 5.26775 99.6954 4.19102C99.3828 3.80895 97.6462 1.96809 97.9935 1.30816C98.1672 0.995557 99.105 1.16922 99.3481 1.30816C99.626 1.44709 99.9038 1.72495 100.112 1.96809C100.46 2.38489 100.703 2.87115 100.946 3.35742C101.432 4.36469 101.814 5.44142 102.474 6.34449C102.856 6.90022 103.759 6.37922 103.377 5.82349C102.405 4.43416 102.023 2.69748 100.946 1.34288C100.147 0.335616 98.5145 -0.567442 97.3683 0.439824C96.2916 1.34289 97.2988 2.73221 97.924 3.60055C99.105 5.23301 100.425 6.72655 102.3 7.56015C102.96 7.87275 103.481 6.96969 102.856 6.69182Z" fill="#1F1F1F"/>
      <path d="M98.0232 2.14109C98.8915 3.7041 100.003 5.16289 101.08 6.58696C101.496 7.10796 102.4 6.58696 101.983 6.06596C100.871 4.64189 99.7946 3.1831 98.9263 1.62009C98.5789 1.02963 97.6759 1.55063 98.0232 2.14109Z" fill="#1F1F1F"/>
      <path d="M102.605 7.663C105.454 7.52407 108.232 6.58626 110.872 5.50953C111.74 5.1622 113.581 4.57174 113.373 3.32134C112.817 0.160604 104.377 5.23166 103.196 5.6832C102.571 5.92633 102.849 6.93361 103.474 6.69047C104.759 6.20421 105.94 5.579 107.156 4.98853C107.92 4.60646 111.08 2.76561 111.983 3.52974C112.331 3.8076 112.088 3.8076 111.671 4.016C111.428 4.15494 111.15 4.25914 110.872 4.39807C110.212 4.67594 109.517 4.91907 108.857 5.19693C106.843 5.92633 104.794 6.55154 102.605 6.65574C101.946 6.65574 101.911 7.69773 102.605 7.663Z" fill="#1F1F1F"/>
      <path d="M110.979 3.66868C108.756 4.67594 106.464 5.50954 104.171 6.30841C103.546 6.51681 103.824 7.52407 104.449 7.31567C106.846 6.44734 109.208 5.57901 111.535 4.57174C112.125 4.29388 111.569 3.39081 110.979 3.66868Z" fill="#1F1F1F"/>
    </svg>
  );
}
  
const HeaderRightDesktop = (props) => {
  const navigate = useNavigate();
  const [viewShopcart, setViewShopcart] = useState(false);
  const [viewWishlist, setViewWishlist] = useState(false);

  const openWishlist = () => {
    const favouriteProductsList = LocalDB.getLSItems('favouriteProductsList');
  
    if (favouriteProductsList.size > 0) {
      navigate("/wishlist");
    } else {
      setViewWishlist(true);
    }
  }

  return (
    <div className="HeaderRightContainer">
      <SearchBox setSearchMode={props.setSearchMode}/>

      <svg onClick={() => openWishlist()}
        className='HeaderIcon' viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.99976 1C3.23876 1 0.999756 3.216 0.999756 5.95C0.999756 8.157 1.87476 13.395 10.4878 18.69C10.642 18.7839 10.8192 18.8335 10.9998 18.8335C11.1804 18.8335 11.3575 18.7839 11.5118 18.69C20.1248 13.395 20.9998 8.157 20.9998 5.95C20.9998 3.216 18.7608 1 15.9998 1C13.2388 1 10.9998 4 10.9998 4C10.9998 4 8.76076 1 5.99976 1Z" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      <svg onClick={() => setViewShopcart(true)} className='HeaderIcon' viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M2.05065 7.92C2.07076 7.6694 2.18452 7.43557 2.36928 7.26508C2.55404 7.09459 2.79624 6.99995 3.04765 7H16.9516C17.2031 6.99995 17.4453 7.09459 17.63 7.26508C17.8148 7.43557 17.9285 7.6694 17.9486 7.92L18.8256 18.84C18.8477 19.1152 18.8126 19.392 18.7225 19.6529C18.6323 19.9139 18.4892 20.1533 18.302 20.3562C18.1147 20.5592 17.8875 20.7211 17.6347 20.8319C17.3818 20.9427 17.1087 20.9999 16.8326 21H3.16665C2.89057 20.9999 2.6175 20.9427 2.36463 20.8319C2.11175 20.7211 1.88456 20.5592 1.69734 20.3562C1.51013 20.1533 1.36695 19.9139 1.27682 19.6529C1.18669 19.392 1.15156 19.1152 1.17365 18.84L2.04965 7.92H2.05065Z" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.9998 10V5C13.9998 3.93913 13.5783 2.92172 12.8282 2.17157C12.078 1.42143 11.0606 1 9.99976 1C8.93889 1 7.92147 1.42143 7.17133 2.17157C6.42118 2.92172 5.99976 3.93913 5.99976 5V10" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      <Modal open={viewShopcart} onClose={() => setViewShopcart(false)} classNames={{modal: 'shopcart-modal'}} closeIcon={
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="23" cy="23" r="22" fill="white" stroke="black" strokeWidth="2"/>
          <path d="M33.1858 12.792L12.3906 32.7865" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12.7908 12.3921L32.7853 33.1873" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        }>
        <Shopcart closeHandler={() => setViewShopcart(false)}/>
      </Modal>

      <Modal open={viewWishlist} onClose={() => setViewWishlist(false)} center>
        <EmptyWishList onClose={() => setViewWishlist(false)}/>
      </Modal>
    </div>
  );
}

const SearchBox = (props) => {
  const searchRef = React.createRef();
  const navigate = useNavigate();

  const focusSearch = () => {
    searchRef.current.focus();  
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate("/search", {state: {searchText: e.target.value}});
      props.setSearchMode(true, e.target.value);
      searchRef.current.value = "";
      searchRef.current.blur();
    }
  }

  return (
    <div className="HeaderRightContainer">
      <svg className='HeaderIcon' onClick={() => focusSearch()} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M20 11C20 6.032 15.968 2 11 2C6.032 2 2 6.032 2 11C2 15.968 6.032 20 11 20C15.968 20 20 15.968 20 11ZM18 11C18 14.867 14.867 18 11 18C7.132 18 4 14.867 4 11C4 7.132 7.132 4 11 4C14.867 4 18 7.132 18 11ZM18.6618 18.8937C18.3395 19.214 18.3379 19.735 18.6583 20.0574L20.315 21.7239C20.6353 22.0462 21.1563 22.0478 21.4786 21.7274L21.7289 21.4787C22.0512 21.1583 22.0527 20.6373 21.7323 20.315L20.0757 18.6484C19.7553 18.3261 19.2343 18.3246 18.912 18.6449L18.6618 18.8937Z" fill="#1F1F1F"/>
      </svg>
      <input className="Search" type="text" placeholder="Поиск" ref={searchRef} onKeyDown={handleKeyDown}/>
    </div>
  );
}

function HeaderBottomMenuOpenedDesktop() {
  const buttons = ["Комбинезоны", "Пиджаки", "Рубашки", "Свитшоты", "Худи", "Топы", "Футболки"];

  return (
    <div className="HeaderBottomMenuOpened">
      {buttons.map((button) => <button className="HeaderMenuButton">{button}</button>)}
    </div>
  );
}

export default Header;