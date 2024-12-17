import Navbar from "./components/Navbar";
import AppRoutes from "./components/AppRoutes";
import FooterHero from "./components/FooterHero";
import Footer from "./components/Footer";
import CartOverlay from "./components/CartOverlay";
import { useEffect, useState } from "react";

const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMenuRoute, setActiveMenuRoute] = useState(0);
  const [XX99MarkIIAmout, setXX99MarkIIAmout] = useState(0);
  const [XX99MarkIAmout, setXX99MarkIAmout] = useState(0);
  const [XX59MarkIAmout, setXX59MarkIAmout] = useState(0);
  const [ZX9Amount, setZX9Amount] = useState(0);
  const [ZX7Amount, setZX7Amount] = useState(0);
  const [YX1Amount, setYX1Amount] = useState(0);
  const [productAmount, setProductAmount] = useState(0);
  const [addToCart, setAddToCart] = useState(false);
  const [cartOverlay, setCartOverlay] = useState(false);
  const [totalCost] = useState(0);
  const [checkoutRoute, setCheckoutRoute] = useState(false);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    setProductAmount(
      XX99MarkIIAmout +
        XX99MarkIAmout +
        XX59MarkIAmout +
        ZX9Amount +
        ZX7Amount +
        YX1Amount
    );
  }, [
    XX99MarkIIAmout,
    XX99MarkIAmout,
    XX59MarkIAmout,
    ZX9Amount,
    ZX7Amount,
    YX1Amount,
  ]);

  return (
    <div className="relative w-full h-screen bg-[#FAFAFA]">
      <Navbar
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        activeMenuRoute={activeMenuRoute}
        setActiveMenuRoute={setActiveMenuRoute}
        productAmount={productAmount}
        addToCart={addToCart}
        setAddToCart={setAddToCart}
        XX99MarkIIAmout={XX99MarkIIAmout}
        XX99MarkIAmout={XX99MarkIAmout}
        cartOverlay={cartOverlay}
        setCartOverlay={setCartOverlay}
        checkoutRoute={checkoutRoute}
        setCheckoutRoute={setCheckoutRoute}
      />
      <AppRoutes
        activeMenuRoute={activeMenuRoute}
        setActiveMenuRoute={setActiveMenuRoute}
        productAmount={productAmount}
        setProductAmount={setProductAmount}
        XX99MarkIIAmout={XX99MarkIIAmout}
        setXX99MarkIIAmout={setXX99MarkIIAmout}
        XX99MarkIAmout={XX99MarkIAmout}
        setXX99MarkIAmout={setXX99MarkIAmout}
        XX59MarkIAmout={XX59MarkIAmout}
        setXX59MarkIAmout={setXX59MarkIAmout}
        ZX9Amount={ZX9Amount}
        setZX9Amount={setZX9Amount}
        ZX7Amount={ZX7Amount}
        setZX7Amount={setZX7Amount}
        YX1Amount={YX1Amount}
        setYX1Amount={setYX1Amount}
        addToCart={addToCart}
        setAddToCart={setAddToCart}
        popup={popup}
        setPopup={setPopup}
        totalCost={totalCost}
      />
      {cartOverlay && (
        <CartOverlay
          cartOverlay={cartOverlay}
          setCartOverlay={setCartOverlay}
          productAmount={productAmount}
          setProductAmount={setProductAmount}
          XX99MarkIIAmout={XX99MarkIIAmout}
          addToCart={addToCart}
          setXX99MarkIIAmout={setXX99MarkIIAmout}
          totalCost={totalCost}
          XX99MarkIAmout={XX99MarkIAmout}
          setXX99MarkIAmout={setXX99MarkIAmout}
          XX59MarkIAmout={XX59MarkIAmout}
          setXX59MarkIAmout={setXX59MarkIAmout}
          ZX9Amount={ZX9Amount}
          setZX9Amount={setZX9Amount}
          ZX7Amount={ZX7Amount}
          setZX7Amount={setZX7Amount}
          YX1Amount={YX1Amount}
          setYX1Amount={setYX1Amount}
          checkoutRoute={checkoutRoute}
          setCheckoutRoute={setCheckoutRoute}
        />
      )}
      {!checkoutRoute && (
        <FooterHero
          activeMenuRoute={activeMenuRoute}
          setActiveMenuRoute={setActiveMenuRoute}
        />
      )}
      <Footer
        activeMenuRoute={activeMenuRoute}
        setActiveMenuRoute={setActiveMenuRoute}
      />
    </div>
  );
};

export default App;
