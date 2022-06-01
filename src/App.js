import React from "react";
import Homepage from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import "./assets/stylesheets/main.scss";
import ReviewForm from "./Components/Review/ReviewForm";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import ProductDetail from "./Pages/ProductDetail";
import ProductListPage from "./Pages/ProductList";
import Checkout from "./Pages/Checkout";
import Sales from "./Pages/Sales";
import OrderConfirmation from "./Pages/OrderConfirmation";
import Header from "./Components/Header/HeaderContainer";
import { withRouter } from "react-router";

// BUG
//import ReviewModal from "./components/review/reviewModal"

//      <ReviewForm/>
//     <Homepage />
//<Footer />

export default function App() {
  return (
    <div className="App">
      <Header />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={withRouter(Homepage)} />
          <Route exact path="/all" component={withRouter(ProductListPage)} />
          <Route exact path="/sales" component={withRouter(Sales)} />
          <Route
            exact
            path="/product/:id"
            component={withRouter(ProductDetail)}
          />
          <Route exact path="/checkoutInfo" component={withRouter(Checkout)} />
          <Route
            exact
            path="./OrderConfirmation"
            component={withRouter(OrderConfirmation)}
          />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
