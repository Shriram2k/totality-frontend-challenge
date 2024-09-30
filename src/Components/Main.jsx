import backgroundImg from "../assets/Background.jpg";
const Main = () => {
  return (
    <>
      <section id="home">
        <div className="background">
          <img
            src={backgroundImg}
            className="bg-img h-64 md:h-screen w-screen "
            alt="RentHouse"
          />
          <div className="text-container text-white">
            <h1 className="font-medium text-xl md:text-4xl">
              Discovering Homes for your loved ones.
            </h1>
            <h2 className="md:text-lg text-lg font-light">
              Find new & featured property located in your city!
            </h2>
            <div className="search-bar flex flex-col md:flex-row justify-center items-center md:min-w-96 rounded-2xl">
              <input
                className="search-text w-96 text-black md:text-left text-center"
                type="text"
                placeholder="Please type the place where you looking for"
              />
              <button className="search-btn w-fit md:">Search</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
