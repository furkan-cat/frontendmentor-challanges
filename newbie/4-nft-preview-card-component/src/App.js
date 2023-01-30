import "./App.css";
import IconEtherium from "./icon-etherium";
import IconClock from "./icon-clock";
import IconView from "./icon-view";

function App() {
  return (
    <div className="wrapper">
      <div className="card-img">
        <img src="/image-equilibrium.jpg" className="img" alt="equilibrumImage"/>
        <div>
          <IconView className="view absolute" />
          <div className="overlay" />
        </div>
      </div>
      <div className="title">Equilibrium #3429</div>
      <div className="description light-gray medium">
        Our Equilibrium collection promates balance and calm
      </div>
      <div className="footer-container">
        <div className="icon-container">
          <IconEtherium />
          <div className="icon small">0.041ETH</div>
        </div>
        <div className="icon-container">
          <IconClock />
          <div className="icon small">3 days left</div>
        </div>
      </div>
      <div className="line" />
      <div className="avatar-container">
        <img src="/image-avatar.png" alt="avatar" className="avatar" />
        <div className="text-container">
          <span className="light-gray small">Creation of</span>{" "}
          <span className="name small">Julies Wyvern</span>
        </div>
      </div>
    </div>
  );
}

export default App;
