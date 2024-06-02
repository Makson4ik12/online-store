import './PageDirectory.css'
import {Link} from 'react-router-dom';

const PageDirectory = ({
  pages = {}, 
  currentPage = "Current page"
}) => {
  
  return(
    <div className="page-directory-container">
      {pages.map((item) => {
        return(
          <>
            <Link to={item.page}>{item.title}</Link>
            <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.01144 9.7476C4.76772 8.00846 6.38624 6.1302 7.86702 4.1128C8.21139 3.66063 7.83258 2.93016 7.35047 2.82581C5.0432 2.26929 2.90812 1.2258 0.807481 0.0779659C0.18762 -0.269862 -0.328923 0.634507 0.256502 1.0519C1.97834 2.2693 3.83793 3.17365 5.76638 4.00844C4.52666 5.57366 3.18361 7.06934 1.77171 8.46065C0.945224 9.26065 2.18496 10.5476 3.01144 9.7476Z" fill="#1F1F1F"/>
            </svg>
          </>
        )
      })}

      <h1>{currentPage}</h1>
    </div>
  );
}

export default PageDirectory;