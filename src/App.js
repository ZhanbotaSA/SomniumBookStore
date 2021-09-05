import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Books from "./containers/Books";
import Cart from "./containers/Cart";

export default function App() {
  return (
    <Router>
      <div>
        <div className="container header">
          <div className="row align-items-center">
            <div className="col-2">
              <Link to="/">Список книг</Link>
            </div>
            <div className="col-2">
              <Link to="/cart">Корзина</Link>
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

