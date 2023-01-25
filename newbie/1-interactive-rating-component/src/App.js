import "./App.css";
import { AiFillStar } from "react-icons/ai";
import ThankYouIcon from "./thank-you-icon";
import { useState } from "react";

function App() {
  const nums = ["1", "2", "3", "4", "5"];
  const [submit, setSubmit] = useState(false);
  const [selected, setSelected] = useState("");

  const clickHandler = (val) => {
    if (val !== selected) {
      setSelected(val);
    } else {
      setSelected("");
    }
  };

  return (
    <div className="wrapper">
      <div className="card-container">
        {!submit ? (
          <>
            <div className="icon-container">
              <AiFillStar className="icon-container__item absolute-center" />
            </div>
            <div className="text-container">
              <h3 className="text-container__header">How did we do?</h3>
              <p className="text-container__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, nisi.
              </p>
            </div>
            <div className="numbers-wrapper">
              {nums.map((item, index) => (
                <div
                  key={index}
                  className={`numbers-container ${
                    item === selected ? "active" : ""
                  }`}
                  onClick={() => clickHandler(item)}
                >
                  <p className="numbers-container__item absolute-center">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <button className="button" onClick={() => setSubmit(true)}>
                Submit
              </button>
            </div>
          </>
        ) : (
          <div className="thank-you-container">
            <ThankYouIcon />
            <div className="selected-container">
              <div className="selected-container__text">
                You selected {selected} out of 5
              </div>
            </div>
            <div className="text-container__header">
              <h3 className="text-container__header center">Thank you!</h3>
              <p className="text-container__paragraph">
                We appreciate you taking the time to give a rating. If you ever
                need more support, dont't hesitate to get in touch
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
