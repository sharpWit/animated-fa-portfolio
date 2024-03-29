import "./app.scss";
import Cursor from "./components/cursor/Cursor";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <Cursor />

      <section id="خانه">
        <Navbar />
        <Hero />
      </section>

      <section id="خدمات">
        <Parallax type="services" />
      </section>

      <section>
        <Services />
      </section>

      <section id="پورتفلیو">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />

      <section id="تماس با من">
        <Contact />
      </section>
    </div>
  );
};

export default App;
