import './WishList.css'
import BigTitle from '../../components/BigTitle.js';
import PageDirectory from '../../components/PageDirectory.js';
import TestDB from '../../test-data/products_db.json';
import ProductCard from '../../components/ProductCard.js';
import ShopInstagram from '../../components/ShopInstagram.js';
import BottomBar from '../../components/BottomBar.js';
import LocalDB from '../../test-data/LocalDB.ts';

const WishList = () => {
  const favouriteProductsList = LocalDB.getLSItems('favouriteProductsList');
  const favProducts = TestDB.products.filter(e => favouriteProductsList.has(e.id));
  
  return (
    <div className='wish-list-body'>
      <div className="wish-list-container">
        <PageDirectory pages={[{page: '/', title: "Главная"}]} currentPage="Wish list"/>
        <BigTitle title="СПИСОК ЖЕЛАНИЙ" description="ТВОЙ ТАЙНЫЙ СПИСОК ЖЕЛАНИЙ" titleFontSize="3.1vw" descrFontSize="1.5vw" rightWaveOffset="-8%"/>

        <div className="wish-list-products-container">
          {favProducts.map(value => <ProductCard img={value.image} descr={value.title} price={value.price} id={value.id} width="25%" height="80vh" nameFont="2cqh" priceFont="3cqh" margin="1em 1em 1em 1em"/>)}
        </div>
      </div>

      <ShopInstagram withHints={true}/>
      <BottomBar/>
    </div>
  );
}

export default WishList;