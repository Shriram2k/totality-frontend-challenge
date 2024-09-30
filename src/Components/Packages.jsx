import { useContext, useState } from "react";
import Check from "../assets/check.png";
import Close from "../assets/close.png";
import { CartContext } from "../Context/CartContext";

const packagePlans = [
  {
    name: "Basic",
    price: 79,
    users: "per user, per month",
    features: [
      { text: "99.5% Uptime Guarantee", available: true },
      { text: "120GB CDN Storage", available: true },
      { text: "5GB Cloud Storage", available: true },
      { text: "Personal Help Support", available: false },
      { text: "Enterprise SLA", available: false },
    ],
    buttonText: "Start Basic",
  },
  {
    name: "Standard",
    price: 129,
    users: "per user, per month",
    highlight: "Best Value",
    features: [
      { text: "99.5% Uptime Guarantee", available: true },
      { text: "120GB CDN Storage", available: true },
      { text: "10GB Cloud Storage", available: true },
      { text: "Personal Help Support", available: true },
      { text: "Enterprise SLA", available: false },
    ],
    buttonText: "Start Standard",
  },
  {
    name: "Platinum",
    price: 159,
    users: "2 users, per month",
    features: [
      { text: "100% Uptime Guarantee", available: true },
      { text: "150GB CDN Storage", available: true },
      { text: "20GB Cloud Storage", available: true },
      { text: "Personal Help Support", available: true },
      { text: "Enterprise SLA", available: true },
    ],
    buttonText: "Start Platinum",
  },
];

const Packages = () => {
  const [currentPlan, setCurrentPlan] = useState(null);
  const { addToCart, cartItems } = useContext(CartContext);

  const handleAddToCart = (plan) => {
    if (currentPlan && currentPlan.name !== plan.name) {
      alert(
        "You can only add one plan at a time. Please remove the current plan before adding a new one."
      );
      return;
    }

    const existingItem = cartItems.find((item) => item.name === plan.name);
    if (!existingItem) {
      addToCart({ ...plan, quantity: 1 });
      setCurrentPlan(plan);
      alert("Plan has been added to the cart");
    }
  };

  return (
    <>
      <section className="packages-group bg-yellow-50">
        <div className="packages-heading text-center pt-20">
          <h1 className="text-7xl text-gray-700">Select Your Package</h1>
          <p className="text-gray-500 text-lg">
            Industry Best Packages for all your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center items-center -m-10">
          {packagePlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-6 shadow-2xl rounded-xl text-center w-80 ${
                plan.highlight ? "transform scale-105" : ""
              } transition-transform duration-300`}
            >
              {plan.highlight && (
                <h1 className="bg-green-600 text-white p-2 rounded-md">
                  {plan.highlight}
                </h1>
              )}
              <h1 className="text-2xl font-normal p-5">{plan.name}</h1>
              <h1 className="price text-7xl">
                <span className="text-3xl">₹</span>
                {plan.price}
              </h1>
              <p className="text-center font-light">{plan.users}</p>
              <ul className="list-none pl-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex p-3">
                    <img
                      className={
                        feature.available
                          ? "size-6 rounded-full bg-green-100"
                          : "size-6 rounded-full bg-red-100"
                      }
                      src={feature.available ? Check : Close}
                      alt={feature.available ? "Check" : "Close"}
                    />
                    <p className="pl-3">{feature.text}</p>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleAddToCart(plan)}
                className={
                  plan.highlight
                    ? "bg-green-600 text-white border-lime-500 hover:bg-green-700 border-spacing-1 text-2xl p-2 rounded-2xl mt-8 mb-8"
                    : "bg-orange-400 text-xl p-2 hover:bg-orange-500 rounded-2xl mt-8 mb-8"
                }
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Packages;
