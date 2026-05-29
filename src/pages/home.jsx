export default function Home({ setPage }) {
  return (
    <div className="container text-center mt-4">

      <h1>Welcome to Sharif KH Restaurant</h1>

      <p>
        A cozy place serving fresh Lebanese-inspired meals made with care and simple ingredients.
      </p>

      <p>
        From shawarma to pizza, we bring you food that feels homemade and full of flavor.
      </p>

      <img
        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
        className="img-fluid mt-3 mx-auto d-block"
        style={{ width: "450px", borderRadius: "12px" }}
      />

      <br /><br />

      <button
        className="btn btn-primary"
        onClick={() => setPage("menu")}
      >
        View Menu
      </button>

    </div>
  );
}