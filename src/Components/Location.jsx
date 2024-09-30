import India from "../assets/india.jpg";
import Japan from "../assets/japan.jpg";
import USA from "../assets/usa.jpg";
import Dubai from "../assets/dubai.jpg";
import Canada from "../assets/canada.jpg";
import London from "../assets/london.jpg";

const Location = () => {
  return (
    <>
      <section className="location bg-slate-100 pt-20">
        <div className="location-heading text-center">
          <h1 className="text-4xl text-gray-700">Explore By Location</h1>
          <p className="text-lg text-gray-500">
            Wherever you are, Renthouse helps you find the perfect place for you
            and your family
          </p>
        </div>
        <div className="location-details flex justify-center items-center flex-wrap gap-9 p-10 text-center">
          <div className="loco-card">
            <h3>India</h3>
            <label>12 Villas 07 Office 10 Apartments</label>
            <img className="h-60 rounded-lg" src={India} alt="India" />
          </div>
          <div className="loco-card">
            <h3>Japan</h3>
            <label>12 Villas 07 Office 10 Apartments</label>
            <img className="h-60 rounded-lg" src={Japan} alt="Japan" />
          </div>
          <div className="loco-card">
            <h3>USA</h3>
            <label>12 Villas 07 Office 10 Apartments</label>
            <img className="h-60 rounded-lg" src={USA} alt="USA" />
          </div>
          <div className="loco-card">
            <h3>Canada</h3>
            <label>12 Villas 07 Office 10 Apartments</label>
            <img className="h-60 rounded-lg" src={Canada} alt="Canada" />
          </div>
          <div className="loco-card">
            <h3>Dubai</h3>
            <label>12 Villas 07 Office 10 Apartments</label>
            <img className="h-60 rounded-lg" src={Dubai} alt="Dubai" />
          </div>
          <div className="loco-card">
            <h3>London</h3>
            <label>12 Villas 07 Office 10 Apartments</label>
            <img className="h-60 rounded-lg" src={London} alt="Londen" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
