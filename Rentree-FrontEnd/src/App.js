import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";

import { Switch, BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//import RegistrationLocal from "./pages/RegistrationLocal";
//import LoginLocal from "./pages/LoginLocal";
// import TopBooks from "./components/Rentree/Covid_Essentials/CovidSection";
import NewBooks from "./components/Rentree/New_Arrival_Books/NewBooks";
import PremiumGames from "./components/Rentree/Premium_Games/PremiumGames";
import Register from "./pages/Register";
import CheckOut from "./pages/CheckOut";
import CheckOut2 from "./pages/CheckOut2";
import TopBooks from "./components/Rentree/Top _Sellers_Books/TopBooks";
import Gamess from "./components/Rentree/Games/Gamess";
import Rentree from "./components/Rentree/Rentree";
import OrderPlaced from "./pages/OrderPlaced";
import LogOut from "./pages/LogOut";

import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact></Route>

          <Route path="/checkoutpage" component={CheckOut} exact></Route>
          <Route path="/register" component={Register} exact></Route>
          <Route path="/login" component={Login} exact></Route>
          <Route path="/topbooks" component={TopBooks} />
          <Route path="/newbooks" component={NewBooks} />
          <Route path="/premiumgames" component={PremiumGames} />
          <Route path="/games" component={Gamess} />
          <Route path="/orderplaced" component={OrderPlaced} />
          <Route path="/logout" component={LogOut} />
          <Route path="/checkout2" component={CheckOut2} exact />

          <Route path="/rentree" component={Rentree} />

          <Rentree showNavbar={true} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );

  //return <Home/>;
}

export default App;
