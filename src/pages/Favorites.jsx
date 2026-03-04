function Favorites() {
  const favorite = JSON.parse(localStorage.getItem("favorite"));

  return (
    <div style={{ padding: 20 }}>
      <h2>❤️ Favorites</h2>
      {favorite ? (
        <div>
          <h3>{favorite.name}</h3>
          <p>₹{favorite.price}/hr</p>
        </div>
      ) : (
        <p>No favorites added.</p>
      )}
    </div>
  );
}

export default Favorites;