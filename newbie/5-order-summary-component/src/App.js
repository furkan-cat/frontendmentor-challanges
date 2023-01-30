import "./App.css";
import Hero from "./svg/hero";
import Music from "./svg/music";

function App() {
  return (
    <div className="wrapper">
      <Hero className="img" />
      <div className="content-container">
        <div className="text-container">
          <div className="text-container__title">Order Summary</div>
          <div className="text-container__description">
            You can now listen two millions of songs, audiobooks, and podcasts
            on any device anywhere you like!
          </div>
        </div>
        <div className="plan-container">
          <div className="left-container">
            <Music />
            <div className="left-inner-container">
              <div className="left-inner-container__title">Annual Plan</div>
              <div className="left-inner-container__price">$59.99/year</div>
            </div>
          </div>
          <a href="/" className="change">
            Change
          </a>
        </div>

        <div className="btn-container">
          <button className="proceed-btn">Proceed to Payment</button>
          <button className="cancel-btn">Cancel Order</button>
        </div>
      </div>
    </div>
  );
}

export default App;
