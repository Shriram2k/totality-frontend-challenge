import villa from "../assets/villa.png";
import family from "../assets/family.png";
import office from "../assets/office.png";
import apartment from "../assets/apartment.png";
import house from "../assets/house.png";

const Content = () => {
  return (
    <>
      <div className="featured-property p-20 text-center bg-slate-100">
        <h1 className=" text-4xl">All kind of Featured Property</h1>
        <h3 className="text-xl">Find all the type of property</h3>
        <div className="feature-cards flex justify-center items-center md:flex-row sm:row-span-2 flex-col ">
          <div className="card bg-white m-2 p-16 shadow-2xl rounded-xl">
            <img
              className="bg-red-100 mb-2 rounded-full p-5 size-16"
              src={family}
              alt="Family House"
            />
            <h4>Family House</h4>
            <p>300 Properties</p>
          </div>
          <div className="card bg-white m-2 p-16 shadow-2xl rounded-xl">
            <img
              className="bg-green-100 mb-2 rounded-full p-5 size-16"
              src={house}
              alt="House & Villa"
            />
            <h4>House & Villa</h4>
            <p>122 Properties</p>
          </div>
          <div className="card bg-white m-2 p-16 shadow-2xl rounded-xl">
            <img
              className="bg-yellow-100 mb-2 rounded-full p-5 size-16"
              src={apartment}
              alt="Apartment"
            />
            <h4>Apartment</h4>
            <p>80 Properties</p>
          </div>
          <div className="card bg-white m-2 p-16 shadow-2xl rounded-xl">
            <img
              className="bg-purple-100 mb-2 rounded-full p-5 size-16"
              src={office}
              alt="Office & Studio"
            />
            <h4>Office & Studio</h4>
            <p>155 Properties</p>
          </div>
          <div className="card bg-white m-2 p-16 shadow-2xl rounded-xl">
            <img
              className="bg-blue-100 mb-2 rounded-full p-5 size-16"
              src={villa}
              alt="Villa & Condo"
            />
            <h4>Villa & Condo</h4>
            <p>80 Properties</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
