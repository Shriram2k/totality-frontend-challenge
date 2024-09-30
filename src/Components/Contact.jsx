import Logo from "../assets/renthousecom-logo-white.svg";
const Contact = () => {
  return (
    <>
      <section className="">
        <div className="contact-bar bg-yellow-500 flex p-12 justify-between">
          <div className="contact-heading flex flex-col justify-between">
            <h1 className="text-left text-4xl">Do You Have Questions ?</h1>
            <p className="text-left text-xl font-light">
              We will help you to find a better place.
            </p>
          </div>
          <button className="bg-yellow-600 text-2xl border-4 border-yellow-200 rounded-full p-5">
            Contact Us Today
          </button>
        </div>
        <div className="footer-plate flex flex-col md:flex-row md:justify-between p-10 bg-blue-950">
          <div className="subscribe-bar flex flex-col justify-center text-center items-center">
            <img className="logo" src={Logo} alt="Renthouse.com" />
            <h2 className="text-2xl md:pl-6 pl-0 text-white">
              Do You Need Help With Anything?
            </h2>
            <h4 className="text-gray-500 md:pl-6 pl-0 pt-5">
              Receive updates, hot deals, tutorials, discounts sent straignt in
              your inbox every month
            </h4>
            <div className="input-email md:p-6 pt-6 flex">
              <input
                className="p-3 text-lg rounded-md w-64"
                type="text"
                placeholder="Enter Email Address"
              />
              <div className="btn pl-2">
                <button className="bg-yellow-500 p-4 rounded-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="layout-bar py-5 text-center">
            <h1 className="text-xl text-white">LAYOUTS</h1>
            <div className="contents">
              <h3>Home Page</h3>
              <h3>About Page</h3>
              <h3>Service Page</h3>
              <h3>Property Page</h3>
              <h3>Contact Page</h3>
              <h3>Single Blog</h3>
            </div>
          </div>
          <div className="section-bar py-5 text-center">
            <h1 className="text-xl text-white">ALL SECTION</h1>
            <div className="contents">
              <h3>Headers</h3>
              <h3>Features</h3>
              <h3>Attractive</h3>
              <h3>Testimonials</h3>
              <h3>Videos</h3>
              <h3>Footers</h3>
            </div>
          </div>
          <div className="COMPANY-bar md:pr-20 py-5 text-center">
            <h1 className="text-xl text-white">COMPANY</h1>
            <div className="contents">
              <h3>About</h3>
              <h3>Blog</h3>
              <h3>Service</h3>
              <h3>Affiliate</h3>
              <h3>Login</h3>
              <h3>Changelog</h3>
            </div>
          </div>
        </div>
        <div className="copyright bg-blue-950 text-center p-5 text-gray-600 border border-t-gray-600">
          <h1>
            © 2024 Renthouse.com. Designd By <b>Shriram.</b>
          </h1>
        </div>
      </section>
    </>
  );
};

export default Contact;
