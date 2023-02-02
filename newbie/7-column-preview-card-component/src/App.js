import "./App.css";
import IconSuv from "./icon-suv";
import IconSedan from "./icon-sedan";
import IconLuxury from "./icon-luxury.js";

function App() {
  return (
    <div className="wrapper">
      <div className="card-container sedan">
        <IconSedan />
        <header>SEDANS</header>
        <p>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button className="sedan-btn">Learn More</button>
      </div>
      <div className="card-container suv">
        <IconSuv />
        <header>SUVS</header>
        <p>
          Take an SUV for it spacious interior, power, and versality. Perfect
          for your next family vocation and off-road adventures.
        </p>
        <button className="suv-btn">Learn More</button>
      </div>
      <div className="card-container luxury">
        <IconLuxury />
        <header>LUXURY</header>
        <p>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enchanced comfort of a luxury rental and arrive in style.
        </p>
        <button className="luxury-btn">Learn More</button>
      </div>
    </div>
  );
}

export default App;
