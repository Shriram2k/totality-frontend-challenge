import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Logo from "../assets/renthousecom-logo.svg";
import menu from "../assets/menu.png";
import cart from "../assets/cart.png";
import menuClose from "../assets/menuClose.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuState, setMenuState] = useState("Home");
  const [languageOpen, setLanguageOpen] = useState(false);
  const [languageState, setLanguageState] = useState("English");
  const [viewCart, setViewCart] = useState(false);
  const { cartItems } = useContext(CartContext);

  const toggleMenuOpen = () => setMenuOpen(!menuOpen);
  const toggleLanguageOpen = () => setLanguageOpen(!languageOpen);

  const handleMenuClick = (page) => {
    setMenuState(page);
    setMenuOpen(false);
  };

  const handleLanguageClick = (language) => {
    setLanguageState(language);
    setLanguageOpen(false);
  };

  const handleCartOpen = () => setViewCart(!viewCart);

  return (
    <nav>
      <div className="navigation flex items-center justify-between">
        <div className="left-side flex items-center">
          <button
            onClick={toggleMenuOpen}
            className="menu flex p-2 items-center"
          >
            <img
              className="size-8"
              src={menuOpen ? menuClose : menu}
              alt="Menu"
            />
            <span className="menu-text hidden lg:inline ml-2">Menu</span>
          </button>

          {/* Menu Links */}
          {menuOpen && (
            <div className="menu-open w-36 md:w-64">
              <section className={menuState === "Home" ? "active" : ""}>
                <Link onClick={() => handleMenuClick("Home")} to="/">
                  Home
                </Link>
              </section>
              <section className={menuState === "About" ? "active" : ""}>
                <Link onClick={() => handleMenuClick("About")} to="/about">
                  About
                </Link>
              </section>
              <section className={menuState === "Service" ? "active" : ""}>
                <Link onClick={() => handleMenuClick("Service")} to="/service">
                  Service
                </Link>
              </section>
              <section className={menuState === "Blog" ? "active" : ""}>
                <Link onClick={() => handleMenuClick("Blog")} to="/blog">
                  Blog
                </Link>
              </section>
              <section className={menuState === "Pricing" ? "active" : ""}>
                <Link onClick={() => handleMenuClick("Pricing")} to="/pricing">
                  Pricing
                </Link>
              </section>
              <section className={menuState === "Contact" ? "active" : ""}>
                <Link onClick={() => handleMenuClick("Contact")} to="/contact">
                  Contact
                </Link>
              </section>
            </div>
          )}

          {/* Language Selector */}
          <button
            onClick={toggleLanguageOpen}
            className="language text-xs md:text-sm"
          >
            {languageState}
          </button>

          {languageOpen && (
            <div className="lang-open w-72 flex justify-center">
              <section
                onClick={() => handleLanguageClick("English")}
                className={languageState === "English" ? "active" : ""}
              >
                English
              </section>
              <section
                onClick={() => handleLanguageClick("Espanol")}
                className={languageState === "Espanol" ? "active" : ""}
              >
                Espanol
              </section>
              <section
                onClick={() => handleLanguageClick("French")}
                className={languageState === "French" ? "active" : ""}
              >
                French
              </section>
            </div>
          )}
        </div>
        <div className="heading w-32 md:w-64">
          <img src={Logo} alt="Renthouse.com" />
        </div>
        <div className="right-side text-center">
          <Link
            to="/signup"
            className="md:text-sm mr-5  bg-yellow-100 p-2 rounded-md"
          >
            Sign Up
          </Link>
          <Link to="/cartpage" className="mr-14 md:mr-4">
            <button onClick={handleCartOpen}>
              <div className="flex justify-center relative rounded-full items-center">
                <img className="size-7" src={cart} alt="Cart" />
                <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center px-1">
                  {cartItems.length}
                </span>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
