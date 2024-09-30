import Trophy from "../assets/trophy.png";

const Awards = () => {
  return (
    <>
      <div className="awards-section p-20 bg-blue-950">
        <div className="awards-heading text-center">
          <p className="text-green-600">Our Awards</p>
          <h1 className="text-4xl pt-6 text-white">
            We have over 120,000+ happy users and have received a wide variety
            of awards
          </h1>
        </div>
        <div className="trophies flex flex-row mt-10 text-lg text-center justify-between pt-20 text-gray-300">
          <div className="troph-card">
            <img className="md:size-48" src={Trophy} alt="" />
            <p>Blue Burmin Award</p>
          </div>
          <div className="troph-card">
            <img className="md:size-48" src={Trophy} alt="" />
            <p>Mimo X11 Award</p>
          </div>
          <div className="troph-card">
            <img className="md:size-48" src={Trophy} alt="" />
            <p>Australian UGC Award</p>
          </div>
          <div className="troph-card">
            <img className="md:size-48" src={Trophy} alt="" />
            <p>IITCA Green Award</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards;
