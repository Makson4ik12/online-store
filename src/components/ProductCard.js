import './ProductCard.css'
import { React, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import LocalDB from '../test-data/LocalDB'

const ProductCard = (props) => {
  const [likeButton, setLikeButton] = useState(null);
  const favouriteProductsList = LocalDB.getLSItems('favouriteProductsList')
  const navigate = useNavigate();

  const likedButton = 
    <svg 
      onClick={e => { 
        e.stopPropagation();
        setLikeButton(unlikedButton); 
        LocalDB.deleteItem('favouriteProductsList', props.id); 
      }} 
      width="26" 
      height="24" 
      viewBox="0 0 26 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.99987 1.49952C10.1999 -0.900484 12.3332 4.83285 12.4999 7.99952C18.9997 2.49952 19 3.49951 23 4.99951C26.2 6.19951 25.6667 8.83285 25 9.99951C23.8333 11.6662 21 15.1995 19 15.9995C17 16.7995 12.4999 21.3328 10.4999 23.4995C4.99987 17.1662 -4.20013 3.89952 2.99987 1.49952Z" fill="#F40000"/>
      <path d="M22.5425 14.4295C18.6621 17.6197 14.3075 19.8736 11.2464 23.6879C11.0308 23.9307 10.6859 23.9653 10.341 23.8613C10.1254 24.0347 9.73737 24.0693 9.43557 23.8266C5.90015 20.6018 3.7875 16.8568 2.27848 12.8691C1.07126 9.67893 -1.42939 4.7203 1.07127 1.70351C2.70963 -0.307677 6.02947 -0.4117 8.65948 0.732599C11.5913 2.0156 12.7123 4.37354 13.2728 6.76616C14.4369 5.03237 16.1615 3.54134 18.8777 3.22925C22.0251 2.8825 24.7844 4.5816 25.6899 6.90487C26.7677 9.74828 24.8707 12.4877 22.5425 14.4295ZM23.6635 6.69683C22.3269 4.54693 19.0502 4.09614 16.8082 5.41382C15.0405 6.41942 14.2644 8.04917 13.5746 9.60957C13.3159 10.2337 11.9793 10.0604 11.8931 9.40153C11.5051 6.62747 11.0308 2.91717 7.15046 1.66885C5.72766 1.04468 4.6498 1.35677 3.7875 2.53574C2.01979 3.05588 1.37308 3.99212 1.89046 5.41382C1.97669 6.66215 2.40784 7.91048 2.75276 9.12413C4.17555 13.9787 6.24505 18.6253 9.90982 22.7863C12.6261 19.1801 16.4202 16.9955 20.2574 14.1868C22.7581 12.3836 25.4312 9.54023 23.6635 6.69683Z" fill="#1F1F1F"/>
    </svg>;

  const unlikedButton = 
    <svg 
      onClick={e => { 
        e.stopPropagation();
        setLikeButton(likedButton); 
        LocalDB.addItem('favouriteProductsList', props.id);
      }}
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.5425 14.4295C18.6622 17.6197 14.3076 19.8736 11.2464 23.6879C11.0308 23.9307 10.6859 23.9653 10.341 23.8613C10.1254 24.0347 9.7374 24.0693 9.4356 23.8266C5.90018 20.6018 3.78753 16.8568 2.27851 12.8691C1.07129 9.67893 -1.42936 4.7203 1.0713 1.70351C2.70967 -0.307677 6.0295 -0.4117 8.65951 0.732599C11.5913 2.0156 12.7123 4.37354 13.2728 6.76616C14.4369 5.03237 16.1615 3.54134 18.8777 3.22925C22.0251 2.8825 24.7845 4.5816 25.6899 6.90487C26.7678 9.74828 24.8707 12.4877 22.5425 14.4295ZM23.6635 6.69683C22.3269 4.54693 19.0502 4.09614 16.8082 5.41382C15.0405 6.41942 14.2645 8.04917 13.5746 9.60957C13.3159 10.2337 11.9794 10.0604 11.8931 9.40153C11.5051 6.62747 11.0308 2.91717 7.15049 1.66885C5.7277 1.04468 4.64983 1.35677 3.78753 2.53574C2.01982 3.05588 1.37311 3.99212 1.89049 5.41382C1.97672 6.66215 2.40787 7.91048 2.75279 9.12413C4.17558 13.9787 6.24508 18.6253 9.90985 22.7863C12.6261 19.1801 16.4202 16.9955 20.2574 14.1868C22.7581 12.3836 25.4312 9.54023 23.6635 6.69683Z" fill="#1F1F1F"/>
    </svg>;

  useEffect(() => {
    favouriteProductsList.has(props.id) ? setLikeButton(likedButton) : setLikeButton(unlikedButton);
  }, []);

  return (
    <div 
      className="product-card-container" 
      style={{width: props.width, height: props.height, margin: props.margin || 0}}
      onClick={() => navigate("/product-page", {state: {productId: props.id}})}
    >
      <div className="product-card-top-container">
        <img src={props.img}/>
        {likeButton}
      </div>
      <div className="product-card-bottom-container">
        <h3 style={{fontSize: props.nameFont}}>{props.descr}</h3>
        <h2 style={{fontSize: props.priceFont}}>{props.price}</h2>
      </div>
    </div>
  )
}

export default ProductCard;