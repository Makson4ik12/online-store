import './MainPage.css'
import TopCategories from '../../components/TopCategories';
import BigTitle from '../../components/BigTitle';
import PinkVectorButton from '../../components/PinkVectorButton';
import ShopMap from '../../components/ShopMap';
import RunningLine from '../../components/RunningLine';
import Suits from '../../components/Suits';
import ShopInstagram from '../../components/ShopInstagram';
import BottomBar from '../../components/BottomBar';
import TestDB from '../../test-data/products_db.json';
import ProductCard from '../../components/ProductCard';
import HandleResponsiveView, { screenSizes } from '../../features/ResponsiveView.ts';

const NewProducts = () => {
  const screenSize = HandleResponsiveView();
  const products = TestDB.products.slice(0, ((screenSize.width === screenSizes.bigMobile.width) ? 3 : 4));
  
  return (
    <div className="new-products-container">
      {products.map((value) => <ProductCard componentId="product-card" key={value.id} img={value.image} descr={value.title} price={value.price} id={value.id}/>)}
    </div>
  );
}

const TopProducts = () => {
  return (
    <div className="top-products-container">
      <div className="top-products-left-container">
        <ProductCard 
          img={TestDB.products[1].image} 
          descr={TestDB.products[1].title} 
          price={TestDB.products[1].price} 
          id={TestDB.products[1].id} 
          width="100%" 
          height="50%" 
          nameFont="1.6cqh" 
          priceFont="2.5cqh"
        />
        <ProductCard 
          img={TestDB.products[2].image} 
          descr={TestDB.products[2].title} 
          price={TestDB.products[2].price} 
          id={TestDB.products[2].id} 
          width="100%" 
          height="50%" 
          nameFont="1.6cqh" 
          priceFont="2.2cqh"
        />
      </div>

      <img className="top-products-image" src="https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/76381a35c1620dabeeb9926aca34b0c0bfd90649" />

      <ProductCard 
        img={TestDB.products[3].image}
          descr={TestDB.products[3].title} 
          price={TestDB.products[3].price} 
          id={TestDB.products[3].id} 
          width="35%" 
          height="100%" 
          nameFont="1.6cqh" 
          priceFont="2.2cqh"
        />
    </div>
  );
}

const MainPage = () => {
  return (
    <div className="main-page-contaner">
      <TopCategories />
      <BigTitle title="НОВИНКИ" titleFontSize="5vw" descrFontSize="3vw" rightWaveOffset="1vw"/>
      <NewProducts/>
      <PinkVectorButton text="СМОТРЕТЬ ВСЕ" width='20vw' textSize="1vw"/>
      <img className="new-collection-image" src="https://www.figma.com/file/5kApz6MuwIO15ml8UVs5In/image/0301b260724e748a9a77dd641f1d98faad302fae" />
      <ShopMap />
      <RunningLine text="ТОПОВЫЕ ТОВАРЫ" />
      <TopProducts />
      <PinkVectorButton text="СМОТРЕТЬ ВСЕ" width='600' height="60px"/>
      <BigTitle title="КОСТЮМЫ" />
      <Suits />
      <PinkVectorButton text="СМОТРЕТЬ ВСЕ" width='600' height="60px"/>
      <ShopInstagram withHints={true}/>
      <BottomBar/>
    </div>
  );
}

export default MainPage;