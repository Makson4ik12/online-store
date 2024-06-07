import './Header.css'
import React, { useState, createRef } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import LocalDB from '../test-data/LocalDB.ts'
import EmptyWishList from '../pages/wishlist-page/EmptyWishList'
import Shopcart from '../pages/shopcart-page/Shopcart';
import HandleResponsiveView, { screenSizes } from '../features/ResponsiveView.ts';
import { HeaderLogo, HeaderMobilePhone, HeaderSearch } from './HeaderComponents.js';

export default function Header() {
  const screenType = HandleResponsiveView();
  const [searchMode, setSearchMode] = useState({mode: false, searchString: ""});

  if (screenType.width >= screenSizes.smallTablet.width) {
    return <HeaderDesktop searchMode={searchMode} setSearchMode={setSearchMode}/>;
  } else {
    return <HeaderMobile searchMode={searchMode} setSearchMode={setSearchMode}/>
  }
}

const HeaderDesktop = ({searchMode = {mode: false, searchString: ""}, setSearchMode = () => {}}) => {
  const navigate = useNavigate();
  const searchRef = createRef();
  const [menuButton, setMenuButton] = useState(null);

  const handleSelectMenuButton = (activeButton, page) => {
    setMenuButton(activeButton);
    navigate(page || "/error");
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate({pathname: "/search", search: createSearchParams({s: e.target.value}).toString()});
    }
  }

  const menuButtons = [{title: "НОВИНКИ"}, {title: "ПЛАТЬЯ"}, {title: "ВЕРХ"},
    {title: "НИЗ"}, {title: "КУРТКИ"}, {title: "МЕЛОЧИ"}, {title: "КОСТЮМЫ"}, {title: "#BOORIVAGIRLS", page: "/boorivagirls"}];

  return (
    <div className="header-container" style={searchMode.mode ? {boxShadow: "0px 5px 8px #FDA3C43D"} : {}}>
      <div className="header-topmenu-container" style={searchMode.mode ? {borderBottom: "none"} : {}}>
        <div className="header-top-menu">

          <div className="header-top-menu-left">
            <div className="header-left-container" onClick={() => window.open("https://yandex.ru/maps/2/saint-petersburg/?ll=30.314997%2C59.938784&z=11", "_blank")}>
              <svg className='header-icon' viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 12.726 15.16 16.63 9.6 20.8C9.4269 20.9298 9.21637 21 9 21C8.78363 21 8.5731 20.9298 8.4 20.8C2.84 16.63 0 12.726 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0ZM9 2C7.14348 2 5.36301 2.7375 4.05025 4.05025C2.7375 5.36301 2 7.14348 2 9C2 11.71 4.118 14.836 8.448 18.306L9 18.742L9.552 18.306C13.882 14.836 16 11.71 16 9C16 7.14348 15.2625 5.36301 13.9497 4.05025C12.637 2.7375 10.8565 2 9 2ZM9 7C9.53043 7 10.0391 7.21071 10.4142 7.58579C10.7893 7.96086 11 8.46957 11 9C11 9.53043 10.7893 10.0391 10.4142 10.4142C10.0391 10.7893 9.53043 11 9 11C8.46957 11 7.96086 10.7893 7.58579 10.4142C7.21071 10.0391 7 9.53043 7 9C7 8.46957 7.21071 7.96086 7.58579 7.58579C7.96086 7.21071 8.46957 7 9 7Z" fill="#FDA3C4"/>
              </svg>

              <a href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.314997%2C59.938784&z=11"><b>Москва, Нижний вал, 37</b></a>
            </div>

            <HeaderMobilePhone />
          </div>

          <HeaderLogo handleSelectMenuButton={handleSelectMenuButton} setSearchMode={setSearchMode} />
          <HeaderDesktopRight handleChangeSearchMode={setSearchMode}/>
        </div>

        <div 
          className="header-bottom-menu"
          style={searchMode.mode ? {justifyContent: "center"} : {}}
          >
          {!searchMode.mode ? (
            menuButtons.map((button) => 
              <button 
                className={button.title === menuButton ? 'HeaderMenuButtonSelected' : 'HeaderMenuButton'}
                onClick={() => handleSelectMenuButton(button.title, button.page)}
              >
                {button.title}
              </button>) 
          ) : 
            <HeaderSearch 
              handleKeyDown={handleKeyDown} 
              searchRef={searchRef} 
              onClickHandler={() => navigate({pathname: "/search", search: createSearchParams({s: searchRef.current.value}).toString()})} 
              searchString={searchMode.searchString}
              handleOnChange={(e) => setSearchMode({mode: true, searchString: e.target.value})}
            /> }
        </div>
    </div>
  </div>
  );
}
  
