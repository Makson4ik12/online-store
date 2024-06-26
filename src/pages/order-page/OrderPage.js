import './OrderPage.css'
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import BottomBar from '../../components/BottomBar';
import PinkVectorButton from '../../components/PinkVectorButton';
import Shopcart from '../shopcart-page/Shopcart';
import BigTitle from '../../components/BigTitle';
import LocalDB from '../../test-data/LocalDB.ts';

const OrderPage = () => {
  const navigate = useNavigate();
  const [acceptedOrder, setAcceptOrder] = useState(false);

  const nameRef = useRef("name-input");
  const lastnameRef = useRef("lastname-input");
  const phoneRef = useRef("phone-input");
  const mailRef = useRef("mail-input");
  const commmentRef = useRef("comment-input");
  const discountcardRef = useRef("discount-input");

  const onAcceptOrder = (param) => {
    setAcceptOrder(param);

    if(param === false) {
      LocalDB.freeLSTable('shopcartList');
      navigate("/");
    }
  }

  const handleInputKey = (e) => {
    switch (e.target.name) {
      case "name":
        
        break;

      case "lastname":
        
        break;

      case "phone":
        
        break;

      case "mail":
        
        break;

      default:
        break;
    }
  }

  return (
    <div className='order-page-container'>
      <div className='order-page-content'>
        <div className='order-page-left'>

          <div className='order-page-inputs-block'>
            <Title number="1" text={"Контактные\nданные"} />
            
            <div className='order-page-inputs'>
              <input pattern="[A-Za-z]*" name="name" type="text" placeholder='Имя' ref={nameRef} onBlur={handleInputKey} required></input>
              <input pattern="\w+" name="lastname" type="text" placeholder='Фамилия' ref={lastnameRef} onBlur={handleInputKey} required></input>
              <input pattern="[1-9]{1}[0-9]{10}" name="phone" type="tel" placeholder='7 (...)' ref={phoneRef} onBlur={handleInputKey} required></input>
              <input pattern=".*@.*\..*" name="mail" type="email" placeholder='E-mail' ref={mailRef} onBlur={handleInputKey} required></input>
            </div>
          </div>

          <div className='order-page-inputs-block'>
            <Title number="2" text={"Способ\nдоставки"} />
            
            <div className='order-page-inputs'>
              <div className='order-page-radio-container'>
                <input type="radio" id="new-post-delivery" name="delievery" value="new-post" />
                <label for="new-post-delivery">Доставка в отделение Новой почты —<br></br><span style={{color: "var(--accent1)"}}>согласно тарифам НП</span></label>
              </div>

              <div className='order-page-radio-container'>
                <input type="radio" id="new-post-courier-delivery" name="delievery" value="new-post-courier" />
                <label for="new-post-courier-delivery">Курьерская доставка Новой почты —<br></br><span style={{color: "var(--accent1)"}}>согласно тарифам НП</span></label>
              </div>

              <div className='order-page-radio-container'>
                <input type="radio" id="international-delivery" name="delievery" value="international" />
                <label for="international-delivery">Международная доставка —<br></br><span style={{color: "var(--accent1)"}}>согласно тарифам Почта</span></label>
              </div>

              <div className='order-page-radio-container'>
                <input type="radio" id="pickup" name="delievery" value="pickup"/>
                <label for="pickup">Самовывоз с нашего шоурума —<br></br><span style={{color: "var(--accent1)"}}>бесплатно</span></label>
              </div>

              <p>г.Киев,  ул. Нижний вал, 37<br></br>Ежедневно с 11:00 до 21:00</p>

              <textarea placeholder='Комментарий к заказу' cols="5" rows="5" wrap='hard' maxlength="300" ref={commmentRef} onBlur={handleInputKey}></textarea>
            </div>
          </div>

          <div className='order-page-inputs-block'>
            <Title number="3" text={"Способ\nоплаты"} />
            
            <div className='order-page-inputs'>
              <div className='order-page-radio-container'>
                <input type="radio" id="card-payment" name="payment" value="card" />
                <label for="card-payment">Картой Visa / MasterCard</label>
              </div>

              <div className='order-page-radio-container'>
                <input type="radio" id="cash-payment" name="payment" value="cash" />
                <label for="cash-payment">Наличкой при получении</label>
              </div>

              <input pattern="[0-9]{10}" type="text" placeholder='Номер карты boorivasis' ref={discountcardRef} onBlur={handleInputKey}></input>

              <div className='order-page-radio-container' style={{marginTop: "30px"}}>
                <input type="radio" id="accept" name="accept" value="accept" />
                <label for="accept">Я уверена в заказе, со мной можно<br></br>не связываться</label>
              </div>
            </div>
          </div> 
          <PinkVectorButton text="Подтвердить заказ" componentId="order-button" click={() => onAcceptOrder(true)}/>          
        </div>
        <Shopcart isComponent={true}/>
      </div>
      <BottomBar/>
      <Modal open={acceptedOrder} onClose={() => onAcceptOrder(false)} center>
        <AcceptedOrder />
      </Modal>
    </div>
  );
}

