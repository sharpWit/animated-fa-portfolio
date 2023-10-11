import "./app.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="خانه">
        <Navbar />
      </section>
      <section id="خدمات">Parallax</section>
      <section>services</section>
      <section id="پورتفلیو">Parallax</section>
      <section>Portfolio</section>
      <section>Portfolio</section>
      <section>Portfolio</section>
      <section>Portfolio</section>
      <section id="تماس با من">Contact</section>
      <section id="درباره من">About</section>
    </div>
  );
};

export default App;
