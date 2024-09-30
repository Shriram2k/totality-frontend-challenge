import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import Basic from "../../assets/Basic.png";
import Standard from "../../assets/Standard.png";
import Platinum from "../../assets/Platinum.png";
import adambakkam from "../../assets/images/adambakkam.jpg";
import adyar from "../../assets/images/adyar.jpg";
import besantnagar from "../../assets/images/besantnagar.jpg";
import pallavaram from "../../assets/images/pallavaram.jpg";
import ramapuram from "../../assets/images/ramapuram.jpg";
import tnagar from "../../assets/images/tnagar.jpg";

const packageImages = {
  Basic: Basic,
  Standard: Standard,
  Platinum: Platinum,
};

const placeImages = {
  adambakkam: adambakkam,
  adyar: adyar,
  tnagar: tnagar,
  ramapuram: ramapuram,
  pallavaram: pallavaram,
  besantnagar: besantnagar,
};

const CartPage = () => {
  const { cartItems, removeFromCart, addToCart, decreaseQuantity } =
    useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section>
      <div className="cart-page container py-20 bg-blue-200 text-center">
        <h1 className="text-3xl mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>Your cart is empty.</p>
            <Link to="/" className="text-blue-500">
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="cart-items">
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="bg-white p-4 rounded shadow-md">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col justify-center w-3/5 text-left">
                      <h2 className="text-lg font-bold">
                        {item.title || item.name}
                      </h2>
                      <p>
                        {item.location?.city} {item.location?.state}
                      </p>
                      {item.bedRooms ? (
                        <p>Room Type: {item.roomType || "Standard"}</p>
                      ) : (
                        <p>Package Type: {item.packageType || "Basic"}</p>
                      )}
                      <p>
                        Quantity: <b> x{item.quantity} </b>
                      </p>
                    </div>
                    <div className="price">
                      <p>₹{item.price} each</p>
                    </div>
                    <img
                      className="w-28 h-28 object-cover rounded"
                      src={
                        item.bedRooms
                          ? placeImages[item.location.place]
                          : packageImages[item.name]
                      }
                      alt={item.title || item.name}
                    />
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-green-500 text-white px-3 py-2 rounded"
                      >
                        +
                      </button>
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-yellow-500 text-white px-3 py-2 rounded"
                      >
                        -
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-500 text-white px-3 py-2 rounded"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Display Total Price */}
            <div className="mt-6 text-xl flex justify-end font-bold bg-white">
              <p className="px-5 py-2">Total Price: ₹{totalPrice}</p>
            </div>

            {/* Checkout Button */}
            <div className="mt-6 flex justify-end px-3 py-2">
              <Link to="/checkout">
                <button className="bg-green-500 text-white px-6 py-3 rounded">
                  Proceed to Payment
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
