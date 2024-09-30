import { useState, useContext } from "react";
import close from "../assets/close.png";
import { CartContext } from "../Context/CartContext";
import adambakkam from "../assets/images/adambakkam.jpg"
import adyar from "../assets/images/adyar.jpg";
import besantnagar from "../assets/images/besantnagar.jpg";
import pallavaram from "../assets/images/pallavaram.jpg";
import ramapuram from "../assets/images/ramapuram.jpg";
import tnagar from "../assets/images/tnagar.jpg";

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
    available: true,
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
    available: true,
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

const PropertyListing = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const { addToCart } = useContext(CartContext);

  const openBookingWindow = (property) => {
    setSelectedProperty(property);
    setIsBookingOpen(true);
  };

  const closeBookingWindow = () => {
    setIsBookingOpen(false);
    setSelectedProperty(null);
  };

  const handleAddToCart = (property) => {
    addToCart(property);
    closeBookingWindow();
  };

  return (
    <>
      <div className="list-heading pt-20 text-center">
        <h1 className="text-4xl text-gray-700">Recently Listed Properties</h1>
        <p className="text-xl text-gray-500">
          We ensure you the best-in-class properties in the city where you live.
        </p>
      </div>

      {/* Property Listings */}
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-1 md:grid-cols-3">
        {properties.map((property) => (
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

      {/* Booking Window */}
      {isBookingOpen && selectedProperty && (
        <div className="booking-window fixed top-0 left-0 w-screen h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="booking-content bg-white p-6 rounded md:w-80 shadow-lg relative">
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
            <p className="text-lg font-extralight">
              {selectedProperty.description}
            </p>
            <p>
              Location:{" "}
              <b>
                {selectedProperty.location.city},{" "}
                {selectedProperty.location.state}{" "}
              </b>
            </p>
            <p>
              <b>Price: </b> ₹{selectedProperty.price}
            </p>

            <button
              onClick={() => handleAddToCart(selectedProperty)}
              className="mt-4 bg-blue-700 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default PropertyListing;