const Title = (props) => {
  return (
    <div className='order-page-title'>
      <h1>{props.number}</h1>
      <p>{props.text}</p>

      <svg width="77" height="18" viewBox="0 0 77 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.0139389 15.0284C0.550667 10.8668 1.28867 6.36958 4.37485 3.2148C6.99139 0.529886 10.9498 -0.879712 14.5727 0.596992C18.6652 2.27506 20.3425 6.4367 22.4894 9.92709C23.7641 12.0079 26.1794 14.9613 29.0643 14.3572C31.0099 13.8873 31.815 11.8736 32.4188 10.1956C33.4923 7.44352 34.1632 4.35587 36.4443 2.27506C38.9937 -0.00711393 42.6167 0.261394 45.3003 2.20796C48.9232 4.75863 49.9295 9.12159 52.9486 12.2092C55.0955 14.3572 57.7121 14.1558 59.7919 11.9408C61.4692 10.0613 61.9388 7.57778 63.2136 5.42985C65.2934 1.93946 69.453 1.13398 72.9418 3.28191C77.0343 5.8997 77.5039 11.1353 76.6318 15.4311C76.2963 17.1763 73.4114 16.7736 73.4785 15.0284C73.4785 13.0147 73.6797 10.8668 73.0088 8.92025C72.1366 6.4367 69.0505 4.42298 66.9036 6.70516C65.6959 7.98049 65.3605 9.99419 64.5554 11.538C63.7503 13.149 62.5426 14.6257 61.1337 15.7667C55.0285 20.3982 49.8625 14.6928 46.9105 9.65858C45.3003 6.90654 41.1407 1.60382 38.2558 6.03393C36.7127 8.31611 36.3772 11.2695 35.1025 13.686C31.9492 19.7941 25.173 18.9216 21.0805 14.1558C18.4639 11.1353 17.1892 5.36272 13.0296 3.95314C6.58883 1.87233 4.44193 10.7325 3.9052 15.0284C3.43557 17.3106 -0.254425 17.3777 0.0139389 15.0284Z" fill="#FDA3C4"/>
      </svg>
    </div>
  );
}

const AcceptedOrder = () => {
  return (
    <div className='accepted-order-container'>
      <BigTitle title="СПАСИБО" description="Ваш заказ был принят" titleFontSize="8vh" descrFontSize="3.5vh" rightWaveOffset="-10vh" />

      <order-num>НОМЕР ЗАКАЗА <b>555</b></order-num>
      <text>Мы обожаем встречать booriva на улице.  Так как всех не встретишь, отмечай нас в соц.сетях  и мы внутри взорвемся и закричим УРА! Ставь тэг <span style={{color: "var(--accent2)"}}>#boorivagirls</span> чтобы быть в нашей тусовке.</text>
    </div>
  );
}

export default OrderPage;