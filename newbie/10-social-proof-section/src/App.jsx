import { Stars } from "./components/star";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="text-container">
          <h2>10,000+ of your users love products.</h2>
          <p>
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services
          </p>
        </div>
        <div className="rate-container">{renderRateContainer()}</div>
        <div className="review-container">
          <div className="review-header">
            <img src="/image-colton.jpg" alt=""  className="review-header__img"/>
            <div>
              <h4>Colton Smith</h4>
              <div>Verified Buyer</div>
            </div>
          </div>
          <p>
            "We needed the same printed design as the one we had ordered a week
            prior. Not only did they find the original order, but we also
            recieved it in time. Excellent!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

function renderRateContainer() {
  const arr = [
    { component: <Stars />, title: "Rated 5 Starts in Reviews" },
    { component: <Stars />, title: "Rated 5 Starts in Report Guru" },
    { component: <Stars />, title: "Rated 5 Starts in BestTech" },
  ];

  return (
    <>
      {arr.map((item) => (
        <div key={item.title}>
          <div>{item.component}</div>
          <div>{item.title}</div>
        </div>
      ))}
    </>
  );
}
