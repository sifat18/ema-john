import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import NoPage from "./Components/Nopage/NoPage";
import OrderReview from "./Components/OrderReview/OrderReview";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>

        <Switch>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path='/home'>
            <Shop></Shop>
          </Route>
          <Route path='/orders'>
            <OrderReview></OrderReview>
          </Route>
          <Route path='/placeOrder'>
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path='*'>
            <NoPage></NoPage>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
