import {Link} from 'react-router-dom';
import './BottomBar.css'
import HandleResponsiveView, { screenSizes } from '../features/ResponsiveView.ts';

const Info = () => {
  return (
    <>
      <h1>ИНФО</h1>
      <ul>
        <Link to="/contacts">Контакты</Link>
        <Link to="/loyalty">Система лояльности</Link>
        <Link to="/exchange">Обмен и возврат</Link>
        <Link to="/delivery">Доставка и оплата</Link>
      </ul>
    </>
  );
}

const SocialNetworksButtons = () => {
  return (
    <div className="bottom-bar-sn-container">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3789_1454)">
        <path d="M11.4643 9.18829C11.1861 8.60993 10.2912 7.93633 9.71635 8.41219C8.88598 8.4162 8.39895 9.3766 8.44544 10.1791C8.51695 11.4131 9.86826 11.904 10.9131 11.4774C11.8516 11.094 11.842 9.97262 11.4643 9.18829ZM10.1944 11.2029C10.3278 11.1829 10.461 11.1432 10.5901 11.0839C10.6046 11.0961 10.62 11.1063 10.6355 11.1169C10.4937 11.1715 10.3443 11.1994 10.1944 11.2029Z" fill="#FFD4E4"/>
        <path d="M14.1876 6.56119C14.1942 6.35825 14.1825 6.15488 14.1684 5.96441C14.1594 5.84252 14.0735 5.741 13.9448 5.74067C13.6963 5.73991 12.8961 5.64305 12.623 5.87242C12.5467 5.78867 12.3829 5.81825 12.3733 5.96452C12.3355 6.53508 12.3098 7.1052 12.3057 7.67706C12.305 7.76645 12.3702 7.86288 12.4613 7.88151C12.5766 7.90503 12.6967 7.92355 12.8172 7.9333C12.8253 7.94674 12.8352 7.95942 12.8473 7.97079C13.1271 8.23668 13.6765 8.03374 14.0028 7.98293C14.074 7.97177 14.1389 7.89722 14.1553 7.83027C14.2559 7.42299 14.2793 6.97313 14.1876 6.56119Z" fill="#FFD4E4"/>
        <path d="M14.454 9.58014C14.4388 9.45381 14.3414 9.38339 14.2408 9.36941C14.3692 9.23484 14.251 8.9501 14.021 9.00482C13.6985 9.08142 13.3682 9.08294 13.0432 9.01847C12.9236 8.99474 12.8393 9.07275 12.8159 9.16333C12.7765 9.21111 12.7569 9.27601 12.7774 9.35435C13.2928 11.3261 12.2383 12.9295 10.1533 12.9682C8.19544 13.0046 6.9424 11.5102 7.34058 9.60951C7.35444 9.54342 7.34599 9.45511 7.2877 9.4095C7.2877 9.4095 7.28023 9.40256 7.27069 9.39389C7.3123 9.32141 7.31501 9.22617 7.24317 9.14621C7.23667 9.13906 7.22898 9.13364 7.22194 9.12725C7.2371 9.09139 7.24891 9.05303 7.25292 9.00937C7.26083 8.92345 7.17491 8.85097 7.09463 8.85107C7.00914 8.85118 6.93926 8.87686 6.87067 8.91012C6.85182 8.90211 6.83178 8.8955 6.80913 8.89257C6.38484 8.83721 5.9949 8.95931 5.57234 8.99117C5.45955 8.99962 5.36312 9.07958 5.36377 9.19974C5.36767 9.834 5.37049 10.4683 5.37591 11.1025C5.37482 11.1444 5.38739 11.1769 5.40473 11.2047C5.42358 12.1139 5.69911 13.0693 6.07843 13.6703C6.86591 14.918 8.73869 14.8182 10.0279 14.8911C11.1294 14.9533 13.4879 15.2537 14.1555 14.0721C14.8344 12.8709 14.6109 10.8914 14.454 9.58014ZM13.2426 13.1322C13.2392 13.1291 13.2362 13.1251 13.2325 13.1219C13.2904 12.9123 13.3402 12.7013 13.3805 12.4878C13.3913 12.4594 13.4022 12.431 13.4132 12.4026C13.4085 12.4414 13.4025 12.4799 13.3972 12.5184C13.3429 12.7223 13.2914 12.927 13.2426 13.1322ZM12.8068 14.3526C12.9088 14.2995 13.0064 14.2348 13.0976 14.1556L13.126 14.165C13.1489 14.1726 13.1702 14.1752 13.1911 14.1754C13.2048 14.1947 13.2221 14.2109 13.2415 14.2247C13.0999 14.2977 12.9436 14.3535 12.777 14.3954C12.7889 14.3822 12.7993 14.3687 12.8068 14.3526ZM6.94391 9.50029C6.91369 9.60701 6.89028 9.71211 6.87046 9.81613C6.86406 9.74884 6.85605 9.68145 6.84608 9.61395C6.88606 9.56844 6.90437 9.50419 6.89538 9.44471C6.91759 9.45045 6.93958 9.45695 6.96017 9.46562C6.95453 9.47689 6.9476 9.48718 6.94391 9.50029ZM10.0498 14.4468C10.1991 14.437 10.3486 14.4277 10.498 14.4169C10.4983 14.4335 10.499 14.4494 10.5022 14.4659C10.4108 14.4606 10.3234 14.4561 10.2416 14.453C10.1795 14.4504 10.1148 14.4486 10.0498 14.4468Z" fill="#FFD4E4"/>
        <path d="M17.0798 3.19387C16.0032 1.83909 14.5417 0.801224 12.886 0.293073C11.1886 -0.227971 9.24845 0.0122362 7.57188 0.495142C4.23694 1.45597 1.68188 4.11493 0.784224 7.44933C0.444446 8.71114 0.37597 9.96722 0.537408 11.1833C0.537408 11.1883 0.535457 11.1922 0.535783 11.1975C0.558319 11.469 0.60805 11.7253 0.674793 11.9722C1.0124 13.5138 1.72371 14.9761 2.74467 16.2828C4.50835 18.5401 7.54457 20.4468 10.4849 19.7561C10.4832 19.9 10.5966 20.045 10.772 19.9868C14.2853 18.8228 17.5187 16.8161 18.93 13.243C20.2776 9.83222 19.3045 5.99303 17.0798 3.19387ZM0.935694 11.0259C0.90579 10.7694 0.887046 10.5123 0.880653 10.2551C0.884228 10.2808 0.888021 10.3065 0.891921 10.3321C0.906548 10.5724 0.932226 10.8101 0.962889 11.0458C0.954113 11.0388 0.944578 11.0326 0.935694 11.0259ZM1.93401 9.82073C1.92307 9.85919 1.91191 9.89744 1.90053 9.93569C1.89739 9.86028 1.89403 9.78487 1.89338 9.70924C1.90768 9.65929 1.92166 9.60935 1.93563 9.55929C1.93401 9.6464 1.93314 9.73351 1.93401 9.82073ZM9.6528 18.2495C9.50762 18.2206 9.36243 18.1919 9.21724 18.1636C9.36341 18.1762 9.50946 18.1921 9.65562 18.2066C9.65269 18.221 9.65302 18.2353 9.6528 18.2495ZM15.4203 17.0476C15.5026 17.0148 15.5845 16.9793 15.6658 16.9412C15.5983 16.9958 15.532 17.0519 15.4631 17.1051C15.4518 17.0838 15.437 17.0645 15.4203 17.0476ZM10.4527 3.71545C10.5379 3.71913 10.6226 3.72488 10.7073 3.73138C10.7071 3.73203 10.7068 3.73257 10.7066 3.73311C10.5207 3.74232 10.3351 3.75543 10.15 3.77342C10.2511 3.75511 10.3519 3.73528 10.4527 3.71545ZM3.24436 14.3178C3.20113 14.1709 3.15845 14.0236 3.11402 13.8772C3.18813 14.052 3.26603 14.2255 3.3461 14.3981C3.31262 14.3712 3.27839 14.3446 3.24436 14.3178ZM3.7069 5.65444C3.6744 5.67784 3.64092 5.69995 3.60755 5.72227C3.59346 5.71111 3.57916 5.70038 3.56269 5.6929C3.63745 5.62573 3.70972 5.55649 3.78242 5.48737C3.75555 5.54198 3.73085 5.59799 3.7069 5.65444ZM4.14928 12.9511C4.15091 12.8768 4.15102 12.8026 4.15297 12.7281C4.15914 12.7389 4.16359 12.7502 4.16987 12.7607C4.17269 12.7654 4.17637 12.7678 4.17962 12.7717C4.19739 12.894 4.21971 13.0153 4.2455 13.1354C4.21299 13.0743 4.18146 13.0125 4.14928 12.9511ZM5.32681 14.4577C4.3403 13.4289 4.52092 11.6096 4.60337 10.3141C4.68625 9.01354 4.89309 7.66028 4.68777 6.36054C4.7115 6.29694 4.74238 6.23952 4.77217 6.18112C4.91909 6.0148 5.05583 5.84101 5.17783 5.65715C6.06899 4.87228 7.72725 4.84617 8.78689 4.81052C10.2967 4.75981 11.9177 4.61224 13.4031 4.91898C15.2054 5.29115 15.546 6.9142 15.5254 8.53335C15.504 10.2089 15.5856 11.9615 15.1273 13.5882C14.5429 15.6619 12.3599 15.5977 10.5668 15.5732C9.62951 15.5604 8.69327 15.4834 7.76084 15.3925C6.85039 15.3039 5.98415 15.1434 5.32681 14.4577ZM8.12597 19.285C8.5326 19.3429 8.94052 19.3916 9.34954 19.4344C8.93413 19.4204 8.52544 19.3705 8.12597 19.285Z" fill="#FFD4E4"/>
        </g>
        <defs>
        <clipPath id="clip0_3789_1454">
        <rect width="20" height="20" fill="white"/>
        </clipPath>
        </defs>
      </svg>

      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3789_1451)">
        <path d="M19.3609 2.6546C18.5611 0.017712 16.1279 0.41839 13.8601 0.427258C10.7293 0.439424 6.36115 -0.646614 3.56578 1.21645C1.64683 2.4954 0.888059 5.27654 0.436651 7.38242C-0.147044 10.105 -0.18107 13.0501 0.551411 15.7444C1.05138 17.5836 2.71091 19.9976 4.82308 19.618C6.18091 19.8875 7.54442 19.9152 8.94267 19.8453C10.7166 19.7569 12.7969 19.7242 14.4783 19.132C14.5274 19.1147 14.5682 19.0835 14.6047 19.0478C15.1187 18.981 15.6336 18.901 16.15 18.7939C18.6416 18.2773 19.1179 15.9159 19.413 13.7289C19.9109 10.0368 20.4607 6.27875 19.3609 2.6546ZM2.03741 5.90426C2.03019 5.9419 2.02998 5.97974 2.03431 6.01706C1.97595 6.31473 1.9179 6.61241 1.86707 6.91019C1.85831 6.92844 1.84727 6.9437 1.8414 6.96566C1.69168 7.5309 1.55703 8.09727 1.43319 8.66447C1.42948 8.66725 1.42525 8.66942 1.42164 8.6723C1.53878 7.90889 1.67838 7.22766 1.81253 6.69665C1.87996 6.42991 1.96018 6.14378 2.05019 5.85157C2.04658 5.86972 2.04081 5.88601 2.03741 5.90426ZM4.10895 15.938C4.0673 15.8585 4.02801 15.7776 3.98378 15.7001C4.05771 15.7274 4.12947 15.7578 4.2 15.7907C4.35641 15.9845 4.50561 16.1837 4.64914 16.3872C4.4588 16.2486 4.28001 16.0974 4.10895 15.938ZM6.43466 4.02408C6.40765 3.94582 6.38166 3.86726 6.35723 3.78817C6.52498 3.72022 6.69233 3.65135 6.86029 3.58402C6.72574 3.73559 6.58468 3.88293 6.43466 4.02408ZM6.97021 5.62927C7.14673 5.42079 7.31222 5.20663 7.46925 4.98722C7.51029 4.95762 7.55225 4.92906 7.59246 4.89844C7.43512 5.13487 7.28778 5.37923 7.14436 5.62659C7.08631 5.62742 7.02826 5.62865 6.97021 5.62927ZM8.92132 12.237C8.93153 11.9842 8.94813 11.7328 8.94648 11.4776C8.94586 11.3901 8.91555 11.3263 8.87286 11.2784C8.94411 11.2754 9.01742 11.2766 9.08712 11.2705C9.01165 11.5896 8.96112 11.9126 8.92132 12.237ZM14.121 10.0381C13.7138 10.0567 13.6371 10.5301 13.8799 10.7346C13.6372 11.5021 13.668 12.3171 13.63 13.1432C13.5715 14.4165 13.6054 15.6907 13.6763 16.9626C12.4533 17.056 11.2255 17.1769 9.99736 17.3028C10.0832 16.664 9.93735 15.884 9.92683 15.3379C9.9024 14.0677 9.84218 12.7625 10.0326 11.5021C10.0585 11.3307 10.0308 11.171 9.92446 11.0498C10.2119 10.8414 10.1726 10.4177 9.80279 10.2714C9.15641 10.0159 8.26741 10.108 7.51008 10.1447C7.35965 9.39932 7.36387 8.56157 7.52163 7.82022C8.06965 7.78856 8.61736 7.74052 9.16425 7.69948C9.46563 7.6769 9.5842 7.41872 9.52935 7.2026C9.53904 7.18548 9.55131 7.1694 9.55833 7.15125C9.73722 6.68634 9.76196 6.20307 9.9057 5.72557C10.1659 4.8607 10.9036 4.14781 11.5995 3.62114C12.9172 2.62346 14.6003 2.3129 16.1998 2.57387C16.2699 3.33522 16.3876 4.08832 16.4867 4.84524C16.2863 4.83121 16.0827 4.83905 15.9021 4.84235C15.3066 4.85338 14.7159 4.95185 14.121 4.97134C13.8488 4.98031 13.6105 5.19467 13.615 5.47729C13.6218 5.90869 13.7245 6.34886 13.7733 6.78171L13.7734 6.78192C13.598 7.03969 13.7101 7.47635 14.121 7.48924C14.5885 7.50388 15.0554 7.51419 15.5231 7.50099C15.7638 7.49419 16.0649 7.4878 16.3456 7.43841C16.2622 7.82939 16.2687 8.25317 16.254 8.64632C16.2381 9.07102 16.2383 9.50387 16.2568 9.93538C16.088 9.94404 15.9191 9.9561 15.7517 9.96373C15.2081 9.98858 14.6646 10.0133 14.121 10.0381ZM16.3362 11.6995C16.32 11.5383 16.3115 11.3789 16.2918 11.2167C16.2764 11.0883 16.1894 10.9866 16.0829 10.9284C16.1687 10.934 16.2545 10.9404 16.3403 10.9433C16.3451 10.9819 16.3476 11.0212 16.3527 11.0597C16.3652 11.1514 16.4144 11.22 16.481 11.2667C16.431 11.411 16.3813 11.5553 16.3362 11.6995ZM18.1356 14.0295C18.0118 14.9444 17.8051 15.6463 17.4859 16.1869C17.7242 15.441 17.9464 14.6942 18.1475 13.9447C18.1436 13.9725 18.1392 14.0015 18.1356 14.0295Z" fill="#FFD4E4"/>
        </g>
        <defs>
        <clipPath id="clip0_3789_1451">
        <rect width="20" height="20" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </div>
  );
}

