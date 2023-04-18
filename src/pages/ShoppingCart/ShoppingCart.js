import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './shoppingCart.css'
function ShoppingCart() {
  return (
    <>
      <Header />
      <div className="shopping-cart">
        <div className="title-shopping-cart">
          <h2> Tu Lista </h2>
        </div>
        <div className="shopping-cart-list">
            
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ShoppingCart;
