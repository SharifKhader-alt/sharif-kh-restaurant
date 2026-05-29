import { useState } from "react";

import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <nav className="navbar navbar-dark">
        <div className="container justify-content-center">

          <button className="btn btn-light me-2" onClick={() => setPage("home")}>
            Home
          </button>

          <button className="btn btn-light me-2" onClick={() => setPage("menu")}>
            Menu
          </button>

          <button className="btn btn-light me-2" onClick={() => setPage("about")}>
            About
          </button>

          <button className="btn btn-light" onClick={() => setPage("contact")}>
            Contact
          </button>

        </div>
      </nav>

      {page === "home" && <Home  />}
      {page === "menu" && <Menu />}
      {page === "about" && <About />}
      {page === "contact" && <Contact />}

      <footer className="text-center mt-5 p-3">
        <p>© 2026 Sharif KH Restaurant | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;