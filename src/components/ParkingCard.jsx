import { useNavigate } from "react-router-dom";

function ParkingCard({ lot }) {
  const navigate = useNavigate();

  return (
    <div style={{
      background: "white",
      padding: 15,
      margin: 10,
      borderRadius: 10,
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h3>{lot.name}</h3>
      <p>₹{lot.price}/hr</p>
      <p>Available: {lot.available}/{lot.total}</p>
      <button onClick={() => navigate(`/details/${lot.id}`)}>
        View Details
      </button>
    </div>
  );
}

export default ParkingCard;