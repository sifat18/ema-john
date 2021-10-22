import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import NoPage from "./Components/Nopage/NoPage";
import OrderReview from "./Components/OrderReview/OrderReview";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./Components/Private/PrivateRoute";
import Register from "./Components/Register/Register";
import Shipping from "./Components/Shipping/Shipping";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute path='/placeOrder'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/shipping'>
              <Shipping></Shipping>
            </PrivateRoute>
            <Route path='*'>
              <NoPage></NoPage>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