const HeaderDesktopRight = ({handleChangeSearchMode = () => {}}) => {
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
    <div className="header-right-container">
      <HeaderDesktopSearchBox handleChangeSearchMode={handleChangeSearchMode}/>

      <svg onClick={() => openWishlist()}
        className='header-icon' viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.99976 1C3.23876 1 0.999756 3.216 0.999756 5.95C0.999756 8.157 1.87476 13.395 10.4878 18.69C10.642 18.7839 10.8192 18.8335 10.9998 18.8335C11.1804 18.8335 11.3575 18.7839 11.5118 18.69C20.1248 13.395 20.9998 8.157 20.9998 5.95C20.9998 3.216 18.7608 1 15.9998 1C13.2388 1 10.9998 4 10.9998 4C10.9998 4 8.76076 1 5.99976 1Z" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      <svg onClick={() => setViewShopcart(true)} className='header-icon' viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg" >
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

      <Modal open={viewWishlist} onClose={() => setViewWishlist(false)} classNames={{modal: "empty-wishlist-modal"}} closeIcon={
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="23" cy="23" r="23" fill="#F40000"/>
          <path d="M33.1858 12.792L12.3906 32.7865" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <path d="M12.7908 12.3916L32.7853 33.1868" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        }
       center>
        <EmptyWishList onClose={() => setViewWishlist(false)}/>
      </Modal>
    </div>
  );
}

const HeaderDesktopSearchBox = ({handleChangeSearchMode = () => {}}) => {
  const searchRef = React.createRef();
  const navigate = useNavigate();

  const focusSearch = () => {
    searchRef.current.focus();  
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate({pathname: "/search", search: createSearchParams({s: e.target.value}).toString()});
      handleChangeSearchMode({mode: true, searchString: e.target.value});
      searchRef.current.value = "";
      searchRef.current.blur();
    }
  }

  return (
    <div className="header-right-container">
      <svg className='header-icon' onClick={() => focusSearch()} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M20 11C20 6.032 15.968 2 11 2C6.032 2 2 6.032 2 11C2 15.968 6.032 20 11 20C15.968 20 20 15.968 20 11ZM18 11C18 14.867 14.867 18 11 18C7.132 18 4 14.867 4 11C4 7.132 7.132 4 11 4C14.867 4 18 7.132 18 11ZM18.6618 18.8937C18.3395 19.214 18.3379 19.735 18.6583 20.0574L20.315 21.7239C20.6353 22.0462 21.1563 22.0478 21.4786 21.7274L21.7289 21.4787C22.0512 21.1583 22.0527 20.6373 21.7323 20.315L20.0757 18.6484C19.7553 18.3261 19.2343 18.3246 18.912 18.6449L18.6618 18.8937Z" fill="#1F1F1F"/>
      </svg>
      <input className="Search" type="text" placeholder="Поиск" ref={searchRef} onKeyDown={handleKeyDown}/>
    </div>
  );
}

function HeaderDesktopBottomSubmenu() {
  const buttons = ["Комбинезоны", "Пиджаки", "Рубашки", "Свитшоты", "Худи", "Топы", "Футболки"];

  return (
    <div className="HeaderBottomMenuOpened">
      {buttons.map((button) => <button className="HeaderMenuButton">{button}</button>)}
    </div>
  );
}

const HeaderMobile = ({searchMode = {mode: false, searchString: ""}, setSearchMode = () => {}}) => {
  const navigate = useNavigate();
  const searchRef = React.createRef();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate({pathname: "/search", search: createSearchParams({s: e.target.value}).toString()});
      searchRef.current.blur();
    }
  }
    
  return (
    <div className="header-container" style={searchMode.mode ? {boxShadow: "0px 5px 8px #FDA3C43D"} : {}}>
      <div className="header-topmenu-container">
        <div className="header-top-menu">
          <HeaderLogo onClickHandler={() => navigate("/")} setSearchMode={setSearchMode}/>

          <div className="header-left-container" style={{gap: "15vw"}}>
            <HeaderMobilePhone />
            <svg onClick={() => setSearchMode({mode: true, searchString: ""})} className='header-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M20 11C20 6.032 15.968 2 11 2C6.032 2 2 6.032 2 11C2 15.968 6.032 20 11 20C15.968 20 20 15.968 20 11ZM18 11C18 14.867 14.867 18 11 18C7.132 18 4 14.867 4 11C4 7.132 7.132 4 11 4C14.867 4 18 7.132 18 11ZM18.6618 18.8937C18.3395 19.214 18.3379 19.735 18.6583 20.0574L20.315 21.7239C20.6353 22.0462 21.1563 22.0478 21.4786 21.7274L21.7289 21.4787C22.0512 21.1583 22.0527 20.6373 21.7323 20.315L20.0757 18.6484C19.7553 18.3261 19.2343 18.3246 18.912 18.6449L18.6618 18.8937Z" fill="#1F1F1F"/>
            </svg>
          </div>
        </div>
      </div>

      {searchMode.mode ? 
        <HeaderSearch 
          handleKeyDown={handleKeyDown} 
          searchRef={searchRef} 
          onClickHandler={() => navigate({pathname: "/search", search: createSearchParams({s: searchRef.current.value}).toString()})}
          searchString={searchMode.searchString}
          handleOnChange={(e) => setSearchMode({mode: true, searchString: e.target.value})}
        /> 
      : <></>}
    </div>
  );
}