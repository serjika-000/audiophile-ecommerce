import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Headphones from "../pages/Headphones";
import Speakers from "../pages/Speakers";
import Earphones from "../pages/Earphones";
import HeadphoneFirstProduct from "../components/Headphones/HeadphoneFirstProduct";
import HeadphonesSecondProduct from "../components/Headphones/HeadphonesSecondProduct";
import HeadphonesLastProduct from "../components/Headphones/HeadphonesLastProduct";
import SpeakersFirstProduct from "../components/Speakers/SpeakersFirstProduct";
import SpeakersSecondProduct from "../components/Speakers/SpeakersSecondProduct";
import EarphoneWireless from "../components/Earphones/EarphoneWireless";
import Checkout from "../components/Checkout/Checkout";

const AppRoutes = ({
  activeMenuRoute,
  setActiveMenuRoute,
  productAmount,
  setProductAmount,
  XX99MarkIIAmout,
  setXX99MarkIIAmout,
  XX99MarkIAmout,
  setXX99MarkIAmout,
  XX59MarkIAmout,
  setXX59MarkIAmout,
  ZX9Amount,
  setZX9Amount,
  ZX7Amount,
  setZX7Amount,
  YX1Amount,
  setYX1Amount,
  addToCart,
  setAddToCart,
  popup,
  setPopup,
  totalCost,
}: any) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            activeMenuRoute={activeMenuRoute}
            setActiveMenuRoute={setActiveMenuRoute}
          />
        }
      />
      <Route path="/headphones" element={<Headphones />} />
      <Route
        path="/headphones/product1"
        element={
          <HeadphoneFirstProduct
            setActiveMenuRoute={setActiveMenuRoute}
            productAmount={productAmount}
            setProductAmount={setProductAmount}
            setAddToCart={setAddToCart}
            XX99MarkIIAmout={XX99MarkIIAmout}
            setXX99MarkIIAmout={setXX99MarkIIAmout}
          />
        }
      />
      <Route
        path="/headphones/product2"
        element={
          <HeadphonesSecondProduct
            setActiveMenuRoute={setActiveMenuRoute}
            productAmount={productAmount}
            setProductAmount={setProductAmount}
            setAddToCart={setAddToCart}
            XX99MarkIAmout={XX99MarkIAmout}
            setXX99MarkIAmout={setXX99MarkIAmout}
          />
        }
      />
      <Route
        path="/headphones/product3"
        element={
          <HeadphonesLastProduct
            setActiveMenuRoute={setActiveMenuRoute}
            productAmount={productAmount}
            setAddToCart={setAddToCart}
            XX59MarkIAmout={XX59MarkIAmout}
            setXX59MarkIAmout={setXX59MarkIAmout}
          />
        }
      />
      <Route path="/speakers" element={<Speakers />} />
      <Route
        path="/speakers/product1"
        element={
          <SpeakersFirstProduct
            setActiveMenuRoute={setActiveMenuRoute}
            productAmount={productAmount}
            ZX9Amount={ZX9Amount}
            setZX9Amount={setZX9Amount}
            setAddToCart={setAddToCart}
          />
        }
      />
      <Route
        path="/speakers/product2"
        element={
          <SpeakersSecondProduct
            setActiveMenuRoute={setActiveMenuRoute}
            productAmount={productAmount}
            ZX7Amount={ZX7Amount}
            setZX7Amount={setZX7Amount}
            setAddToCart={setAddToCart}
          />
        }
      />
      <Route path="/earphones" element={<Earphones />} />
      <Route
        path="/earphones/product1"
        element={
          <EarphoneWireless
            setActiveMenuRoute={setActiveMenuRoute}
            productAmount={productAmount}
            YX1Amount={YX1Amount}
            setYX1Amount={setYX1Amount}
            setAddToCart={setAddToCart}
          />
        }
      />
      <Route
        path="/checkout"
        element={
          <Checkout
            productAmount={productAmount}
            totalCost={totalCost}
            XX99MarkIIAmout={XX99MarkIIAmout}
            XX99MarkIAmout={XX99MarkIAmout}
            XX59MarkIAmout={XX59MarkIAmout}
            ZX9Amount={ZX9Amount}
            ZX7Amount={ZX7Amount}
            YX1Amount={YX1Amount}
            activeMenuRoute={activeMenuRoute}
            setActiveMenuRoute={setActiveMenuRoute}
            popup={popup}
            setPopup={setPopup}
          />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
