import './App.css';
import 'react-responsive-modal/styles.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import ScrollToTop from './features/ScrollToTop'
import MainPage from './pages/main-page/MainPage';
import Header from './header/Header';
import Boorivagirls from './pages/boorivagirls-page/Boorivagirls';
import ContactsPage from './pages/contacts-page/ContactsPage';
import LoyaltyPage from './pages/loyalty-page/LoyaltyPage';
import ExchangePage from './pages/exchange-page/ExchangePage';
import DeliveryPage from './pages/delivery-page/DeliveryPage';
import ErrorPage from './pages/error-page/ErrorPage';
import WishList from './pages/wishlist-page/WishList';
import ShopCart from './pages/shopcart-page/Shopcart';
import OrderPage from './pages/order-page/OrderPage';
import ProductPage from './pages/product-page/ProductPage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/boorivagirls" element={<Boorivagirls />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/loyalty" element={<LoyaltyPage />} />
        <Route path="/exchange" element={<ExchangePage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/error-page" element={<ErrorPage />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/shopcart" element={<ShopCart />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/product-page" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
