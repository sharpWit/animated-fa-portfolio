import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return (
    <div>
      <section id="خانه">
        <Navbar />
        <Hero />
      </section>

      <section id="خدمات">
        <Parallax type="services" />
      </section>

      <section>services</section>

      <section id="پورتفلیو">
        <Parallax type="portfolio" />
      </section>

      <section id="تماس با من">Contact</section>
    </div>
  );
};

export default App;
