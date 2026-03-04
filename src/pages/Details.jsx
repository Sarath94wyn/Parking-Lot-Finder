import { useParams, useNavigate } from "react-router-dom";
import parkingLots from "../data/parkingData";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lot = parkingLots.find(item => item.id == id);

  const addToFavorites = () => {
    localStorage.setItem("favorite", JSON.stringify(lot));
    alert("Added to Favorites!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>{lot.name}</h2>
      <p>Price: ₹{lot.price}/hr</p>
      <p>Available: {lot.available}/{lot.total}</p>
      <p>Amenities: {lot.amenities.join(", ")}</p>

      <h4>Select Time</h4>
      <input type="time" />

      <br /><br />

      <button onClick={() => alert("Booking Confirmed!")}>
        Confirm Booking
      </button>

      <button onClick={addToFavorites} style={{ marginLeft: 10 }}>
        ❤️ Add to Favorites
      </button>

      <br /><br />
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

export default Details;