import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="image-container">
        <picture>
          <div className="overlay" />
          <source
            srcSet="/image-header-mobile.jpg 100, /image-header-desktop.jpg 450w"
            sizes="(max-width: 450px) 100, (min-width:450px) 450px"
            type="image/jpg"
          />
          <img src="/image-header-mobile.jpg" alt="mobile-desktop-image"/>
        </picture>
      </div>
      <div className="text-container">
        <div className="text-container__text">
          Get <span>insights</span> that help your business grow
        </div>
        <p className="text-container__paragraph">
          Discover the benefits of data analytics and make better decisions
          regarging revenue, customer experience, and overall efficiency.
        </p>

        <div className="text-container__number">10k+</div>
        <div className="text-container__title">COMPANIES</div>

        <div className="text-container__number">314</div>
        <div className="text-container__title">TEMPLATES</div>

        <div className="text-container__number">12M+</div>
        <div className="text-container__title">QUERIES</div>
      </div>
    </div>
  );
}

export default App;
