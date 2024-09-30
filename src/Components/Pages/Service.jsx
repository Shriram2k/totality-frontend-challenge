import { useState, useContext } from "react";
import Slider from "@mui/material/Slider";
import Contact from "../Contact";
import close from "../../assets/close.png";
import Packages from "../Packages";
import { CartContext } from "../../Context/CartContext";
import adambakkam from "../../assets/images/adambakkam.jpg";
import adyar from "../../assets/images/adyar.jpg";
import besantnagar from "../../assets/images/besantnagar.jpg";
import pallavaram from "../../assets/images/pallavaram.jpg";
import ramapuram from "../../assets/images/ramapuram.jpg";
import tnagar from "../../assets/images/tnagar.jpg";

const properties = [
  // The properties array
  {
    id: 1,
    title: "Luxury Villa in Adyar",
    description: "Beautiful beachfront villa with a pool and amazing views.",
    price: 5000,
    bedRooms: 2,
    location: {
      place: "adyar",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
    },
    amenities: ["Pool", "Wi-Fi", "Ocean View", "Private Parking"],
    images: ["adayar.jpeg"],
    available: true,
  },
  {
    id: 2,
    title: "Modern Apartment in Ramapuram",
    description:
      "A cozy apartment located in the heart of Chennai City. Perfect for business travelers and tourists.",
    price: 3000,
    bedRooms: 3,
    location: {
      place: "ramapuram",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
    },
    amenities: ["Wi-Fi", "Air Conditioning", "24/7 Security", "Elevator"],
    images: ["ramapuram.jpeg"],
    available: true,
  },
  {
    id: 3,
    title: "Traditional Apartment in T. Nagar ",
    description:
      "Experience tranquility in this beautiful apartment surrounded by nature. Ideal for a peaceful getaway.",
    price: 1500,
    bedRooms: 1,
    location: {
      place: "tnagar",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
    },
    amenities: ["Fireplace", "Garden", "Pet-Friendly", "Wi-Fi"],
    images: ["tnagar.jpeg"],
    available: false,
  },
  {
    id: 4,
    title: "Beachfront in Besant Nagar",
    description:
      "Enjoy stunning ocean views from this luxury condo. Walking distance to the beach and local attractions.",
    price: 4000,
    bedRooms: 2,
    location: {
      place: "besantnagar",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
    },
    amenities: ["Pool", "Ocean View", "Balcony", "Gym"],
    images: ["besantnagar.jpeg"],
    available: true,
  },
  {
    id: 5,
    title: "Individual house in Pallavaram",
    description:
      "A cozy retreat surrounded by nature. Perfect for enjoying the great outdoors.",
    price: 2000,
    bedRooms: 1,
    location: {
      place: "pallavaram",
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
    },
    amenities: ["Fireplace", "Hot Tub", "Mountain View"],
    images: ["palavaram.jpeg"],
    available: true,
  },
  {
    id: 6,
    title: "Luxury Villa in Adambakkam",
    description:
      "Experience the ultimate in luxury living with this stunning villa offering panoramic views of Chennai.",
    price: 7500,
    bedRooms: 4,
    location: {
      place: "adambakkam",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
    },
    amenities: [
      "Infinity Pool",
      "Private Elevator",
      "Butler Service",
      "City View",
    ],
    images: ["adambakam.jpeg"],
    available: false,
  },
];
const placeImages = {
  adambakkam: adambakkam,
  adyar: adyar,
  tnagar: tnagar,
  ramapuram: ramapuram,
  pallavaram: pallavaram,
  besantnagar: besantnagar,
};
const Service = () => {
  const { addToCart } = useContext(CartContext);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const openBookingWindow = (property) => {
    setSelectedProperty(property);
    setIsBookingOpen(true);
  };

  const closeBookingWindow = () => {
    setIsBookingOpen(false);
    setSelectedProperty(null);
  };

  const handleAddToCart = () => {
    if (selectedProperty) {
      addToCart(selectedProperty);
      closeBookingWindow();
    }
  };

  const [filters, setFilters] = useState({
    location: "",
    priceRange: [0, 7500],
    amenities: [],
    onlyAvailable: false,
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePriceRangeChange = (event, newValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: newValue,
    }));
  };

  const filteredProperties = properties.filter((property) => {
    const matchesLocation =
      filters.location === "" || property.location.city === filters.location;
    const matchesPrice =
      property.price >= filters.priceRange[0] &&
      property.price <= filters.priceRange[1];
    const matchesAmenities =
      filters.amenities.length === 0 ||
      filters.amenities.every((amenity) =>
        property.amenities.includes(amenity)
      );
    const matchesAvailability = !filters.onlyAvailable || property.available;

    return (
      matchesLocation && matchesPrice && matchesAmenities && matchesAvailability
    );
  });

  return (
    <>
      <div className="list-heading flex-initial pt-20 pb-20 text-center">
        <h1 className="text-4xl text-gray-700">Recently Listed Properties</h1>
        <p className="text-xl text-gray-500">
          We ensure the best-in-class properties in the city where you live.
        </p>
      </div>
      {/* Filter section */}
      <div className="filters bg-blue-200 items-center ">
        <label className="p-3 rounded-3xl">
          <input
            className="m-2"
            type="checkbox"
            name="onlyAvailable"
            checked={filters.onlyAvailable}
            onChange={handleFilterChange}
          />
          Only Available Properties
        </label>

        <select
          className="p-3 rounded-3xl"
          name="location"
          onChange={handleFilterChange}
        >
          <option value="">Select Location</option>
          <option value="Chennai">Chennai</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bangalore">Bangalore</option>
        </select>

        {/* Price Range Slider */}
        <div className="price-filter p-4 rounded-3xl">
          <label className="m-3 p-4">
            Price Range: ₹{filters.priceRange[0]} - ₹{filters.priceRange[1]}
          </label>
          <Slider
            value={filters.priceRange}
            onChange={handlePriceRangeChange}
            valueLabelDisplay="auto"
            min={0}
            max={7500}
            step={100}
          />
        </div>

        {/* Amenities Filters */}
        {["Wi-Fi", "Pool", "Ocean View"].map((amenity) => (
          <label key={amenity} className="p-3 rounded-3xl">
            <input
              className="m-1"
              type="checkbox"
              name="amenities"
              value={amenity}
              onChange={(e) => {
                const { value, checked } = e.target;
                setFilters((prevFilters) => {
                  const amenities = checked
                    ? [...prevFilters.amenities, value]
                    : prevFilters.amenities.filter((a) => a !== value);
                  return { ...prevFilters, amenities };
                });
              }}
            />
            {amenity}
          </label>
        ))}
      </div>
      {/* Property Listings */}
      {filteredProperties.length === 0 ? (
        <p className="text-center text-4xl my-6">
          No properties available per filter.
        </p>
      ) : (
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-1 md:grid-cols-3">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="property-card gap-3 w-80 md:w-auto bg-gray-200"
            >
              <img
                src={placeImages[property.location.place]}
                alt={property.title}
              />
              <h2>{property.title}</h2>
              <p className="text-gray-500">
                {property.location.city}, {property.location.state}
              </p>
              <p className="description text-yellow-700">
                {property.description}
              </p>
              <p className="beds">
                No. of Bedrooms available: <b>{property.bedRooms}</b>
              </p>
              {property.available ? (
                <button
                  onClick={() => openBookingWindow(property)}
                  className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
                >
                  ₹{property.price}
                </button>
              ) : (
                <p className="not-available text-red-900">Not Available</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Booking Window */}
      {isBookingOpen && selectedProperty && (
        <div className="booking-window fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="booking-content bg-white p-6 rounded shadow-lg relative">
            <button
              onClick={closeBookingWindow}
              className="absolute top-2 right-2 text-red-500"
            >
              <img
                className="size-7 bg-red-300 rounded-full"
                src={close}
                alt="Close"
              />
            </button>
            <h2 className="text-2xl mb-4">{selectedProperty.title}</h2>
            <p>{selectedProperty.description}</p>
            <p>
              Location: {selectedProperty.location.city},{" "}
              {selectedProperty.location.state}
            </p>
            <p>Price per night: ₹{selectedProperty.price}</p>

            <button
              onClick={handleAddToCart}
              className="mt-4 bg-blue-700 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}

      <Packages />
      <Contact />
    </>
  );
};

export default Service;
