import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.components";
import Header from "./components/header/header.component";

// const HatsPage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>Hats Page</h1>
//     </div>
//   );
// };
// const HatsPage = (props) => (
//   {console.log(props)}
//   <div>
//     <h1>Hats Page</h1>
//   </div>
// );

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
