import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import parkingLots from "../data/parkingData";
import ParkingCard from "../components/ParkingCard";

function Home() {
  const [maxPrice, setMaxPrice] = useState(50);

  const filteredLots = parkingLots.filter(
    lot => lot.price <= maxPrice
  );

  return (
    <div style={{ padding: 20 }}>
      <h3>Filter by Max Price</h3>
      <input
        type="range"
        min="10"
        max="100"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <p>₹{maxPrice}</p>

      <MapContainer
        center={[10.0, 76.3]}
        zoom={8}
        style={{ height: "400px", marginTop: 20 }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {filteredLots.map(lot => (
          <Marker key={lot.id} position={[lot.lat, lot.lng]}>
            <Popup>
              <h4>{lot.name}</h4>
              <p>Available: {lot.available}</p>
              <p>₹{lot.price}/hr</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <h3>Parking List</h3>
      {filteredLots.map(lot => (
        <ParkingCard key={lot.id} lot={lot} />
      ))}
    </div>
  );
}

export default Home;