import React from "react";
import ReactDOM from "react-dom/client";
import { StarRating } from "./components/StarRating";
import "./index.css";
import App from "./App";

const Test = () => {
  return (
    <>
      <StarRating color="blue" maxRating={10} />
      <p>This movies was rated X stars</p>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/*<StarRating maxRating={5} />*/}
  </React.StrictMode>
);
