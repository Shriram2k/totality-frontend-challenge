import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
const Checkout = () => {
  const { getTotalAmount } = useContext(CartContext);
  const totalAmount = getTotalAmount();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="max-w-md bg-white shadow-md rounded-lg p-8 w-screen">
        <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>

        <form>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="cardName"
            >
              Name on Card
            </label>
            <input
              type="text"
              id="cardName"
              placeholder="Enter name on the card"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="cardNumber"
            >
              Card Number
            </label>
            <input
              type="number"
              id="cardNumber"
              placeholder="Enter card number"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="expiryDate"
              >
                Expiration Date (MM/YY)
              </label>
              <input
                type="text"
                id="expiryDate"
                placeholder="MM/YY"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="w-1/2 pl-2">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="cvc"
              >
                CVC
              </label>
              <input
                type="number"
                id="cvc"
                placeholder="CVC"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <Link to="/">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-light py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Pay ₹ <b>{totalAmount}</b>
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
