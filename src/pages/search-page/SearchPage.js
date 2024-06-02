import './SearchPage.css'
import { useLocation } from 'react-router-dom';
import BigTitle from '../../components/BigTitle';
import LocalDB from '../../test-data/LocalDB.ts';
import ProductCard from '../../components/ProductCard.js';

const SearchPage = () => {
  const location = useLocation();
  const find_products = LocalDB.find(location.state.searchText || "");

  return (
    <div className="search-page-container">
      <BigTitle title="РЕЗУЛЬТАТЫ" description={"НАЙДЕНО " + find_products.length + " ТОВАРА"} rightWaveOffset="1%" titleFontSize="45px" descrFontSize="20px"/>

      <div className="search-page-cards-container">
        {find_products.map((value) => <ProductCard img={value.image} descr={value.title} price={value.price} id={value.id} width="25%" height="70vh" nameFont="2cqh" priceFont="3cqh" margin="1em 1em 1em 1em"/>)}
      </div>
    </div>
  );
}

export default SearchPage;