const SendIvankaBlock = () => {
  return (
    <div className="bottom-bar-mail-container">
      <img src="https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/9f7cbaac0981d34317a7fec64ca20237fc5cd5ec" />

      <div className="bottom-bar-mail-right">
        <p>Нам важно знать,<br></br> что ты думаешь про нас!<br></br>Просто напиши мне!</p>
        <h1 id='send-ivanca-link'>Написать Иванке</h1>
      </div>
    </div>
  );
}

const BottomBar = () => {
  const screenSize = HandleResponsiveView();

  switch (screenSize.width) {
    case screenSizes.smallTablet.width:
    case screenSizes.bigMobile.width: {
      return (
        <div className="bottom-bar-container">
          <div className="bottom-bar">
            <div className="bottom-bar-info-container">
              <Info />
              <SocialNetworksButtons />
            </div>
            <div className="bottom-bar-info-container">
              <h1>КОНТАКТЫ</h1>
              <ul>
                <li>г.Киев, ул. Нижний Вал, 37</li>
                <li>Пн — Вс: с 11:00 до 21:00</li>
                <li>+38 063 843 34 71</li>  
              </ul>
            </div>
            <SendIvankaBlock />
          </div>
        </div>
      );
    }

    case screenSizes.smallMobile.width: {
      return (
        <div className="bottom-bar-container">
          <div className="bottom-bar">
            <div style={{display: "flex", flexDirection: "row", width: "100%", alignItems: "flex-start", justifyContent: "space-between"}}>
              <div className="bottom-bar-info-container">
                <Info />
                <SocialNetworksButtons />
              </div>
              <div className="bottom-bar-info-container">
                <h1>КОНТАКТЫ</h1>
                <ul>
                  <li>г.Киев, ул. Нижний Вал, 37</li>
                  <li>Пн — Вс: с 11:00 до 21:00</li>
                  <li>+38 063 843 34 71</li>  
                </ul>
              </div>
            </div>

            <SendIvankaBlock />
          </div>
        </div>
      );
    }

    default: {
      return (
        <div className="bottom-bar-container">
          <div className="bottom-bar">
            <svg id='bottom-logo' height="25" viewBox="0 0 96 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.11051 15.099C1.13146 14.6799 1.15242 14.3237 1.15242 14.0304C1.17337 13.5065 1.19432 12.9618 1.21527 12.417C1.23623 11.8722 1.23623 11.1807 1.23623 10.3426C1.23623 9.52546 1.21528 8.60353 1.17337 7.63969C1.13146 6.63394 1.08956 5.92154 1.06861 5.52343C1.04765 5.12532 1.00575 4.70626 0.96384 4.22435C0.921934 3.74243 0.880028 3.38622 0.859075 3.15574C0.838122 2.9043 0.796216 2.61096 0.75431 2.29666L0.712402 1.8357C0.691449 1.62617 0.754306 1.43759 0.900977 1.26997C1.04765 1.10234 1.25718 1.01853 1.48767 0.997581C1.71815 0.976628 1.94863 1.03949 2.1372 1.18616C2.32578 1.33283 2.43055 1.50045 2.4515 1.73094L2.49341 2.1919C2.53531 2.50619 2.57722 2.77858 2.59817 3.00907C2.61913 3.23955 2.66103 3.61671 2.70294 4.09863C2.74484 4.58055 2.78675 5.04151 2.8077 5.48153C2.82866 5.90059 2.87056 6.59204 2.91247 7.57683C2.95438 8.60353 2.97533 9.52546 2.97533 10.3845C2.97533 11.1598 2.95438 11.8512 2.93342 12.417C3.05914 12.2913 3.14295 12.1865 3.22676 12.0817C3.45725 11.8722 3.70869 11.6627 3.98107 11.4531C4.25346 11.2436 4.58871 11.0131 5.02873 10.7617C5.46874 10.5312 5.82494 10.3426 6.09733 10.2379C6.45353 10.1331 6.93545 10.0493 7.54309 9.98643C8.17168 9.94452 8.63264 9.96547 8.98885 10.0493C9.30314 10.1121 9.59648 10.196 9.88982 10.3007C10.2041 10.4474 10.5394 10.6779 10.9375 10.9922C11.3146 11.3274 11.6289 11.6417 11.8385 11.9351C12.048 12.2494 12.2366 12.5846 12.3832 12.9408C12.5509 13.3389 12.6766 14.0094 12.7813 14.9942C12.9071 15.9999 12.928 16.7123 12.8861 17.1105C12.8652 17.5295 12.8023 17.9067 12.6975 18.2838C12.5718 18.661 12.4251 19.0172 12.2575 19.3524C12.0899 19.7086 11.8385 20.0858 11.5242 20.4839C11.2099 20.882 10.9165 21.1963 10.6441 21.4058C10.3717 21.6154 9.97364 21.8668 9.42886 22.1811C8.88408 22.4744 8.44407 22.663 8.12977 22.7678C7.83643 22.8516 7.50118 22.9354 7.08212 22.9983C6.70497 23.0611 6.39067 23.103 6.13923 23.124C5.9297 23.1449 5.72017 23.1659 5.5316 23.1868C5.30111 23.2078 4.98682 23.2078 4.58871 23.1868C4.1487 23.1659 3.79249 23.103 3.52011 22.9983L3.26867 22.8935C3.03819 22.8306 2.87056 22.684 2.7658 22.4954C2.66103 22.2858 2.66104 22.0763 2.74485 21.8668C2.82866 21.6573 2.97533 21.5106 3.20581 21.4268C3.43629 21.343 3.64583 21.343 3.87631 21.4268L4.16965 21.5315C4.27442 21.5525 4.44204 21.5734 4.67252 21.5944C4.96586 21.5944 5.19635 21.5944 5.36398 21.5944C5.5316 21.5734 5.74113 21.5525 5.97161 21.5315C6.18114 21.5106 6.45353 21.4687 6.76782 21.4268C7.10307 21.3639 7.37546 21.3011 7.58499 21.2382C7.77357 21.1963 8.08786 21.0496 8.52788 20.8191C8.98884 20.5677 9.30314 20.3582 9.49172 20.2325C9.65934 20.0858 9.86887 19.8553 10.1203 19.562C10.3717 19.2686 10.5603 18.9962 10.686 18.7238C10.8118 18.4724 10.8956 18.2 10.9794 17.9067C11.0422 17.6343 11.1051 17.32 11.168 16.9847C11.1889 16.6495 11.147 16.0628 11.0632 15.1828C10.9375 14.3027 10.8327 13.737 10.7489 13.4856C10.6441 13.2341 10.5394 12.9827 10.3927 12.7732C10.246 12.5846 10.0365 12.3751 9.78506 12.1446C9.51267 11.956 9.32409 11.8093 9.17742 11.7465C9.0098 11.6627 8.82122 11.5998 8.63264 11.5579C8.46502 11.537 8.17168 11.537 7.73166 11.5579C7.29165 11.5998 6.99831 11.6627 6.83069 11.7255C6.6002 11.7884 6.30686 11.9141 5.97161 12.1236C5.63636 12.3122 5.36397 12.5008 5.17539 12.6475C4.96586 12.8151 4.73538 13.0037 4.52585 13.1713C4.35823 13.3389 4.08584 13.7161 3.70868 14.2818C3.58296 14.4285 3.4782 14.5751 3.39439 14.7009C3.1639 15.0571 2.99628 15.3294 2.89151 15.518C2.87056 15.7695 2.84961 16.0418 2.84961 16.3352C2.78675 17.2781 2.72389 18.0324 2.66103 18.5981C2.61912 19.1639 2.57722 19.6039 2.53532 19.8972C2.49341 20.2115 2.4515 20.5677 2.4096 21.0077C2.36769 21.4687 2.32579 21.783 2.30483 21.9506C2.28388 22.1392 2.22102 22.3906 2.11626 22.7049C2.0953 22.7259 2.05339 22.7468 2.03244 22.7887C1.99053 22.8306 1.92768 22.8725 1.80196 22.9773C1.67624 23.0611 1.57148 23.1449 1.46671 23.2078C1.36195 23.2706 1.23622 23.3335 1.08955 23.3754C0.942882 23.4173 0.817167 23.4383 0.712402 23.4173C0.607636 23.3964 0.502873 23.3545 0.41906 23.2497C0.335248 23.1449 0.272391 23.0192 0.230485 22.8306C0.188578 22.6421 0.167625 22.4325 0.125719 22.202C0.0838134 21.9716 0.0628552 21.7411 0.0419022 21.5525C0.0209492 21.322 0 21.0706 0 20.8191C0 20.5677 0.0209505 20.0858 0.0628565 19.3734C0.104763 18.64 0.16762 18.0952 0.251432 17.76C0.314292 17.4248 0.398106 17.0895 0.502871 16.7752C0.607636 16.4609 0.712404 16.1466 0.859075 15.8114C0.880028 15.539 0.98479 15.3294 1.11051 15.099Z" fill="#F40000"/>
              <path d="M24.4325 23.7526C24.2649 23.9621 24.0554 24.0878 23.783 24.1088L23.2382 24.1716C22.7563 24.2136 22.1696 24.1926 21.4362 24.0669C20.7238 23.9412 20.0743 23.7316 19.4876 23.4802C18.9428 23.2288 18.4819 22.9564 18.1257 22.7049C17.7485 22.4116 17.2666 21.9506 16.7218 21.2592C16.177 20.5887 15.7999 20.0439 15.6113 19.6248C15.4018 19.1848 15.2341 18.4305 15.1084 17.3619C14.9617 16.2933 14.9198 15.539 15.0037 15.078C15.1084 14.638 15.297 14.0513 15.5903 13.318C15.8837 12.5846 16.2189 11.956 16.5542 11.4322C16.9104 10.9293 17.2247 10.5103 17.539 10.2169C17.8533 9.90264 18.3352 9.5674 19.0057 9.16929C19.7181 8.72928 20.5772 8.43593 21.5619 8.28926C22.5258 8.14259 23.2172 8.10068 23.6782 8.16354C24.1182 8.20545 24.7259 8.37307 25.5011 8.68737C26.2973 9.00166 26.884 9.27405 27.2612 9.50453C27.6383 9.73502 28.0364 10.0912 28.4555 10.5312C28.8536 10.9712 29.1679 11.3903 29.3565 11.7465C29.566 12.1237 29.7755 12.7103 29.9641 13.5066C30.1317 14.3028 30.2155 15.0571 30.2155 15.7276C30.2155 16.3562 30.1736 16.88 30.1108 17.2991C30.0689 17.7391 29.9013 18.3258 29.6498 19.101C29.3774 19.8763 29.0841 20.5258 28.7488 21.0287C28.4136 21.5525 27.9526 22.0344 27.345 22.4745C26.7373 22.9354 26.2764 23.2288 25.9411 23.3545C25.6478 23.5221 25.124 23.6478 24.4325 23.7526ZM20.2 22.0344C20.4933 21.8459 20.7657 21.783 21.0591 21.8668L21.6248 22.0554C21.9181 22.1602 22.2324 22.223 22.5886 22.244C22.9239 22.2859 23.3849 22.2649 23.9925 22.1811C24.6001 22.0973 24.9982 22.0135 25.2078 21.9297C25.4173 21.8459 25.7526 21.6154 26.2135 21.2801C26.6745 20.9239 27.0097 20.5677 27.2612 20.2115C27.5336 19.8344 27.764 19.3315 27.9736 18.682C28.2041 18.0115 28.3507 17.4876 28.4136 17.1524C28.4555 16.7962 28.4764 16.3352 28.4764 15.7485C28.4764 15.2038 28.4136 14.5752 28.2669 13.8837C28.1202 13.2132 27.9736 12.7523 27.8269 12.5218C27.6802 12.2703 27.4497 11.956 27.1355 11.5998C26.8212 11.2436 26.5278 10.9922 26.2764 10.8246C26.0249 10.657 25.564 10.4474 24.8935 10.196C24.223 9.9655 23.7411 9.81883 23.4477 9.79788C23.1753 9.75597 22.6515 9.77693 21.8762 9.90264C21.1429 10.0284 20.5143 10.2588 20.0114 10.5522C19.4666 10.8874 19.0685 11.1389 18.859 11.3274C18.6285 11.5579 18.3561 11.8932 18.0628 12.3332C17.7694 12.7523 17.4971 13.2761 17.2456 13.9256C16.9732 14.5542 16.8266 15.0571 16.7847 15.3923C16.7428 15.7066 16.7637 16.3143 16.8475 17.2152C16.9732 18.1372 17.099 18.7239 17.2456 19.0172C17.3923 19.3315 17.7066 19.7715 18.1885 20.3582C18.6495 20.9239 19.0057 21.3011 19.2571 21.5106C19.5086 21.6363 19.8228 21.8249 20.2 22.0344Z" fill="#F40000"/>
              <path d="M41.8436 23.7526C41.676 23.9621 41.4665 24.0878 41.1941 24.1088L40.6493 24.1716C40.1674 24.2136 39.5807 24.1926 38.8474 24.0669C38.135 23.9412 37.4854 23.7316 36.8987 23.4802C36.354 23.2288 35.893 22.9564 35.5368 22.7049C35.1596 22.4116 34.6777 21.9506 34.1329 21.2592C33.5882 20.5887 33.211 20.0439 33.0224 19.6248C32.8129 19.1848 32.6453 18.4305 32.5196 17.3619C32.3729 16.2933 32.331 15.539 32.4148 15.078C32.5196 14.638 32.7081 14.0513 33.0015 13.318C33.2948 12.5846 33.6301 11.956 33.9653 11.4322C34.3215 10.9293 34.6358 10.5103 34.9501 10.2169C35.2644 9.90264 35.7463 9.5674 36.4168 9.16929C37.1292 8.72928 37.9883 8.43593 38.9731 8.28926C39.9369 8.14259 40.6284 8.10068 41.0893 8.16354C41.5294 8.20545 42.137 8.37307 42.9123 8.68737C43.7085 9.00166 44.2952 9.27405 44.6723 9.50453C45.0495 9.73502 45.4476 10.0912 45.8666 10.5312C46.2647 10.9712 46.579 11.3903 46.7676 11.7465C46.9771 12.1237 47.1867 12.7103 47.3752 13.5066C47.5429 14.3028 47.6267 15.0571 47.6267 15.7276C47.6267 16.3562 47.5848 16.88 47.5219 17.2991C47.48 17.7391 47.3124 18.3258 47.061 19.101C46.7886 19.8763 46.4952 20.5258 46.16 21.0287C45.8247 21.5525 45.3638 22.0344 44.7561 22.4745C44.1485 22.9354 43.6875 23.2288 43.3523 23.3545C43.0589 23.5221 42.5351 23.6478 41.8436 23.7526ZM37.6111 22.0344C37.9045 21.8459 38.1769 21.783 38.4702 21.8668L39.0359 22.0554C39.3293 22.1602 39.6436 22.223 39.9998 22.244C40.335 22.2859 40.796 22.2649 41.4036 22.1811C42.0113 22.0973 42.4094 22.0135 42.6189 21.9297C42.8284 21.8459 43.1637 21.6154 43.6247 21.2801C44.0856 20.9239 44.4209 20.5677 44.6723 20.2115C44.9447 19.8344 45.1752 19.3315 45.3847 18.682C45.6152 18.0115 45.7619 17.4876 45.8247 17.1524C45.8666 16.7962 45.8876 16.3352 45.8876 15.7485C45.8876 15.2038 45.8247 14.5752 45.678 13.8837C45.5314 13.2132 45.3847 12.7523 45.238 12.5218C45.0914 12.2703 44.8609 11.956 44.5466 11.5998C44.2323 11.2436 43.9389 10.9922 43.6875 10.8246C43.4361 10.657 42.9751 10.4474 42.3046 10.196C41.6341 9.9655 41.1522 9.81883 40.8589 9.79788C40.5865 9.75597 40.0626 9.77693 39.2874 9.90264C38.554 10.0284 37.9254 10.2588 37.4226 10.5522C36.8778 10.8874 36.4797 11.1389 36.2701 11.3274C36.0397 11.5579 35.7673 11.8932 35.4739 12.3332C35.1806 12.7523 34.9082 13.2761 34.6568 13.9256C34.3844 14.5542 34.2377 15.0571 34.1958 15.3923C34.1539 15.7066 34.1748 16.3143 34.2587 17.2152C34.3844 18.1372 34.5101 18.7239 34.6568 19.0172C34.8034 19.3315 35.1177 19.7715 35.5996 20.3582C36.0606 20.9239 36.4168 21.3011 36.6682 21.5106C36.9197 21.6363 37.234 21.8249 37.6111 22.0344Z" fill="#F40000"/>
              <path d="M51.8635 18.5363C51.8635 18.6829 51.8635 18.8506 51.8635 18.9972C51.8845 19.3744 51.9055 19.7306 51.9264 20.1077C51.9474 20.4849 51.9683 20.8201 51.9683 21.1135C51.9683 21.4278 51.9474 21.763 51.9264 22.1192V22.7059C51.9055 22.9154 51.8007 23.104 51.6331 23.2507C51.4654 23.3974 51.2559 23.4812 51.0254 23.4602C50.7949 23.4393 50.5854 23.3555 50.3968 23.2088C50.2082 23.0412 50.1454 22.8526 50.1663 22.643V22.0983C50.1873 21.7211 50.2083 21.4068 50.2083 21.1135C50.2083 20.8411 50.1873 20.5058 50.1663 20.1706C50.1454 19.8144 50.1244 19.4582 50.1035 19.0601C50.1035 18.641 50.0825 17.9286 50.0406 16.9019C49.9987 16.1476 49.9778 15.54 49.9778 15.079C49.9568 14.8276 49.9359 14.5342 49.9149 14.199C49.873 13.2771 49.8521 12.6065 49.8521 12.1456C49.8521 11.6846 49.873 11.2237 49.9149 10.7836C49.9149 10.7627 49.9149 10.7208 49.9149 10.6789C49.9149 10.637 49.9359 10.5532 49.9778 10.4484C50.0197 10.3436 50.0406 10.2389 50.0825 10.1341C50.1244 10.0293 50.1873 9.94552 50.2711 9.8617C50.3549 9.77789 50.4387 9.71503 50.5435 9.67313C50.6483 9.63122 50.753 9.61027 50.8997 9.63122C51.0464 9.65217 51.193 9.71503 51.3607 9.8198C51.6331 9.98742 51.7797 10.155 51.8426 10.3017C51.9054 10.4484 51.9055 10.5532 51.8216 10.637L51.7169 10.7417C51.7169 11.0979 51.7169 11.517 51.7169 12.0199C51.7169 12.5227 51.7169 12.9627 51.7169 13.3818C51.7169 13.7799 51.7169 14.199 51.7169 14.639C51.7378 14.7438 51.7588 14.8695 51.7588 15.0371C51.7797 15.3514 51.8007 15.5819 51.8216 15.7914C52.1359 15.0581 52.3664 14.5133 52.534 14.1571C52.7226 13.7799 52.9321 13.4237 53.1417 13.0466C53.3512 12.6485 53.7493 12.0618 54.2941 11.2865C54.9017 10.4693 55.3208 9.94551 55.5513 9.71503C55.8446 9.48455 56.1799 9.27502 56.557 9.08644L56.997 8.91882C57.2066 8.81405 57.437 8.7931 57.6885 8.87691C57.919 8.96072 58.0866 9.08645 58.1914 9.27502C58.2961 9.4636 58.2961 9.67313 58.2123 9.90361C58.1285 10.1131 57.9818 10.2808 57.7723 10.3646L57.3323 10.5532C57.1228 10.637 56.9342 10.7417 56.7875 10.8465C56.6408 10.9932 56.3056 11.4332 55.7818 12.1246C55.2579 12.8789 54.9017 13.4237 54.7132 13.759C54.5246 14.1152 54.336 14.4504 54.1684 14.8066C54.0007 15.1628 53.7493 15.7286 53.4141 16.5038C53.016 17.3629 52.6807 17.9286 52.4083 18.2429C52.2197 18.3477 52.0521 18.4524 51.8635 18.5363Z" fill="#F40000"/>
              <path d="M62.7587 23.5439C62.5701 23.6906 62.3606 23.7535 62.1301 23.7535C61.8996 23.7535 61.6901 23.6487 61.5225 23.502C61.3548 23.3344 61.271 23.1668 61.271 22.9573L61.3129 22.643C61.3129 22.4334 61.3129 22.0772 61.3129 21.5744C61.3129 21.0715 61.3129 20.6524 61.3129 20.3381C61.3129 20.0448 61.292 19.6257 61.271 19.1019C61.2501 18.5571 61.2082 17.9076 61.1663 17.1742C61.1034 16.4199 61.0405 15.7075 60.9986 15.037C60.9567 14.3665 60.9358 13.8427 60.8939 13.4236C60.852 13.0046 60.8101 12.6065 60.7681 12.1665C60.7262 11.7264 60.6843 11.4121 60.6634 11.2445C60.6634 11.1188 60.6424 10.9721 60.6005 10.8045L60.5586 10.5112C60.5167 10.3226 60.5586 10.134 60.7053 9.96638C60.852 9.77781 61.0405 9.67304 61.271 9.65209C61.5015 9.61018 61.732 9.67304 61.9415 9.79876C62.1511 9.92448 62.2558 10.0921 62.2768 10.3016L62.3396 10.5531C62.3606 10.7626 62.3815 10.9512 62.4025 11.1188C62.4025 11.2655 62.4444 11.5588 62.5073 11.9988C62.5492 12.4388 62.5911 12.8789 62.633 13.2979C62.6749 13.717 62.7168 14.2618 62.7587 14.9323C62.7796 15.6028 62.8215 16.3151 62.8634 17.0485C62.9263 17.8028 62.9892 18.4524 63.0101 18.9971C63.0311 19.5419 63.052 19.961 63.052 20.2753C63.052 20.5896 63.052 21.0086 63.052 21.5325C63.052 22.0563 63.052 22.4334 63.052 22.643L63.0101 22.9992C63.0311 23.2087 62.9473 23.3973 62.7587 23.5439Z" fill="#F40000"/>
              <path d="M65.2743 9.40079C65.3581 9.19126 65.5048 9.04459 65.7143 8.96078C65.9239 8.87697 66.1544 8.87697 66.4058 8.93983C66.6363 9.02364 66.8039 9.14935 66.9087 9.33793L67.2649 10.0922C67.5372 10.637 67.8096 11.3075 68.082 12.0828C68.3544 12.7952 68.5639 13.3609 68.7316 13.7381C68.9411 14.1362 69.2345 14.6809 69.5907 15.3724C69.9678 16.0638 70.4078 16.881 70.8897 17.782C71.3717 18.7039 71.7069 19.2906 71.8955 19.584C72.0841 19.8983 72.2726 20.1916 72.4403 20.464C72.5869 20.6945 72.8174 20.9878 73.1527 21.3231C73.2155 21.3859 73.2993 21.4488 73.3622 21.5116C73.467 21.3859 73.5508 21.2392 73.6555 21.0926C74.0536 20.464 74.326 20.003 74.4518 19.6887C74.5984 19.3116 74.7451 18.9344 74.8918 18.5154C75.0594 18.0753 75.3318 17.3001 75.7089 16.1686C76.107 15.0581 76.4004 14.3038 76.568 13.8847C76.7356 13.4657 76.9242 12.9628 77.1337 12.3761C77.3642 11.8104 77.5318 11.4123 77.6366 11.1608L77.7833 10.8256C77.8461 10.637 78.0138 10.4903 78.2233 10.4065C78.4538 10.3227 78.6843 10.3227 78.9147 10.3856C79.1452 10.4694 79.3129 10.5951 79.3967 10.8046C79.5014 11.0142 79.5014 11.2027 79.3967 11.4123L79.2919 11.7475C79.1871 11.9571 79.0195 12.3552 78.789 12.9209C78.5795 13.5076 78.3909 13.9895 78.2233 14.3876C78.0766 14.7857 77.7833 15.54 77.3852 16.6715C76.9871 17.803 76.6937 18.5782 76.568 18.9973C76.4004 19.4373 76.2537 19.8354 76.107 20.2125C75.9604 20.6316 75.667 21.1973 75.2061 21.9097C75.1851 21.9517 75.1432 22.0355 75.0594 22.1402C74.9965 22.245 74.9337 22.3288 74.8918 22.3707C74.8499 22.4126 74.787 22.4964 74.7032 22.6221C74.6194 22.7479 74.5565 22.8317 74.5146 22.8736C74.4727 22.9155 74.3889 22.9783 74.2841 23.0622C74.1794 23.146 74.0746 23.1879 73.9908 23.2088C73.907 23.2298 73.8022 23.2507 73.6765 23.2926C73.5508 23.3346 73.4251 23.3345 73.2993 23.2507C72.8593 23.2088 72.3984 22.9155 71.8955 22.3917C71.4345 21.9726 71.1202 21.6164 70.9316 21.2812C70.7431 21.0088 70.5545 20.7154 70.3659 20.4011C70.1564 20.0659 69.8002 19.4373 69.3183 18.4735C68.8363 17.5515 68.4173 16.7553 68.0192 16.0639C67.642 15.3724 67.3487 14.8067 67.1601 14.4086C66.9506 13.9686 66.6991 13.3609 66.4058 12.5857C66.1753 11.8523 65.9239 11.2447 65.6934 10.7627L65.2953 10.0084C65.1905 9.81985 65.1905 9.61032 65.2743 9.40079Z" fill="#F40000"/>
              <path d="M95.4256 20.0663H95.3837C95.237 20.2968 95.1113 20.5063 95.0275 20.6949C94.9018 20.8625 94.7761 21.0511 94.6294 21.2397C94.4408 21.4911 94.0218 21.9312 93.3722 22.5388C92.7227 23.1674 92.2198 23.5864 91.8636 23.775C91.5283 23.9636 91.1931 24.1312 90.8578 24.2569C90.5226 24.3827 90.1874 24.4874 89.8521 24.5922C89.4959 24.676 89.0768 24.7389 88.5949 24.7598C88.113 24.7598 87.5682 24.676 86.9815 24.5084C86.4577 24.3407 86.0596 24.1731 85.7872 24.0474C85.5148 23.9217 85.2424 23.775 84.97 23.5864C84.6977 23.4188 84.4253 23.1674 84.1529 22.874C83.8386 22.5178 83.5871 22.0778 83.3986 21.5121C83.21 20.9883 83.1052 20.5692 83.0843 20.234C83.0633 19.9197 83.0843 19.5635 83.1471 19.1234C83.21 18.7044 83.3357 18.3691 83.4614 18.0758C83.5872 17.7615 83.8386 17.3634 84.2157 16.8605C84.5929 16.3367 84.9281 15.9595 85.2215 15.75C85.4939 15.5614 85.7663 15.3729 86.0806 15.2052C86.3949 15.0376 86.793 14.8281 87.2958 14.6185C87.8406 14.409 88.4902 14.2623 89.2026 14.2204C89.915 14.1576 90.5016 14.1785 90.9207 14.3252C91.3607 14.4719 91.9684 14.87 92.7436 15.4986C92.8484 15.5824 92.9322 15.6662 93.037 15.75C92.8693 15.2052 92.7436 14.7652 92.6389 14.4509C92.4922 14.0738 92.2826 13.6128 91.9893 13.0471C91.7169 12.5023 91.4655 12.0832 91.235 11.7689C91.0255 11.4546 90.774 11.1823 90.5226 10.9518C90.3131 10.7632 89.894 10.5118 89.3073 10.2184C88.6997 9.92507 88.1759 9.73649 87.7358 9.67364C87.2539 9.58982 86.8768 9.54792 86.5834 9.54792C86.2691 9.52696 85.9758 9.52697 85.6824 9.58982C85.452 9.58982 84.991 9.71554 84.3624 9.94602C83.9014 10.1346 83.5871 10.3022 83.4195 10.407L83.2309 10.6584C83.0843 10.826 82.8957 10.9518 82.6652 10.9937C82.4347 11.0356 82.2043 10.9937 81.9947 10.868C81.7852 10.7422 81.6804 10.5537 81.6385 10.3441C81.5966 10.1346 81.6385 9.92507 81.7642 9.75745L82.0157 9.46411C82.2462 9.12886 82.8119 8.81456 83.7129 8.47931C84.53 8.16502 85.1377 8.01835 85.5358 7.99739C85.892 7.95549 86.2482 7.93453 86.6044 7.95549C87.0025 7.95549 87.5054 8.01835 88.0711 8.12311C88.6787 8.22788 89.3492 8.45836 90.1035 8.83551C90.8578 9.19172 91.4236 9.52696 91.7798 9.84126C92.115 10.1556 92.4293 10.4908 92.7227 10.8889C93.016 11.287 93.3094 11.7899 93.6236 12.4185C93.9379 13.0471 94.1684 13.5709 94.3151 13.99C94.4618 14.409 94.6503 14.9957 94.8808 15.7919C95.1113 16.5253 95.2999 17.0491 95.4256 17.3634C95.5304 17.6986 95.6142 18.0339 95.719 18.3691C95.8237 18.7044 95.8866 18.9349 95.9285 19.0815C96.0542 19.2492 96.0123 19.4796 95.8237 19.773L95.4256 20.0663ZM93.917 19.2492C93.7703 19.0396 93.6446 18.8301 93.5189 18.6625C93.3513 18.432 93.1627 18.1806 92.9532 17.9082C92.7436 17.6567 92.3036 17.2377 91.6331 16.6929C90.9836 16.1691 90.5645 15.8757 90.334 15.8129C90.1664 15.771 89.8521 15.75 89.3702 15.771C88.8464 15.8129 88.4063 15.9176 88.0501 16.0643C87.6101 16.2319 87.2749 16.3996 87.0444 16.5462C86.8139 16.6929 86.5834 16.8396 86.3529 16.9862C86.1853 17.112 85.9548 17.3843 85.6615 17.7615C85.3682 18.1596 85.1796 18.432 85.0958 18.6206C85.0329 18.8091 84.9491 19.0815 84.8862 19.3958C84.8443 19.6892 84.8234 19.9197 84.8443 20.1082C84.8443 20.2968 84.9072 20.5902 85.0539 20.9883C85.2005 21.3654 85.3472 21.6378 85.5148 21.8054C85.7034 22.015 85.892 22.1826 86.0596 22.2874C86.2272 22.3921 86.4158 22.4969 86.6044 22.6016C86.793 22.7064 87.1282 22.8112 87.5682 22.9369C87.9454 23.0626 88.2806 23.1255 88.574 23.1255C88.9092 23.1045 89.1816 23.0626 89.3911 23.0207C89.6216 22.9578 89.8731 22.874 90.1454 22.7693C90.4178 22.6645 90.6693 22.5388 90.9417 22.4131C91.1721 22.2664 91.5702 21.9312 92.136 21.4073C92.7017 20.8625 93.0579 20.5063 93.1836 20.3597C93.3093 20.1711 93.4141 19.9825 93.4979 19.8359C93.5817 19.7311 93.7075 19.5216 93.917 19.2492Z" fill="#F40000"/>
              <path d="M62.0501 4.66578C61.2748 4.33053 60.6881 3.8067 60.1433 3.15716C59.9547 2.92667 58.9071 1.81617 59.1166 1.41806C59.2214 1.22948 59.7871 1.33425 59.9338 1.41806C60.1014 1.50187 60.269 1.66949 60.3948 1.81616C60.6043 2.0676 60.751 2.36094 60.8976 2.65428C61.191 3.26192 61.4215 3.91147 61.8196 4.45625C62.05 4.79149 62.5948 4.4772 62.3644 4.14195C61.7777 3.30383 61.5472 2.25617 60.8976 1.43901C60.4157 0.831368 59.4309 0.286594 58.7395 0.894232C58.0899 1.43901 58.6976 2.27713 59.0747 2.80095C59.7871 3.78574 60.5833 4.68673 61.7148 5.1896C62.1129 5.37818 62.4272 4.8334 62.0501 4.66578Z" fill="#F40000"/>
              <path d="M59.1353 1.9202C59.6591 2.86309 60.3296 3.74312 60.9791 4.60219C61.2306 4.91648 61.7753 4.60219 61.5239 4.28789C60.8534 3.42882 60.2039 2.5488 59.68 1.60591C59.4705 1.24971 58.9257 1.564 59.1353 1.9202Z" fill="#F40000"/>
              <path d="M61.8988 5.252C63.6169 5.16819 65.2932 4.60246 66.8856 3.95291C67.4094 3.74338 68.5199 3.38719 68.3942 2.63288C68.059 0.726151 62.9674 3.78529 62.255 4.05768C61.8778 4.20435 62.0454 4.81199 62.4226 4.66532C63.1979 4.37198 63.9103 3.99482 64.6436 3.63862C65.1046 3.40814 67.0113 2.29763 67.5561 2.7586C67.7656 2.92622 67.6189 2.92622 67.3675 3.05194C67.2208 3.13575 67.0532 3.19861 66.8856 3.28242C66.4875 3.45005 66.0684 3.59671 65.6703 3.76434C64.455 4.20435 63.2188 4.58151 61.8988 4.64437C61.5007 4.64437 61.4797 5.27296 61.8988 5.252Z" fill="#F40000"/>
              <path d="M66.9515 2.8422C65.6105 3.44983 64.2276 3.95271 62.8447 4.43463C62.4675 4.56035 62.6351 5.16798 63.0123 5.04226C64.4581 4.51844 65.8829 3.99461 67.2867 3.38698C67.6429 3.21935 67.3077 2.67457 66.9515 2.8422Z" fill="#F40000"/>
            </svg>
    
            <div className="bottom-bar-info-container">
              <Info />
            </div>
    
            <div className="bottom-bar-info-container">
              <h1>НАШ АДРЕС</h1>
              <ul>
                <li>г.Киев, ул. Нижний Вал, 37</li>
                <li>Пн — Вс: с 11:00 до 21:00</li>
              </ul>
            </div>
    
            <div className="bottom-bar-info-container">
              <h1>СОЦ.СЕТИ</h1>
              <SocialNetworksButtons />
            </div>
    
            <SendIvankaBlock />
          </div>
        </div>
      );
    }
  }
}

export default BottomBar;