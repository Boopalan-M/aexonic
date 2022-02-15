import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import { CartItemsContextProvider } from "./Components/context/cartContext";
import Header from "./Components/Header/Header";
function App() {
  return (
    <CartItemsContextProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Header} />
            <Route  exact path="/cart" component={Cart} />
          </Switch>
        </Router>
      </div>
    </CartItemsContextProvider>
  );
}

export default App;
