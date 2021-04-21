import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateLayout from "./layouts/PrivateLayout";
import HomePage from "./pages/Home";
import DividasPage from "./pages/Dividas";
import UsersPage from "./pages/Users";

import "./App.css";

function App() {
  return (
    <Router>
      <PrivateLayout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/dividas">
            <DividasPage />
          </Route>
          <Route path="/users">
            <UsersPage />
          </Route>
          <Route path="*">
            <h2>Página não encontrada!</h2>
          </Route>
        </Switch>
      </PrivateLayout>
    </Router>
  );
}

export default App;
