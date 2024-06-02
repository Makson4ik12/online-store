import { useNavigate } from 'react-router-dom';
import PinkVectorButton from '../../components/PinkVectorButton';
import RunningLine from '../../components/RunningLine';
import './ErrorPage.css'

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="errorpage-container">
      <svg width="588" height="183" viewBox="0 0 588 183" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48.3547 124.477C55.454 146.285 49.7351 162.009 45.9883 167.145C69.1798 178.998 88.7812 172.084 95.6829 167.145C100.416 128.626 83.2591 103.736 63.1444 88.9204C43.0297 74.1051 2.20916 72.3273 1.02594 84.1795C-0.157275 96.0317 39.4806 97.2169 48.3547 124.477Z" fill="white"/>
        <path d="M269.025 49.2144C189.039 43.9994 167.465 128.427 166.676 171.292C175.55 175.439 226.429 192.034 225.837 173.663C225.245 155.292 230.57 109.069 269.025 109.069C299.788 109.069 313.001 150.551 315.762 171.292C346.999 186.462 364.668 174.848 369.598 167.145C369.401 130.008 349.01 54.4293 269.025 49.2144Z" fill="white"/>
        <path d="M505.668 32.0293C482.004 41.037 454.79 125.86 444.141 167.145C456.446 187.057 492.259 178.206 508.626 171.292C509.021 167.539 512.768 154.345 524.6 131.588C539.39 103.143 557.138 119.143 576.07 109.069C595.001 98.9938 585.536 49.2144 576.07 42.1037C566.604 34.993 535.249 20.7697 505.668 32.0293Z" fill="white"/>
        <path d="M48.3547 124.477C55.454 146.285 49.7351 162.009 45.9883 167.145C69.1798 178.998 88.7812 172.084 95.6829 167.145C100.416 128.626 83.2591 103.736 63.1444 88.9204C43.0297 74.1051 2.20916 72.3273 1.02594 84.1795C-0.157275 96.0317 39.4806 97.2169 48.3547 124.477Z" stroke="black"/>
        <path d="M269.025 49.2144C189.039 43.9994 167.465 128.427 166.676 171.292C175.55 175.439 226.429 192.034 225.837 173.663C225.245 155.292 230.57 109.069 269.025 109.069C299.788 109.069 313.001 150.551 315.762 171.292C346.999 186.462 364.668 174.848 369.598 167.145C369.401 130.008 349.01 54.4293 269.025 49.2144Z" stroke="black"/>
        <path d="M505.668 32.0293C482.004 41.037 454.79 125.86 444.141 167.145C456.446 187.057 492.259 178.206 508.626 171.292C509.021 167.539 512.768 154.345 524.6 131.588C539.39 103.143 557.138 119.143 576.07 109.069C595.001 98.9938 585.536 49.2144 576.07 42.1037C566.604 34.993 535.249 20.7697 505.668 32.0293Z" stroke="black"/>
        <path d="M43.5688 57.7461C39.3028 56.3288 29.1512 71.7228 24.6086 79.597C26.3862 82.5491 35.8663 82.5506 48.3089 86.094C60.7515 89.6374 72.0091 102.039 73.7867 102.039C75.5642 102.039 81.4892 62.4714 75.5642 60.6997C69.6391 58.928 66.6766 64.8336 58.3815 73.1016C50.0864 81.3695 50.0864 78.4166 48.3089 77.2355C46.5314 76.0544 48.9014 59.5178 43.5688 57.7461Z" fill="#FDA3C4"/>
        <path d="M209.471 45.345C204.257 46.2899 206.113 66.6053 207.693 76.6449C213.026 74.2819 242.058 57.7477 271.091 55.9752C294.317 54.5572 316.714 67.9836 325.009 74.8741C324.812 62.4722 323.232 37.0779 318.492 34.7157C312.567 31.7628 300.717 49.4798 295.384 47.7081C290.051 45.9364 287.681 16.9987 280.571 16.9987C273.461 16.9987 268.721 43.5724 261.019 45.345C253.316 47.1176 247.391 25.8554 242.058 26.446C236.726 27.0366 232.578 55.3846 227.246 55.9752C221.913 56.5657 215.988 44.1639 209.471 45.345Z" fill="#FDA3C4"/>
        <path d="M495.651 19.9515C492.807 20.424 492.491 39.0465 492.689 48.2987C499.404 44.7552 517.218 37.1957 534.756 35.3059C556.679 32.9437 570.307 44.1644 571.492 44.755C572.677 45.3455 570.899 3.41463 562.604 1.05237C554.309 -1.30989 550.162 18.7704 541.274 19.9515C532.386 21.1327 527.646 4.00629 522.906 4.59686C518.166 5.18742 516.981 25.8572 511.649 27.0383C506.316 28.2194 499.206 19.361 495.651 19.9515Z" fill="#FDA3C4"/>
        <path d="M43.5688 57.7461C39.3028 56.3288 29.1512 71.7228 24.6086 79.597C26.3862 82.5491 35.8663 82.5506 48.3089 86.094C60.7515 89.6374 72.0091 102.039 73.7867 102.039C75.5642 102.039 81.4892 62.4714 75.5642 60.6997C69.6391 58.928 66.6766 64.8336 58.3815 73.1016C50.0864 81.3695 50.0864 78.4166 48.3089 77.2355C46.5314 76.0544 48.9014 59.5178 43.5688 57.7461Z" stroke="black"/>
        <path d="M209.471 45.345C204.257 46.2899 206.113 66.6053 207.693 76.6449C213.026 74.2819 242.058 57.7477 271.091 55.9752C294.317 54.5572 316.714 67.9836 325.009 74.8741C324.812 62.4722 323.232 37.0779 318.492 34.7157C312.567 31.7628 300.717 49.4798 295.384 47.7081C290.051 45.9364 287.681 16.9987 280.571 16.9987C273.461 16.9987 268.721 43.5724 261.019 45.345C253.316 47.1176 247.391 25.8554 242.058 26.446C236.726 27.0366 232.578 55.3846 227.246 55.9752C221.913 56.5657 215.988 44.1639 209.471 45.345Z" stroke="black"/>
        <path d="M495.651 19.9515C492.807 20.424 492.491 39.0465 492.689 48.2987C499.404 44.7552 517.218 37.1957 534.756 35.3059C556.679 32.9437 570.307 44.1644 571.492 44.755C572.677 45.3455 570.899 3.41463 562.604 1.05237C554.309 -1.30989 550.162 18.7704 541.274 19.9515C532.386 21.1327 527.646 4.00629 522.906 4.59686C518.166 5.18742 516.981 25.8572 511.649 27.0383C506.316 28.2194 499.206 19.361 495.651 19.9515Z" stroke="black"/>
        <circle cx="43.1582" cy="96.9815" r="3.71583" fill="#F40000" stroke="black"/>
        <path d="M250.077 72.9487C250.077 76.1982 247.626 78.7725 244.675 78.7725C241.723 78.7725 239.273 76.1982 239.273 72.9487C239.273 69.6993 241.723 67.125 244.675 67.125C247.626 67.125 250.077 69.6993 250.077 72.9487Z" fill="#F40000" stroke="black"/>
        <circle cx="322.668" cy="98.2435" r="3.29424" fill="#F40000" stroke="black"/>
        <circle cx="475.281" cy="126.911" r="3.29424" fill="#F40000" stroke="black"/>
        <circle cx="562.97" cy="66.2032" r="4.98058" fill="#1F1F1F" stroke="black"/>
        <circle cx="59.6001" cy="108.363" r="5.82374" fill="#F40000" stroke="black"/>
        <path d="M228.155 95.2944C228.155 100.12 224.059 104.069 218.958 104.069C213.858 104.069 209.762 100.12 209.762 95.2944C209.762 90.4689 213.858 86.5195 218.958 86.5195C224.059 86.5195 228.155 90.4689 228.155 95.2944Z" fill="#F40000" stroke="black"/>
        <path d="M293.078 67.8917C293.078 72.9919 289.129 77.0881 284.304 77.0881C279.478 77.0881 275.529 72.9919 275.529 67.8917C275.529 62.7915 279.478 58.6953 284.304 58.6953C289.129 58.6953 293.078 62.7915 293.078 67.8917Z" fill="#F40000" stroke="black"/>
        <path d="M492.909 108.364C492.909 113.465 488.959 117.561 484.134 117.561C479.308 117.561 475.359 113.465 475.359 108.364C475.359 103.264 479.308 99.168 484.134 99.168C488.959 99.168 492.909 103.264 492.909 108.364Z" fill="#F40000" stroke="black"/>
        <path d="M557.193 59.0785C547.513 58.5706 545.496 63.0992 545.698 65.4271C546.715 77.1671 570.98 72.5297 569.293 66.6971C568.412 63.6477 569.294 59.7133 557.193 59.0785Z" stroke="black"/>
        <path d="M552.43 84.332C553.041 88.6336 557.437 97.0021 570.137 96.0636" stroke="black" stroke-linecap="round"/>
        <path d="M580.22 82.7962C577.847 82.0731 572.628 79.9768 573.103 81.7122C573.696 83.8815 580.812 87.6771 580.22 82.7962Z" fill="#1F1F1F"/>
        <path d="M580.22 82.7962C577.847 82.0731 572.628 79.9768 573.103 81.7122C573.696 83.8815 580.812 87.6771 580.22 82.7962ZM580.22 82.7962C579.745 78.8914 573.3 78.2768 570.137 78.4576" stroke="black" stroke-linejoin="round"/>
      </svg>

      <RunningLine text="ПОХОЖЕ, ЧТО-ТО ПОШЛО НЕ ТАК..." />
      <text>Страница не найдена, но у нас есть<br></br>еще много всего интересного</text>
      <PinkVectorButton text="НА ГЛАВНУЮ" width='600' height="60px" textSize="2vh" click={() => navigate("/")} />
    </div>
  );
}

export default ErrorPage;