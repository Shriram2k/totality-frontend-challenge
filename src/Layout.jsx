import Content from "./Components/Content";
import PropertyListing from "./Components/PropertyListing";
import Awards from "./Components/Awards";
import Location from "./Components/Location";
import Packages from "./Components/Packages";
import Contact from "./Components/Contact";
import Main from "./Components/Main";

const Layout = () => {
  return (
    <>
      <Main />
      <Content />
      <PropertyListing />
      <Awards />
      <Location />
      <Packages />
      <Contact />
    </>
  );
};

export default Layout;
