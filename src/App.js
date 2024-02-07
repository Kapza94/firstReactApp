import "./App.css";
import Products from "./Products";
import Auth from "./Auth";
import { useState } from "react";

function App() {
  const [state, setState] = useState(null);
  const handleSubmit = (value) => {
    console.log(value, "Im from app");
    if (value === "hello") {
      setState(true);
    } else {
      setState(false);
    }
  };

  return (
    <div className="App">
      <img src="download.png" name="download" alt="famazon logo" />
      {/*default state needs to show auth */}
      {!state ? (
        <Auth handleSubmit={handleSubmit} />
      ) : (
        <div className="landing-page">
          <h1>Welcome to Famazon</h1>
          <h4>Where famous people get there items first.</h4>

          <Products name="iPhone 24" description="Get it before everyone else" price="24000" />
          <Products
            name="Tesla Model Z"
            description="Not even Elon Knows this is out"
            price="240000"
          />
          <Products name="Fendi Hat" description="Well if you know you know" price="4000" />
        </div>
      )}
    </div>
  );
}

export default App;
