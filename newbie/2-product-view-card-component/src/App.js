import "./App.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="img" />
        <div className="content-container">
          <h5>perfume</h5>
          <h1>Gabrielle Essence Eaue de Parfum</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi hic
            consectetur iure sapiente provident amet recusandae, odit
          </p>
          <div className="price-container">
            <div className="price-container__discount-price ">$149.99</div>
            <div className="price-container__old-price">$169.99</div>
          </div>
          <buton className="btn">
            <AiOutlineShoppingCart className="icon" />
            Add to Card
          </buton>
        </div>
      </div>
    </div>
  );
}

export default App;
