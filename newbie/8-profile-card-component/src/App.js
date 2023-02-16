import "./App.css";
import BgPatternTop from "./bg-pattern-top";
import BgPatternBottom from "./bg-pattern-bottom";
function App() {
  return (
    <div className="wrapper">
      <BgPatternTop className="bg-top-svg" />
      <BgPatternBottom className="bg-bottom-svg" />
      <div className="card-container">
        <div className="image-container">
          <img
            src="/image-victor.jpg"
            alt="victor"
            className="image-container__item"
          />
        </div>
        <div className="content-container">
          <div>
            <span className="content-container__title"> Victor Crest </span>
            <span className="content-container__age">26</span>
          </div>
          <div className="content-container-location">London</div>
          <hr />
          <div className="footer">
            <div>
              <div className="bold">80K</div>
              <div className="light">Followers</div>
            </div>
            <div>
              <div className="bold">803K</div>
              <div className="light">Likes</div>
            </div>
            <div>
              <div className="bold">1.4K</div>
              <div className="light">Photos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
