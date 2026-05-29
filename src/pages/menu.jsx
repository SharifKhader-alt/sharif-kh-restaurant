export default function Menu() {
  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">Our Menu</h2>

      <div className="row g-4">

        <div className="col-md-3">
          <div className="menu-card">
            <img src="https://i0.wp.com/nutrient-matters.com/wp-content/uploads/2025/03/IMG_5274.jpg?fit=580%2C1024&ssl=1" />
            <h5>Shawarma</h5>
            <p>$5.00</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="menu-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8gVYXkppISXwDTAqTDBeGVDOJj_POt1jxDke2OycnJw&s=10" />
            <h5>Pizza</h5>
            <p>$7.00</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="menu-card">
            <img src="https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=60" />
            <h5>Fettuccine</h5>
            <p>$6.50</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="menu-card">
            <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=60" />
            <h5>Lebanese Burger</h5>
            <p>$6.00</p>
            
          </div>
        
        </div>

      </div>

    </div>
  );
}