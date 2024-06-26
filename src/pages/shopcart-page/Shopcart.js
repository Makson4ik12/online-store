import './Shopcart.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PinkVectorButton from '../../components/PinkVectorButton';
import LocalDB from '../../test-data/LocalDB.ts';

const Shopcart = ({isComponent = false, closeHandler = () => {}}) => {
  const navigate = useNavigate();

  const getShopcartItems = () => {
    let products = LocalDB.getLSItems("shopcartList", true);
    const db_items = LocalDB.getDBItems();

    products.forEach((item) => {
      const product = db_items.filter((db_item) => item.id === db_item.id)[0];
      item.title = product.title;
      item.price = product.price;
      item.img = product.image;
    });
    
    return products;
  }

  const removeItem = (item) => {
    LocalDB.deleteItem("shopcartList", {id: item.id, size: item.size}, true);
    setShopcartItems(getShopcartItems());
  }

  const [shopcartItems, setShopcartItems] = useState(getShopcartItems());

  if(shopcartItems.length > 0) {
    return (
      <div className='shopcart-container'>
        <h1>{isComponent === true ? "Товары в Корзине:" : "КОРЗИНА"}</h1>

        <div className='shopcart-items-container' style={{height: window.innerHeight * 3/5}}>
          { shopcartItems.map((item) => <Shopcartitem product={item} removeHandler={removeItem}/>) }
        </div>
        
        {isComponent === true ? ( 
          <div className='shopcart-text-component'>
            <div className='shopcart-text-component-text'>
              <h2>Сумма заказа: </h2>
              <h2><b>{shopcartItems.reduce((total, item) => total += Number(item.price.replace(/ /g,'').slice(0, -1)), 0)} ₴</b></h2>
            </div>
            
            <div className='shopcart-text-component-text'>
              <h2>Стоимость доставки: </h2>
              <h2><b>бесплатно</b></h2>
            </div>

            <p>К оплате: . . . . . . <b>{shopcartItems.reduce((total, item) => total += Number(item.price.replace(/ /g,'').slice(0, -1)), 0)} ₴</b></p>
          </div>
        ) : (
          <>
            <p>Сумма заказа: . . . . . . <b>{shopcartItems.reduce((total, item) => total += Number(item.price.replace(/ /g,'').slice(0, -1)), 0)} ₴</b></p>
            <PinkVectorButton text="Оформить заказ" componentId="shopcart-button" click={() => {closeHandler(); navigate("/order");}} />
          </>
        )}
      </div>
    );
  } else {
    return (
      <div className='shopcart-empty-container' style={{height: window.innerHeight}}>
        <h1>КОРЗИНА</h1>

        <svg width="251" height="148" viewBox="0 0 251 148" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M111.537 84.7276C127.041 68.0773 156.382 52.0139 169.115 46.0635L62.5379 27.372L3.75362 58.5211L111.537 84.7276Z" fill="#FDA3C4" stroke="black"/>
          <path d="M154.009 72.5464L167.25 46.9297C142.213 54.2961 119.592 75.4323 111.411 85.0796L104.07 112.637L117.339 115.821L174.109 79.8542L154.009 72.5464Z" fill="#1F1F1F" stroke="black"/>
          <path d="M99.1685 115.131C99.9212 111.745 103.898 110.109 108.863 109.476L113.623 84.5175C124.947 71.0748 155.024 53.1046 163.516 48.4351C173.463 42.9658 206.509 32.6994 219.418 62.0678C228.874 61.3603 249.649 52.7455 244.031 31.997C239.908 16.772 226.679 12.3516 215.94 10.5963C213.41 10.5963 212.348 6.39056 215.94 4.75824C221.779 2.10506 242.603 11.8205 247.787 27.5755C252.11 40.7143 253.095 57.8231 221.779 68.4356C230.696 97.3021 203.026 120.968 190.463 120.968H145.877C145.54 116.578 150.296 110.322 154.036 107.323L149.085 110.355C145.115 114.071 138.879 118.765 135.793 120.968H117.481L108.407 114.982L107.785 115.131L107.879 114.635L105.662 113.172C104.954 114.41 97.47 122.772 99.1685 115.131Z" fill="white"/>
          <path d="M127.831 110.355C118.984 108.763 100.867 107.489 99.1685 115.131C97.47 122.772 104.954 114.41 105.662 113.172L117.481 120.968H135.793C138.879 118.765 145.115 114.071 149.085 110.355M127.831 110.355L143.224 87.0076M127.831 110.355L107.785 115.131L113.623 84.5175C124.947 71.0748 155.024 53.1046 163.516 48.4351C173.463 42.9658 206.509 32.6994 219.418 62.0678M151.185 108.233C154.582 104.413 157.908 100.627 159.147 99.2124L151.185 108.233ZM151.185 108.233C150.61 108.88 149.998 109.796 149.085 110.355M149.085 110.355C149.085 110.355 153.675 107.544 156.616 105.743M156.616 105.743C153.078 106.981 145.453 115.45 145.877 120.968H190.463C203.026 120.968 230.696 97.3021 221.779 68.4356M156.616 105.743C159.147 102.559 183.563 110.355 183.563 110.355M221.779 68.4356C221.077 66.1622 220.286 64.0426 219.418 62.0678M221.779 68.4356C253.095 57.8231 252.11 40.7143 247.787 27.5755C242.603 11.8205 221.779 2.10506 215.94 4.75824C212.348 6.39056 213.41 10.5963 215.94 10.5963C226.679 12.3516 239.908 16.772 244.031 31.997C249.649 52.7455 228.874 61.3603 219.418 62.0678M166.578 68.4356C164.985 77.4564 163.516 95.1302 182.625 104.682" stroke="black"/>
          <path d="M111.539 84.7236L128.417 93.9236L9.56424 81.6731L2.91218 59.0761L111.539 84.7236Z" fill="#F40000" stroke="black"/>
          <path d="M116.808 122.191L128.415 93.9263L9.30598 80.8066L16.4697 105.142L116.808 122.191Z" fill="#FDA3C4" stroke="black"/>
          <path d="M135.917 52.6766C121.409 48.7853 104.601 42.0654 97.7006 52.6766C92.912 60.0407 110.793 65.7659 114.686 66.4736" stroke="#1F1F1F"/>
          <path d="M103.286 113.701C107.002 105.742 115.216 105.212 124.239 108.925L135.386 99.374L139.632 92.4758L144.409 85.0469L156.771 100.802L157.679 100.435L149.717 109.987C145.746 113.703 136.503 120.354 133.416 122.558H104.878C103.286 122.558 101.355 117.838 103.286 113.701Z" fill="white" stroke="black"/>
          <path d="M147.063 81.8633L162.455 94.5985L157.147 104.15L155.024 102.558L142.286 89.2922L147.063 81.8633Z" fill="white"/>
          <ellipse cx="1.59213" cy="2.12284" rx="1.59213" ry="2.12284" transform="matrix(0.901584 0.432604 -0.432795 0.901492 114.168 64.4043)" fill="#1F1F1F"/>
          <ellipse cx="1.59213" cy="2.12284" rx="1.59213" ry="2.12284" transform="matrix(0.901584 0.432604 -0.432795 0.901492 135.099 50.0244)" fill="#1F1F1F"/>
        </svg>

        <p>Твоя корзина пуста, но это никогда<br></br>не поздно исправить:)</p>
        
        <PinkVectorButton text="ЗА ПОКУПКАМИ" componentId="shopcart-button" click={closeHandler}/>
      </div>
    );
  }
}

const Shopcartitem = (props) => {
  return (
    <div className='shopcart-item'>
      <img src={props.product.img} />

      <div className='shopcart-item-right'>
        <h1>{props.product.title}</h1>
        <p>{props.product.size}</p>
        <h2>{props.product.price}</h2>
      </div>

      <div className='shopcart-delete-button'>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => props.removeHandler(props.product)}>
          <circle cx="6" cy="6" r="6" fill="#FDA3C4"/>
          <path d="M8.65723 3.02344L3.23238 8.2394" stroke="white" stroke-width="0.608696" stroke-linecap="round"/>
          <path d="M3.33594 2.92188L8.5519 8.34672" stroke="white" stroke-width="0.608696" stroke-linecap="round"/>
        </svg>
      </div>
    </div>
  );
}

export default Shopcart;